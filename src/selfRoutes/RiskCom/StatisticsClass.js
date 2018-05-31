import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Legend} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generateChartData} from './../../utils/generateChartData';
import {View, DataSet} from '@antv/data-set';

/*
 * 风险按类别统计
 * */

const values = reValue(45, 1000);
// const result = generateMonth(6);

const columns = [
  {
    title: '部门',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '安全生产相关证照',
    dataIndex: 'd1',
    key: 'd1',
  }, {
    title: '安全生产管理机构设置情况',
    dataIndex: 'd2',
    key: 'd2',
  }, {
    title: '“三同时”管理',
    dataIndex: 'd3',
    key: 'd3',
  }, {
    title: '安全生产责任制',
    dataIndex: 'd4',
    key: 'd4',
  }, {
    title: '安全培训',
    dataIndex: 'd5',
    key: 'd5',
  }, {
    title: '事故隐患排查',
    dataIndex: 'd6',
    key: 'd6',
  }, {
    title: '应急救援及演练',
    dataIndex: 'd7',
    key: 'd7',
  }, {
    title: '外包单位及管理',
    dataIndex: 'd8',
    key: 'd8',
  }, {
    title: '职业健康防护',
    dataIndex: 'd9',
    key: 'd9',
  }
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
    d6: values[25],
    d7: values[26],
    d8: values[27],
    d9: values[28],
  },
  {
    key: '2',
    type: '部门二',
    d1: values[5],
    d2: values[6],
    d3: values[7],
    d4: values[8],
    d5: values[9],
    d6: values[29],
    d7: values[30],
    d8: values[31],
    d9: values[32],
  },
  {
    key: '3',
    type: '部门三',
    d1: values[10],
    d2: values[11],
    d3: values[12],
    d4: values[13],
    d5: values[14],
    d6: values[33],
    d7: values[34],
    d8: values[35],
    d9: values[36],
  },
  {
    key: '4',
    type: '部门四',
    d1: values[15],
    d2: values[16],
    d3: values[17],
    d4: values[18],
    d5: values[19],
    d6: values[37],
    d7: values[38],
    d8: values[39],
    d9: values[40],
  },
  {
    key: '5',
    type: '部门五',
    d1: values[20],
    d2: values[21],
    d3: values[22],
    d4: values[23],
    d5: values[24],
    d6: values[41],
    d7: values[42],
    d8: values[43],
    d9: values[44],
  },
];


//饼图数据
const chartCol = [
  {
    name: "部门一"
  },
  {
    name: "部门二"
  },
  {
    name: "部门三"
  },
  {
    name: "部门四"
  },
  {
    name: "部门五"
  },
];

const result = ['安全生产相关证照', '安全生产管理机构设置情况', '“三同时”管理', '安全生产责任制', '安全培训', '事故隐患排查', '应急救援及演练', '外包单位及管理', '职业健康防护']

const chartData = generateChartData(chartCol, result, 1000);

const ds = new DataSet();
const dv = ds.createView().source(chartData);
dv.transform({
  type: 'fold',
  fields: result, // 展开字段集
  key: '类别', // key字段
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
          <Axis name="类别"/>
          <Axis name="总量"/>
          <Tooltip />
          <Geom type='intervalStack' position="类别*总量" color={'name'} style={{stroke: '#fff', lineWidth: 1}}/>
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="风险点按类别统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
