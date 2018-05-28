import React, {Component, Fragment} from 'react';
import {Button, Radio} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend, Label} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import {reValue} from './../../utils/randomNum';
import {generateMonth} from './../../utils/generateMonth';
import {generatePieData} from './../../utils/generatePieData';
import {View, DataSet} from '@antv/data-set';
const {DataView} = DataSet;

/*
 * 企业烟花爆竹仓库统计
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
//   { item: '事例一', count: 40 },
//   { item: '事例二', count: 21 },
//   { item: '事例三', count: 17 },
//   { item: '事例四', count: 13 },
//   { item: '事例五', count: 9 }
// ];

//图类名
const chartCol = [
  {
    name: '出仓',
  },
  {
    name: '入仓',
  },
];

//饼图数据
//const chartData = generatePieData(chartCol, 10000);

// 定义度量
const cols = {
  percent: {
    formatter: val => {
      val = (val.toFixed(2) * 100) + '%';
      return val;
    }
  }
};

const dv = new DataView();


export default class ProStatistics extends Component {
  constructor(props) {
    super(props);
    this.state={
      nowMonth:result[0],
      chartData:generatePieData(chartCol, 1000)
    }
  }

  handleChartData = (e) => {
    this.setState({
      nowMonth: e.target.value,
      chartData:generatePieData(chartCol, 1000)
    })
  };

  render() {
    const {nowMonth,chartData} = this.state;
    dv.source(chartData).transform({
      type: 'percent',
      field: 'count',
      dimension: 'name',
      as: 'percent'
    });
    const monthContent = result.map((item, index) => (
      <Radio.Button key={`button${index}`} value={item}>{item}</Radio.Button>
    ));
    const chartContent = (
      <div style={{"margin": "0 auto", "width": "800px"}}>
        月份选择：
        <Radio.Group value={nowMonth} onChange={this.handleChartData}>
          {monthContent}
        </Radio.Group>
        <Chart height={window.innerHeight} data={dv} scale={cols} padding={[80, 100, 80, 80]} forceFit>
          <Coord type='theta' radius={0.75}/>
          <Axis name="percent"/>
          <Legend position='right' offsetY={-window.innerHeight / 2 + 120} offsetX={-100}/>
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color='name'
            tooltip={['name*percent', (item, percent) => {
              percent = percent.toFixed(2) * 100 + '%';
              return {
                name: name,
                value: percent
              };
            }]}
            style={{lineWidth: 1, stroke: '#fff'}}
          >
            <Label content='percent' formatter={(val, item) => {
              return item.point.name + ': ' + val;
            }}/>
          </Geom>
        </Chart>
      </div>
    );
    return (
      <CompositeTable
        title="烟花爆竹仓储统计"
        chartContent={chartContent}
        columns={columns}
        data={data}
      />
    )
  }
}
