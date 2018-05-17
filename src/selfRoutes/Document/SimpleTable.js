import React, {Component, Fragment} from 'react';
import TraTable from '../../components/SelfTable/TraTable';

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

export default () => {
  return (
    <TraTable
      columns={columns}
      data={data}
      title="按监管行业分布统计(达标总计 31284 家)"
    />
  )
}
