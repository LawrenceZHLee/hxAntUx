import React, {Component, Fragment} from 'react';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';
import TraTable from '../../components/SelfTable/TraTable';


const columns = [
  {
    title: '行业状态地区',
    dataIndex: 'type',
    colSpan: 2,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      obj.props.rowSpan = 0;
      if ((index + 1) % 3 === 1) {
        obj.props.rowSpan = 3;
      }
      return obj;
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    colSpan: 0,
    render: (status) => {
      return {1: "待审核", 2: "审核通过", 3: "审核不通过"}[status]
    }
  },
  {
    title: '合肥市',
    dataIndex: 'hefei',
  },
  {
    title: '淮北市',
    dataIndex: 'huaibei',
  },
  {
    title: '亳州市',
    dataIndex: 'bozhou',
  },
  {
    title: '宿州市',
    dataIndex: 'suzhou',
  },
  {
    title: '蚌埠市',
    dataIndex: 'bangbu',
  }
];
//status: 1:待审核,2:审核通过,3:审核不通过
const data = [
  {
    key: '10',
    type: '危险化学品企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 8
  },
  {
    key: '11',
    type: '危险化学品企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '12',
    type: '危险化学品企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '21',
    type: '烟花爆竹企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '22',
    type: '烟花爆竹企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '23',
    type: '烟花爆竹企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '31',
    type: '非煤矿山企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '32',
    type: '非煤矿山企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '33',
    type: '非煤矿山企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '41',
    type: '工商贸企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '42',
    type: '工商贸企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '43',
    type: '工商贸企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '51',
    type: '易制毒企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '52',
    type: '易制毒企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '53',
    type: '易制毒企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '61',
    type: '其他企业',
    status: 1,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '62',
    type: '其他企业',
    status: 2,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
  {
    key: '63',
    type: '其他企业',
    status: 3,
    hefei: 5,
    huaibei: 1,
    bozhou: 0,
    suzhou: 3,
    bangbu: 9
  },
];


export default class CoStatistics extends Component {
  state = {};

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <TraTable
        columns={columns}
        data={data}
        title="企业注册数量统计表"
        footer="统计日期截止至：2018年05月04日"
      />
    );
  }
}
