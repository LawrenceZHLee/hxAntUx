import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generatePieData} from './../../utils/generatePieData';

/*
 * 企业烟花爆竹销售统计
 * */

const values = reValue(6, 10000);
//生成月份
const result = generateMonth(6);

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
// const chartData = [
//   {genre: '危险化学品企业', sold: values[0]},
//   {genre: '烟花爆竹企业', sold: values[1],},
//   {genre: '非煤矿山企业', sold: values[2],},
//   {genre: '工商贸企业', sold: values[3],},
//   {genre: '易制毒企业', sold: values[4],},
//   {genre: '其他企业', sold: values[5],},
// ];

const chartData = [
  // {name: 'Asia', time: 1246406400000, count: 502},
  // {name: 'Asia', time: 1246492800000, count: 635},
  // {name: 'Asia', time: 1246579200000, count: 809},

  {name: 'Asia', time: '80408', count: 5268},
  {name: 'Asia', time: '80508', count: 4400},
  {name: 'Asia', time: '80608', count: 3634},
  {name: 'Asia', time: '80708', count: 947},

  // {name: 'Africa', time: 1246406400000, count: 106},
  // {name: 'Africa', time: 1246492800000, count: 107},
  // {name: 'Africa', time: 1246579200000, count: 111},

  {name: 'Africa', time: '80408', count: 1766},
  {name: 'Africa', time: '80508', count: 221},
  {name: 'Africa', time: '80608', count: 767},
  {name: 'Africa', time: '80708', count: 133},

  // {name: 'Europe', time: 1246406400000, count: 163},
  // {name: 'Europe', time: 1246492800000, count: 203},
  // {name: 'Europe', time: 1246579200000, count: 276},

  {name: 'Europe', time: '80408', count: 628},
  {name: 'Europe', time: '80508', count: 547},
  {name: 'Europe', time: '80608', count: 729},
  {name: 'Europe', time: '80708', count: 408},

  // {name: 'Oceania', time: 1246406400000, count: 200},
  // {name: 'Oceania', time: 1246492800000, count: 200},
  // {name: 'Oceania', time: 1246579200000, count: 200},

  {name: 'Oceania', time: '80408', count: 460},
  {name: 'Oceania', time: '80508', count: 230},
  {name: 'Oceania', time: '80608', count: 300},
  {name: 'Oceania', time: '80708', count: 300},
];

const chartCol = [
  {
    name: '已销售'
  },
  {
    name: '未销售'
  }
];

//饼图数据
// const chartData = generatePieData(chartCol, 10000, result);
// console.log('$PARANSchartData!!~~~~~',chartData)

const cols = {
  time: {
    type: 'linear',
    tickInterval: 50
  }
};

export default class ProStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartContent = (
      <div style={{"margin": "0 auto", "width": "800px"}}>
        <Chart height={window.innerHeight} data={chartData} scale={cols} forceFit>
          <Axis name="time"/>
          <Axis name="count"/>
          <Legend />
          <Tooltip crosshairs={{type: 'line'}}/>
          <Geom type="area" position="time*count" color='name'/>
          <Geom type="line" position="time*count" size={2} color='name'/>
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="烟花爆竹销售统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
