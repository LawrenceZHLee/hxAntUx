import React, {Component, Fragment} from 'react';
import {Tabs, Table, Button} from 'antd';
import SearchContent from './SearchContent';


const TabPane = Tabs.TabPane;

export default class StepTable extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  render() {
    const {columns} = this.props;
    const {selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const tabContent = columns.map((item, index) => {
      return (
        <TabPane tab={
          <div className="self-step-title">
            <i className={`iconfont icon-${item.tabIcon} f30`}/>
            <p className="self-step-text">{item.tabTitle}<span>{`(${item.dataSource.length})`}</span></p>
          </div>
        } key={index}>
          {
            item.searchColumn ? (
              <SearchContent searchColumn={item.searchColumn}/>
            ) : []
          }
          {
            item.rowSelection ?
              (<div style={{"marginBottom": "20px"}}>
                <Button type="primary" disabled={!hasSelected}>操作</Button>
              </div>)
              :
              []
          }
          <Table columns={item.columns} dataSource={item.dataSource} rowSelection={item.rowSelection ? rowSelection : false}/>
        </TabPane>
      )
    });
    return (
      <Tabs defaultActiveKey="0" type="card" size="large" className="self-tabs">
        {tabContent}
      </Tabs>
    )
  }
}

