import React, {Component, Fragment} from 'react';
import {Table} from 'antd';

//自定义表格
export default ({columns,data,title,footer}) => {
  return (
    <Fragment>
      <Table className="self-table" pagination={false} columns={columns} dataSource={data} bordered title={() => {
        return (<div className="self-table-header">{title}</div>)
      }}/>
      <div className="self-footer"><p className="self-footer-text">{footer}</p></div>
    </Fragment>
  );
}
