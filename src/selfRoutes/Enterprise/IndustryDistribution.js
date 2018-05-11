import React, {Component, Fragment} from 'react';
import {Chart, Geom, Axis, Tooltip, Label} from 'bizcharts';
import CompositeTable from './../../components/SelfTable/CompositeTable';
import SearchContainer from './../../components/SelfTable/SearchContent';

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
    key:"1",
    industry: "危险化学品企业",
    amount: 3986,
  },
  {
    key:"2",
    industry: "烟花爆竹企业",
    amount: 1788
  },
  {
    key:"3",
    industry: "非煤矿山企业",
    amount: 1190
  },
  {
    key:"4",
    industry: "工商贸企业",
    amount: 15344
  },
  {
    key:"5",
    industry: "易制毒企业",
    amount: 30
  },
  {
    key:"6",
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

const searchColumn = [
  {
    name: "名称",
    value: "name",
    type: "select",
    option: [
      {
        value: "Jack"
      },
      {
        value: "Lucy"
      },
      {
        value: "yiminghe"
      }
    ]
  },
  {
    name: "关键字",
    value: "keyword",
    type: "input",
  },
  {
    name: "时间",
    value: "time",
    type: "date",
  },
  {
    name: "时间段",
    value: "rangeTime",
    type: "rangePicker",
  },
  {
    name: "级联选择",
    value: "selects",
    type: "selects",
    provinceData:"安徽省",
    cityData:['合肥市', '淮北市'],
    countyData:{
      合肥市: ['瑶海区', '庐阳区', '蜀山区'],
      淮北市: ['杜集区', '相山区', '烈山区'],
    }
  },
];

export default class IndustryDistribution extends Component {
  state = {};

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const chartContent = (
      <div style={{"margin": "0 auto", "width": "800px"}}>
        <Chart height={450} data={chartData} scale={cols} forceFit>
          <Axis name="genre"/>
          <Axis name="sold"/>
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre">
            <Label content={["genre*sold", (genre, sold) => sold]}/>
          </Geom>
        </Chart>
      </div>
    );
    return (
      <Fragment>
        <SearchContainer
          searchColumn={searchColumn}
        />
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
