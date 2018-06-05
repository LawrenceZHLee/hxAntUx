import React, {Component, Fragment} from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import {sortValue} from './../../utils/randomNum';
import {setData} from './../../utils/setData';
import MapStatistics from './MapStatistics';

/*
 * 风险分级显示
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
        <TabPane tab="一级" key="2">
          <MapStatistics
            title="安徽省各市一级风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="二级" key="3">
          <MapStatistics
            title="安徽省各市二级风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="三级" key="4">
          <MapStatistics
            title="安徽省各市三级风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
        <TabPane tab="四级" key="5">
          <MapStatistics
            title="安徽省各市四级风险上报量"
            column={column}
            data={data}
            rowKey="rank"
          />
        </TabPane>
      </Tabs>
    )
  }
}
