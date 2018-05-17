import React, {Component, Fragment} from 'react';
import {Collapse} from 'antd';
import SimpleTableList from './SimpleTableList';
import SelectTable from './SelectTableList';
import ProgressTableList from './ProgressTableList';
const Panel = Collapse.Panel;

export default () => {
  return (
    <div className="self-document-container">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="单一列表" key="1">
          <SimpleTableList/>
        </Panel>
        <Panel header="选择列表" key="2">
          <SelectTable/>
          <p>若需要单一性的多样列表，进入antd<a href="https://ant.design/components/table-cn/" target="_blank">列表库</a>找寻自己需要的列表。</p>
        </Panel>
        <Panel header="流程列表" key="3">
          <ProgressTableList/>
        </Panel>
      </Collapse>
    </div>
  )
}
