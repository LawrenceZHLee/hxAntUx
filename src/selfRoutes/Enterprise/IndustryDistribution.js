import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';

const columns = [
  {
    title: "监管行业",
    key: 1,
    dataIndex: "industry"
  },
  {
    title: "企业数量",
    key: 2,
    dataIndex: "amount"
  }
];
const data = [
  {
    industry: "危险化学品企业",
    amount: 3986
  },
  {
    industry: "烟花爆竹企业",
    amount: 1788
  },
  {
    industry: "非煤矿山企业",
    amount: 1190
  },
  {
    industry: "工商贸企业",
    amount: 15344
  },
  {
    industry: "易制毒企业",
    amount: 30
  },
  {
    industry: "其他企业",
    amount: 8946
  },
];

//柱状图
const chartData = [
  {genre: '危险化学品企业', sold: 3986},
  {genre: '烟花爆竹企业', sold: 1788,},
  {genre: '非煤矿山企业', sold: 1190,},
  {genre: '工商贸企业', sold: 15344,},
  {genre: '易制毒企业', sold: 30,},
  {genre: '其他企业', sold: 8946,},
];

// 定义度量
const cols = {
  genre: {alias: '监管行业'},
  sold: {alias: '企业数量'},
};

export default class IndustryDistribution extends Component {
  state = {};

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const chartContent = (
        <Chart width={800} data={chartData} scale={cols} forceFit>
          <Axis name="genre"/>
          <Axis name="sold"/>
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre"/>
        </Chart>
    );
    return (
      <Fragment>
        <CompositeTable
          title="按监管行业分布统计(达标总计 31284 家)"
          chartContent={chartContent}
          columns={columns}
          data={data}
        />
      </Fragment>
    );
  }
}
