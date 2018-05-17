import React, {Component, Fragment} from 'react';
import SelfTimeLine from '../../components/TimeLineModule/SelfTimeLine';

const timeData=[
  {
    color:"green",
    title:"企业注册",
    content:[
      "某年某月至某年某月",
      "比赛已完成"
    ]
  },
  {
    color:"grey",
    title:"企业注册1",
    content:[
      "某年某月至某年某月",
      "比赛已完成"
    ]
  },
  {
    color:"red",
    title:"企业注册2",
    content:[
      "某年某月至某年某月",
      "比赛已完成"
    ]
  },
  {
    color:"darkRed",
    title:"企业注册1",
    content:[
      "某年某月至某年某月",
      "比赛已完成"
    ]
  },
  {
    color:"purple",
    title:"企业注册1",
    content:[
      "某年某月至某年某月",
      "比赛已完成"
    ]
  },
];
export default () => {
    return (
        <SelfTimeLine data={timeData} overview="企业名称巴拉巴拉"/>
    )
}
