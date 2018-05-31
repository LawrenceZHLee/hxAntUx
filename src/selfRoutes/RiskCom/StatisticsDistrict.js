import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Legend} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generateChartData} from './../../utils/generateChartData';
import {View, DataSet} from '@antv/data-set';

/*
 * 风险按部门统计
 * */

const values = reValue(45,1000);
// const result = generateMonth(6);

const columns = [
  {
    title: '风险类别',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '部门一',
    dataIndex: 'd1',
    key: 'd1',
  }, {
    title: '部门二',
    dataIndex: 'd2',
    key: 'd2',
  }, {
    title: '部门三',
    dataIndex: 'd3',
    key: 'd3',
  }, {
    title: '部门四',
    dataIndex: 'd4',
    key: 'd4',
  }, {
    title: '部门五',
    dataIndex: 'd5',
    key: 'd5',
  }
];
const data = [
  {
    key: '1',
    type: '安全生产相关证照',
    d1: values[0],
    d2: values[1],
    d3: values[2],
    d4: values[3],
    d5: values[4]
  },
  {
    key: '2',
    type: '安全生产管理机构设置情况',
    d1: values[5],
    d2: values[6],
    d3: values[7],
    d4: values[8],
    d5: values[9]
  },
  {
    key: '3',
    type: '“三同时”管理',
    d1: values[10],
    d2: values[11],
    d3: values[12],
    d4: values[13],
    d5: values[14]
  },
  {
    key: '4',
    type: '安全生产责任制',
    d1: values[15],
    d2: values[16],
    d3: values[17],
    d4: values[18],
    d5: values[19]
  },
  {
    key: '5',
    type: '安全培训',
    d1: values[20],
    d2: values[21],
    d3: values[22],
    d4: values[23],
    d5: values[24]
  },
  {
    key: '6',
    type: '事故隐患排查',
    d1: values[25],
    d2: values[26],
    d3: values[27],
    d4: values[28],
    d5: values[29]
  },
  {
    key: '7',
    type: '应急救援及演练',
    d1: values[30],
    d2: values[31],
    d3: values[32],
    d4: values[33],
    d5: values[34]
  },
  {
    key: '8',
    type: '外包单位及管理',
    d1: values[35],
    d2: values[36],
    d3: values[37],
    d4: values[38],
    d5: values[39]
  },
  {
    key: '9',
    type: '职业健康防护',
    d1: values[40],
    d2: values[41],
    d3: values[42],
    d4: values[43],
    d5: values[44]
  },
];

//饼图数据
const chartCol = [
  {
    name: "安全生产相关证照"
  },
  {
    name: "安全生产管理机构设置情况"
  },
  {
    name: "“三同时”管理"
  },
  {
    name: "安全生产责任制"
  },
  {
    name: "安全培训"
  },
  {
    name: "事故隐患排查"
  },
  {
    name: "应急救援及演练"
  },
  {
    name: "外包单位及管理"
  },
  {
    name: "职业健康防护"
  }
];

const result = ['部门一','部门二','部门三','部门四','部门五'];

const chartData = generateChartData(chartCol, result, 1000);

const ds = new DataSet();
const dv = ds.createView().source(chartData);
dv.transform({
  type: 'fold',
  fields: result, // 展开字段集
  key: '部门', // key字段
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
          <Axis name="部门" />
          <Axis name="总量" />
          <Tooltip />
          <Geom type='intervalStack' position="部门*总量" color={'name'} style={{stroke: '#fff',lineWidth: 1}} />
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="风险点按部门统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
