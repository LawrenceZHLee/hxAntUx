import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import pathToRegexp from 'path-to-regexp';
import { getMenuData } from './menu';

let routerDataCache;

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then(raw => {
        const Component = raw.default || raw;
        return props =>
          createElement(Component, {
            ...props,
            routerData: routerDataCache,
          });
      });
    },
  });
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach(item => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export const getRouterData = app => {
  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    },
    //文档说明
    '/doc/document':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/Document/Document')),
    },
    //企业注册数量统计
    '/dashboard/coStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/Enterprise/CoStatistics')),
    },
    //企业注册数量统计
    '/dashboard/industryDistribution':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/Enterprise/IndustryDistribution')),
    },
    //企业-烟花爆竹生产统计
    '/dashboard/proStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireCom/ProStatistics')),
    },
    //企业-烟花爆竹仓储统计
    '/dashboard/stockStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireCom/StockStatistics')),
    },
    //企业-烟花爆竹运输统计
    '/dashboard/traStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireCom/TraStatistics')),
    },
    //企业-烟花爆竹销售统计
    '/dashboard/saleStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireCom/SaleStatistics')),
    },
    //企业-烟花爆竹销毁统计
    '/dashboard/desStatistics':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireCom/DesStatistics')),
    },
    //企业-烟花爆竹生产登记信息
    '/list/fireProduct': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireCom/ProductInfo')),
    },
    //企业-烟花爆竹仓储登记信息
    '/list/fireStock': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireCom/StockInfo')),
    },
    //企业-烟花爆竹运输登记信息
    '/list/fireTransport': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireCom/TransportInfo')),
    },
    //企业-烟花爆竹销售登记
    '/list/fireSales': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireCom/SaleInfo')),
    },
    //企业-烟花爆竹销毁登记
    '/list/fireDestroy': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireCom/DestroyInfo')),
    },


    //政府-烟花爆竹生产统计
    '/dashboard/proStatisticsGov':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireGov/ProStatistics')),
    },
    //政府-烟花爆竹仓储统计
    '/dashboard/stockStatisticsGov':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireGov/StockStatistics')),
    },
    //政府-烟花爆竹运输统计
    '/dashboard/traStatisticsGov':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireGov/TraStatistics')),
    },
    //政府-烟花爆竹销售统计
    '/dashboard/saleStatisticsGov':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireGov/SaleStatistics')),
    },
    //政府-烟花爆竹销毁统计
    '/dashboard/desStatisticsGov':{
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/FireGov/DesStatistics')),
    },
    //政府-烟花爆竹生产登记信息
    '/list/fireProductGov': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireGov/ProductInfo')),
    },
    //政府-烟花爆竹仓储登记信息
    '/list/fireStockGov': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireGov/StockInfo')),
    },
    //政府-烟花爆竹运输登记信息
    '/list/fireTransportGov': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireGov/TransportInfo')),
    },
    //政府-烟花爆竹销售登记
    '/list/fireSalesGov': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireGov/SaleInfo')),
    },
    //政府-烟花爆竹销毁登记
    '/list/fireDestroyGov': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/FireGov/DestroyInfo')),
    },


    //政府-风险管控
    //分区域显示一张图
    '/dashboard/mapArea': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskGov/MapArea')),
    },
    //分类显示一张图
    '/dashboard/mapSort': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskGov/MapSort')),
    },
    //分级显示一张图
    '/dashboard/mapLevel': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskGov/MapLevel')),
    },
    //风险上报监管
    '/search/report': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskGov/Report')),
    },
    //风险分类监管
    '/judgment/judgmentSort': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskGov/JudgmentSort')),
    },
    //风险分级监管
    '/judgment/judgmentLevel': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskGov/JudgmentLevel')),
    },
    //高风险点监管
    '/judgment/judgmentHigh': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskGov/JudgmentHigh')),
    },
    //风险防范监管
    '/prevent/preventRule': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskGov/PreventRule')),
    },

    //企业-风险管控
    //风险按部门统计
    '/dashboard/statisticsDistrict': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskCom/StatisticsDistrict')),
    },
    //风险按类别统计
    '/dashboard/statisticsClass': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskCom/StatisticsClass')),
    },
    //风险按级别统计
    '/dashboard/statisticsLevel': {
      component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/RiskCom/StatisticsLevel')),
    },
    //风险点查找
    '/assess/assessSearch': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/AssessSearch')),
    },
    //风险点辨识
    '/assess/assessRec': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/AssessRec')),
    },
    //风险点分类管理
    '/sort/sortMan': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/SortMan')),
    },
    //风险点分级管理
    '/sort/sortLevel': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/SortLevel')),
    },
    //风险点清单管理
    '/sort/sortList': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/SortList')),
    },
    //高风险点监管
    '/sort/sortHigh': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/SortHigh')),
    },
    //风险防范管理
    '/prevent/preventRule': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/RiskCom/PreventRule')),
    },

    //信息初审
    '/list/initial-registration': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/TablePages/RegistrationInitial')),
    },
    //信息复核
    '/list/review-registration': {
      component: dynamicWrapper(app, ['list'], () => import('../selfRoutes/TablePages/Review')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
    },
    '/dashboard/monitor': {
      component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
    },
    '/dashboard/workplace': {
      component: dynamicWrapper(app, ['project', 'activities', 'chart'], () =>
        import('../routes/Dashboard/Workplace')
      ),
      // hideInBreadcrumb: true,
      // name: '工作台',
      // authority: 'admin',
    },
    '/form/basic-form': {
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/BasicForm')),
    },
    '/form/step-form': {
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm')),
    },
    '/form/step-form/info': {
      name: '分步表单（填写转账信息）',
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step1')),
    },
    '/form/step-form/confirm': {
      name: '分步表单（确认转账信息）',
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step2')),
    },
    '/form/step-form/result': {
      name: '分步表单（完成）',
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step3')),
    },
    '/form/advanced-form': {
      component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/AdvancedForm')),
    },
    '/list/table-list': {
      component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
    },
    '/list/basic-list': {
      component: dynamicWrapper(app, ['list'], () => import('../routes/List/BasicList')),
    },
    '/list/card-list': {
      component: dynamicWrapper(app, ['list'], () => import('../routes/List/CardList')),
    },
    '/list/search': {
      component: dynamicWrapper(app, ['list'], () => import('../routes/List/List')),
    },
    // '/list/search/projects': {
    //   component: dynamicWrapper(app, ['list'], () => import('../routes/List/Projects')),
    // },
    // '/list/search/applications': {
    //   component: dynamicWrapper(app, ['list'], () => import('../routes/List/Applications')),
    // },
    // '/list/search/articles': {
    //   component: dynamicWrapper(app, ['list'], () => import('../routes/List/Articles')),
    // },
    // '/profile/basic': {
    //   component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/BasicProfile')),
    // },
    // '/profile/advanced': {
    //   component: dynamicWrapper(app, ['profile'], () =>
    //     import('../routes/Profile/AdvancedProfile')
    //   ),
    // },
    '/result/success': {
      component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
    },
    '/result/fail': {
      component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
    },
    '/exception/403': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
    },
    '/exception/404': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
    },
    '/exception/500': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
    },
    '/exception/trigger': {
      component: dynamicWrapper(app, ['error'], () =>
        import('../routes/Exception/triggerException')
      ),
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
    },
    '/user/register': {
      component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
    },
    '/user/register-result': {
      component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
    },
    // '/user/:id': {
    //   component: dynamicWrapper(app, [], () => import('../routes/User/SomeComponent')),
    // },
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData());

  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {};
  // The route matches the menu
  Object.keys(routerConfig).forEach(path => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }
    let router = routerConfig[path];
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
      hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
    };
    routerData[path] = router;
  });
  return routerData;
};
