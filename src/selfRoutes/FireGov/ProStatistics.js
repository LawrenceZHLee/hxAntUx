import React, {Component, Fragment} from 'react';
import {Table} from 'antd';

/*
 * 烟花爆竹统计
 * */
const dataSource = [{
  key: '1',
  type: '喷花类',
  level: 1,
  packages: 10,
  rounds: 32
}, {
  key: '2',
  type: '旋转类',
  level: 2,
  packages: 4,
  rounds: 22
}, {
  key: '3',
  type: '升空类',
  level: 3,
  packages: 2,
  rounds: 15
}];



export default class ProStatistics extends Component {
  constructor(props){
    super(props);
    this.columns = [{
      title: '烟花爆竹类别',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '烟花爆竹级别',
      dataIndex: 'level',
      key: 'level',
      render: (level) => {
        return {1: "A级", 2: "B级", 3: "C级"}[level]
      }
    }, {
      title: '库存箱数量（箱/件）',
      dataIndex: 'packages',
      key: 'packages',
    }, {
      title: '库存箱数量（发/个）',
      dataIndex: 'rounds',
      key: 'rounds',
    }, {
      title: '操作',
      key: 'operation',
      render: (record, index) => {
        return (
          <a href="javascript:void(0)" onClick={()=>{this.detail(record)}}>查看仓储明细</a>
        )
      }
    }
    ];
  }

  detail = (record) => {
    console.log('$PARANSrecord',record)
  };

  render() {
    return (
      <Table dataSource={dataSource} columns={this.columns} pagination={false}/>
    );
  }
}
