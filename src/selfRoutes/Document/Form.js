import React, {Component, Fragment} from 'react';
import {Collapse} from 'antd';
const Panel = Collapse.Panel;
import EditForm from './EditForm';
import UnEditForm from './UnEditForm';

export default () => {
  return (
    <div className="self-document-container">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="可编辑表单" key="1">
          <EditForm/>
        </Panel>
        <Panel header="不可编辑表单" key="3">
          <UnEditForm/>
        </Panel>
      </Collapse>
    </div>
  )
}
