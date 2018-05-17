import React, {Component, Fragment} from 'react';
import SelfForm from '../../components/SelfModule/SelfForm';

const formColumn = [
  {
    name: "企业注册信息",
    type: "title"
  },
  {
    name: "企业名称",
    value: "name",
    type: "input",
  },
  {
    name: "名称",
    value: "names",
    type: "select",
    span: 12,
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
    name: "时间",
    value: "time",
    type: "date",
    span: 12,
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
    provinceData: "安徽省",
    cityData: ['合肥市', '淮北市'],
    countyData: {
      合肥市: ['瑶海区', '庐阳区', '蜀山区'],
      淮北市: ['杜集区', '相山区', '烈山区'],
    }
  },
];

const data = {
  name:"安徽省安监平台",
  names:"Jack",
  time:"2018-5-17",
  rangeTime:"2017/5/17-2018/5/18",
  selects:'安徽省-合肥市-瑶海区'
};

export default () => {
  return (
    <SelfForm formColumn={formColumn} data={data} editable={false}/>
  )
}
