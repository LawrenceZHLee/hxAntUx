import React, {Component, Fragment} from 'react';
import Menu from './Menu';
import Table from './Table';
import TableList from './TableList';
import {Tabs} from 'antd';
import './index.less';
const TabPane = Tabs.TabPane;

export default class Document extends Component {

  render() {
    return (
      <Fragment>
        <h2>说明文档</h2>
        <Tabs defaultActiveKey="0">
          <TabPane tab="菜单配置" key="0">
            <Menu/>
          </TabPane>
          <TabPane tab="表格" key="1">
            <Table/>
          </TabPane>
          <TabPane tab="列表" key="2">
            <TableList/>
          </TabPane>
          <TabPane tab="表单" key="3">Content of Tab Pane 3</TabPane>
          <TabPane tab="搜索框" key="4">Content of Tab Pane 3</TabPane>
          <TabPane tab="时间轴" key="5">Content of Tab Pane 3</TabPane>
          <TabPane tab="bpmn" key="6">Content of Tab Pane 3</TabPane>
        </Tabs>
      </Fragment>
    )
  }
}
