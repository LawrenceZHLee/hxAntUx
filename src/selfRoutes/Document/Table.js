import React, {Component, Fragment} from 'react';
import ComplexTable from './ComplexTable';
import SimpleTable from './SimpleTable';
import SwitchingTable from './SwitchingTable';
import {Collapse} from 'antd';
const Panel = Collapse.Panel;

export default () => {
  return (
    <div className="self-document-container">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="复杂表格" key="1">
          <ComplexTable/>
        </Panel>
        <Panel header="简单表格" key="2">
          <SimpleTable/>
        </Panel>
        <Panel header="图表切换" key="3">
          <SwitchingTable/>
          <p>若需要其他图表，进入<a href="https://alibaba.github.io/BizCharts/demo.html" target="_blank">图表库</a>找寻自己需要的图表。</p>
        </Panel>
      </Collapse>
    </div>
  )
}
