import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Label,Legend} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import { View,DataSet } from '@antv/data-set';
const ds = new DataSet();

/*
 * 政府烟花爆竹生产统计
 * */

const values = reValue(6,10000);
console.log('$PARANSvalues', values);
const columns = [
  {
    title: '烟花爆竹类别',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '烟花爆竹级别',
    dataIndex: 'level',
    key: 'level',
    render: (level) => {
      return {1: "A级", 2: "B级", 3: "C级"}[level]
    }
  }, {
    title: '库存箱数量（箱/件）',
    dataIndex: 'packages',
    key: 'packages',
  }, {
    title: '库存箱数量（发/个）',
    dataIndex: 'rounds',
    key: 'rounds',
  }
];
const data = [
  {
    key: '1',
    type: '喷花类',
    level: 1,
    packages: values[0],
    rounds: values[1]
  }, {
    key: '2',
    type: '旋转类',
    level: 2,
    packages: values[2],
    rounds: values[3]
  }, {
    key: '3',
    type: '升空类',
    level: 3,
    packages: values[4],
    rounds: values[5]
  }
];

//柱状图
const chartData = [
  {genre: '危险化学品企业', sold: values[0]},
  {genre: '烟花爆竹企业', sold: values[1],},
  {genre: '非煤矿山企业', sold: values[2],},
  {genre: '工商贸企业', sold: values[3],},
  {genre: '易制毒企业', sold: values[4],},
  {genre: '其他企业', sold: values[5],},
];

// 定义度量
const cols = {
  genre: {alias: '监管行业'},
  sold: {alias: '企业数量'},
};

const data1 = [
  { name:'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.' :39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
  { name:'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.' :34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4}
];

const dv = ds.createView().source(data1);
dv.transform({
  type: 'fold',
  fields: [ 'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.' ], // 展开字段集
  key: '月份', // key字段
  value: '月均降雨量', // value字段
});


export default class ProStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartContent = (
      <div style={{"margin": "0 auto", "width": "800px"}}>
        {/*<Chart height={450} data={chartData} scale={cols} forceFit>*/}
          {/*<Axis name="genre"/>*/}
          {/*<Axis name="sold"/>*/}
          {/*<Tooltip />*/}
          {/*<Geom type="interval" position="genre*sold" color="genre">*/}
            {/*<Label content={["genre*sold", (genre, sold) => sold]}/>*/}
          {/*</Geom>*/}
        {/*</Chart>*/}
        <Chart height={400} data={dv} forceFit>
          <Axis name="月份" />
          <Axis name="月均降雨量" />
          <Legend />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type='interval' position="月份*月均降雨量" color={'name'} adjust={[{type: 'dodge',marginRatio: 1/32}]} />
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="烟花爆竹生产统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
