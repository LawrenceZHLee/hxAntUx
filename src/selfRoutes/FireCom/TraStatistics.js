import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Label,Legend} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generateChartData} from './../../utils/generateChartData';
import {View, DataSet} from '@antv/data-set';

/*
 * 企业烟花爆竹运输统计
 * */

const values = reValue(6,10000);
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

//饼图数据
const chartCol = [
  {
    name: '待运输',
  },
  {
    name: '运输中',
  },
  {
    name: '已到达',
  }
];

const chartData = generateChartData(chartCol, result, 10000);

const ds = new DataSet();
const dv = ds.createView().source(chartData);
dv.transform({
  type: 'fold',
  fields: result, // 展开字段集
  key: '月份', // key字段
  value: '总量', // value字段
});


export default class ProStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartContent = (
      <div style={{"margin": "0 auto", "width": "800px"}}>
        <Chart height={400} data={dv} forceFit>
          <Legend />
          <Axis name="月份" />
          <Axis name="总量" />
          <Tooltip />
          <Geom type='intervalStack' position="月份*总量" color={'name'} style={{stroke: '#fff',lineWidth: 1}} />
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="烟花爆竹运输统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
