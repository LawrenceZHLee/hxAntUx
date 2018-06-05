import React, {Component, Fragment} from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import {sortValue} from './../../utils/randomNum';
import {setData} from './../../utils/setData';
import MapStatistics from './MapStatistics';

/*
 * 风险分类显示
 * */

const areas = [
  '合肥市',
  '芜湖市',
  '蚌埠市',
  '淮南市',
  '马鞍山市',
  '淮北市',
  '铜陵市',
  '安庆市',
  '黄山市',
  '滁州市',
  '阜阳市',
  '宿州市',
  '六安市',
  '亳州市',
  '池州市',
  '宣城市',
  '广德县',
  '宿松县',];

const column = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank'
  },
  {
    title: '地区',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '上报量',
    dataIndex: 'value',
    key: 'value',
    render(value){
      return (
        <p className="self-table-list">{value} <span style={{'width': `${value}px`}} className="self-length"/></p>)
    }
  }
];

export default class MapLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    this.setDatas();
  };

  setDatas = () => {
    const values = sortValue(18, 100);
    const data = setData(values, areas);
    this.setState({
      data,
    })
  };


  callback = () => {
    this.setDatas();
  };

  render() {
    const {data} = this.state;
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="全部" key="1">
          <MapStatistics
            title="安徽省各市风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="安全生产相关证照" key="2">
          <MapStatistics
            title="安徽省各市安全生产相关证照风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="安全生产管理机构设置情况" key="3">
          <MapStatistics
            title="安徽省各市安全生产管理机构设置情况风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="“三同时”管理" key="4">
          <MapStatistics
            title="安徽省各市“三同时”管理风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="安全生产责任制" key="5">
          <MapStatistics
            title="安徽省各市安全生产责任制风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="安全培训" key="6">
          <MapStatistics
            title="安徽省各市安全培训风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="事故隐患排查" key="7">
          <MapStatistics
            title="安徽省各市事故隐患排查风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="应急救援及演练" key="8">
          <MapStatistics
            title="安徽省各市应急救援及演练风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="外包单位及管理" key="9">
          <MapStatistics
            title="安徽省各市外包单位及管理风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
      </Tabs>
    )
  }
}
