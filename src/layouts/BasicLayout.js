import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Layout, Icon, message, Tabs, Button} from 'antd';
import DocumentTitle from 'react-document-title';
import {connect} from 'dva';
import {Route, Redirect, Switch, routerRedux} from 'dva/router';
import {ContainerQuery} from 'react-container-query';
import classNames from 'classnames';
import {enquireScreen, unenquireScreen} from 'enquire-js';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import {getRoutes} from '../utils/utils';
import Authorized from '../utils/Authorized';
import {getMenuData} from '../common/menu';
import logo from '../assets/logo.svg';
import selfLogo1 from './../img/logo.png';

import menuList from './../common/menuList';

const TabPane = Tabs.TabPane;
const {Content, Header, Footer} = Layout;
const {AuthorizedRoute, check} = Authorized;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
  const result = {};
  const childResult = {};
  for (const i of menuData) {
    if (!routerData[i.path]) {
      result[i.path] = i;
    }
    if (i.children) {
      Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData));
    }
  }
  return Object.assign({}, routerData, result, childResult);
};

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };
  state = {
    isMobile,
    menuData: getMenuData(menuList.moduleColumn[0].menu),
    moduleColumn: menuList.moduleColumn,
    activeKey: '首页',
    panes: []
  };

  getChildContext() {
    const {location, routerData} = this.props;
    return {
      location,
      breadcrumbNameMap: getBreadcrumbNameMap(getMenuData(), routerData),
    };
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }

  componentWillReceiveProps(nextProps) {
    //console.log('$PARANSnextProps!!!!!!====',nextProps)
    this.tabContentRender();
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    const {routerData, location} = this.props;
    const {pathname} = location;
    let title = 'Ant Design Pro';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - Ant Design Pro`;
    }
    return title;
  }

  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const {routerData} = this.props;
      // get the first authorized route path in routerData
      const authorizedPath = Object.keys(routerData).find(
        item => check(routerData[item].authority, item) && item !== '/'
      );
      return authorizedPath;
    }
    return redirect;
  };
  handleMenuCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };
  handleNoticeClear = type => {
    message.success(`清空了${type}`);
    this.props.dispatch({
      type: 'global/clearNotices',
      payload: type,
    });
  };
  handleMenuClick = ({key}) => {
    if (key === 'triggerError') {
      this.props.dispatch(routerRedux.push('/exception/trigger'));
      return;
    }
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
  };
  handleNoticeVisibleChange = visible => {
    if (visible) {
      this.props.dispatch({
        type: 'global/fetchNotices',
      });
    }
  };
  changeModule = (menuName, name) => {
    const moduleColumn = [...this.state.moduleColumn];
    moduleColumn.forEach(item => {
      item.selected = false;
    });
    for (const item of moduleColumn) {
      if (item.name === name) {
        item.selected = true;
        break;
      }
    }
    this.setState({
      menuData: getMenuData(menuName),
      moduleColumn,
    })
  };

  //面板操作
  onChange = (activeKey) => {
    const {panes} = this.state;
    let nowIndex=0;
    panes.forEach((item,index) => {
      if(item.key === activeKey){
        nowIndex = index;
      }
    });
    const href = panes[nowIndex].path;
    window.location.href = href;
    this.setState({activeKey});
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
      window.location.href = panes[lastIndex].path;
    }else {
      window.location.href = panes[0].path;
    }
    this.setState({panes, activeKey});
  };

  //tab切换模板生成
  tabContentRender = () => {
    const {
      routerData,
      match,
    } = this.props;
    const {panes, activeKey} = this.state;
    const bashRedirect = this.getBashRedirect();
    let index = panes.length;
    let noPage = true;
    let title = '';
    if (redirectData) {
      const pageContent = (
        <Switch>
          {redirectData.map(item => (
            <Redirect key={item.from} exact from={item.from} to={item.to}/>
          ))}
          {getRoutes(match.path, routerData).map(item => {
            if(location.hash.substring(1) === item.key){
              title = item.name;
              for (const it of panes){
                if(it.title === title){
                  noPage = false;
                  index = it.key;
                  break;
                }
              }
            }
            return (
              <AuthorizedRoute
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
                authority={item.authority}
                redirectPath="/exception/403"
              />
            )
          })}
          <Redirect exact from="/" to={bashRedirect}/>
          <Route render={NotFound}/>
        </Switch>
      );
      if(noPage){
        panes.push(
          {
            title,
            content: pageContent,
            key: title,
            path:location.hash
          },
        );
      }
      this.setState({
        panes,
        activeKey: title
      })
    }
  };

  render() {
    const {
      currentUser,
      collapsed,
      fetchingNotices,
      notices,
      location,
    } = this.props;
    const {
      isMobile,
      menuData,
      moduleColumn,
      activeKey,
      panes
    } = this.state;
    const layout = (
      <Layout>
        <Header style={{padding: 0}}>
          <GlobalHeader
            logo={logo}
            currentUser={currentUser}
            fetchingNotices={fetchingNotices}
            notices={notices}
            collapsed={collapsed}
            isMobile={isMobile}
            onNoticeClear={this.handleNoticeClear}
            onCollapse={this.handleMenuCollapse}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
          />
        </Header>
        <Layout>
          <SiderMenu
            logo={logo}
            // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
            // If you do not have the Authorized parameter
            // you will be forced to jump to the 403 interface without permission
            Authorized={Authorized}
            menuData={menuData}
            collapsed={collapsed}
            location={location}
            isMobile={isMobile}
            onCollapse={this.handleMenuCollapse}
            defaultSelectedKeys={["/dashboard", "/dashboard/coStatistics"]}
          />
          <Layout>
            <Content style={{margin: '24px 24px 0', height: '100%'}}>
              <Tabs
                hideAdd
                type="editable-card"
                onEdit={this.onEdit}
                onChange={this.onChange}
                activeKey={activeKey}
              >
                <TabPane tab="首页" key="首页" closable={false}>首页</TabPane>
                <TabPane tab="地图信息一张图" key="地理" closable={false}>地理信息地图</TabPane>
                {panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
              </Tabs>
            </Content>
            {/*<Footer style={{padding: 0}}>*/}
            {/*<GlobalFooter*/}
            {/*links={[*/}
            {/*{*/}
            {/*key: 'Pro 首页',*/}
            {/*title: 'Pro 首页',*/}
            {/*href: 'http://pro.ant.design',*/}
            {/*blankTarget: true,*/}
            {/*},*/}
            {/*{*/}
            {/*key: 'github',*/}
            {/*title: <Icon type="github"/>,*/}
            {/*href: 'https://github.com/ant-design/ant-design-pro',*/}
            {/*blankTarget: true,*/}
            {/*},*/}
            {/*{*/}
            {/*key: 'Ant Design',*/}
            {/*title: 'Ant Design',*/}
            {/*href: 'http://ant.design',*/}
            {/*blankTarget: true,*/}
            {/*},*/}
            {/*]}*/}
            {/*copyright={*/}
            {/*<Fragment>*/}
            {/*Copyright <Icon type="copyright"/> 2018 蚂蚁金服体验技术部出品*/}
            {/*</Fragment>*/}
            {/*}*/}
            {/*/>*/}
            {/*</Footer>*/}
          </Layout>
        </Layout>
      </Layout>
    );

    const moduleContent = moduleColumn.map((item, index) => {
      const color = item.selected ? "selected" : "unSelected";
      return (
        <div className="self-module-item" key={index} onClick={() => (this.changeModule(item.menu, item.name))}>
          <i className={`iconfont ${item.icon} iconfont-module self-color-${color}`}/>
          <p className="self-module-title">{item.name}</p>
        </div>
      )
    });

    return (
      <div>
        <div className="self-header">
          <div className="self-img">
            <img src={selfLogo1} alt=""/>
          </div>
          <p className="self-title">安徽省安全生产信息平台</p>
          <div className="self-module-con">
            <div className="self-out-con">
              {moduleContent}
            </div>
          </div>
        </div>
        <DocumentTitle title={this.getPageTitle()}>
          <ContainerQuery query={query}>
            {params => <div className={classNames(params)}>{layout}</div>}
          </ContainerQuery>
        </DocumentTitle>
      </div>
    );
  }
}

export default connect(({user, global, loading}) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
}))(BasicLayout);
