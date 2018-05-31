import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Legend} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generateChartData} from './../../utils/generateChartData';
import {View, DataSet} from '@antv/data-set';

/*
 * 风险按级别统计
 * */

const values = reValue(45,1000);
// const result = generateMonth(6);

const columns = [
  {
    title: '部门',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '极有可能发生',
    dataIndex: 'd1',
    key: 'd1',
  }, {
    title: '很可能发生',
    dataIndex: 'd2',
    key: 'd2',
  }, {
    title: '可能发生',
    dataIndex: 'd3',
    key: 'd3',
  }, {
    title: '较不可能发生',
    dataIndex: 'd4',
    key: 'd4',
  }, {
    title: '基本不可能发生',
    dataIndex: 'd5',
    key: 'd5',
  },
];

const data = [
  {
    key: '1',
    type: '部门一',
    d1: values[0],
    d2: values[1],
    d3: values[2],
    d4: values[3],
    d5: values[4],
  },
  {
    key: '2',
    type: '部门二',
    d1: values[5],
    d2: values[6],
    d3: values[7],
    d4: values[8],
    d5: values[9],
  },
  {
    key: '3',
    type: '部门三',
    d1: values[10],
    d2: values[11],
    d3: values[12],
    d4: values[13],
    d5: values[14],
  },
  {
    key: '4',
    type: '部门四',
    d1: values[15],
    d2: values[16],
    d3: values[17],
    d4: values[18],
    d5: values[19],
  },
  {
    key: '5',
    type: '部门五',
    d1: values[20],
    d2: values[21],
    d3: values[22],
    d4: values[23],
  },
];

//饼图数据
const chartCol = [
  {
    name: "极有可能发生"
  },
  {
    name: "很可能发生"
  },
  {
    name: "可能发生"
  },
  {
    name: "较不可能发生"
  },
  {
    name: "基本不可能发生"
  },
];

const result = ['部门一','部门二','部门三','部门四','部门五'];

const chartData = generateChartData(chartCol, result, 1000);

const ds = new DataSet();
const dv = ds.createView().source(chartData);
dv.transform({
  type: 'fold',
  fields: result, // 展开字段集
  key: '级别', // key字段
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
          <Axis name="级别" />
          <Axis name="总量" />
          <Tooltip />
          <Geom type='intervalStack' position="级别*总量" color={'name'} style={{stroke: '#fff',lineWidth: 1}} />
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="风险点按级别统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
