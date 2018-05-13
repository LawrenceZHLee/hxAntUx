import React, {Component, Fragment} from 'react';
import {Timeline} from 'antd';

const TimelineItem = Timeline.Item;

export default class SelfTimeLine extends Component {
  render() {
    const {data,overview}=this.props;
    const timeContent = data.map((item,index) => {

      return (
        <Timeline.Item color={item.color} key={index}>
          <div className="self-time-card">
            <h3>{item.title}</h3>
            {item.content.map((item,index)=>(
              <p key={`p${index}`}>{item}</p>
            ))}
          </div>
        </Timeline.Item>
      )
    });
    return (
      <div className="self-timeline-container">
        <p>时间概述: <span>{overview}</span></p>
        <p className="time-color-container">颜色节点:
          <span className="color-block grey-block"/><span>待处理</span>
          <span className="color-block green-block"/><span>已处理</span>
          <span className="color-block dark-block"/><span>已收回</span>
          <span className="color-block purple-block"/><span>已退回</span>
          <span className="color-block red-block"/><span>已中止</span>
          <span className="color-block black-block"/><span>已撤销（被撤销）</span>
        </p>
        <Timeline>
          {timeContent}
          {/*<Timeline.Item color="black">*/}
            {/*Create a services site 2015-09-01*/}
          {/*</Timeline.Item>*/}
          {/*<Timeline.Item color="green">*/}
            {/*<div className="self-time-card">*/}
              {/*<h3>企业注册</h3>*/}
              {/*<p>Solve initial network problems 1</p>*/}
              {/*<p>Solve initial network problems 1</p>*/}
            {/*</div>*/}
          {/*</Timeline.Item>*/}
          {/*<Timeline.Item color="red">*/}
            {/*<p>Solve initial network problems 1</p>*/}
            {/*<p>Solve initial network problems 2</p>*/}
            {/*<p>Solve initial network problems 3 2015-09-01</p>*/}
          {/*</Timeline.Item>*/}
          {/*<Timeline.Item>*/}
            {/*<p>Technical testing 1</p>*/}
            {/*<p>Technical testing 2</p>*/}
            {/*<p>Technical testing 3 2015-09-01</p>*/}
          {/*</Timeline.Item>*/}
        </Timeline>
      </div>
    )
  }
}
