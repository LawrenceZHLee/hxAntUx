import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {dataSource} from './../RiskGov/data';
import {formColumn} from './data';

/*
 * 高风险监管
 * */
// const dataSource = [
//   {data: ''}
// ];

const searchColumn = [
  {
    name: "风险点名称",
    value: "riskID",
    type: "input",
  },
  {
    name: "风险点类别",
    value: "riskGround",
    type: "select",
    option:[]
  },
  {
    name: "风险点所在部门",
    value: "riskDepart",
    type: "input",
  }
];


export default class SortHigh extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '序号',
        dataIndex: 'riskID',
        key: 'riskID',
      }, {
        title: '风险名称',
        dataIndex: 'riskName',
        key: 'riskName',
      }, {
        title: '描述',
        dataIndex: 'riskDesc',
        key: 'riskDesc',
      }, {
        title: '所在部门',
        dataIndex: 'riskDepart',
        key: 'riskDepart',
      }, {
        title: '登记人',
        dataIndex: 'riskRegName',
        key: 'riskRegName',
      }, {
        title: '登记日期',
        dataIndex: 'riskRegTime',
        key: 'riskRegTime',
      }, {
        title: '操作',
        key: 'operation',
        render: (record, index) => {
          return (
            <span>
          <a style={{"marginRight": "10px"}} href="javascript:void(0)" onClick={() => {
            this.showReadModal(record)
          }}>查看详情</a>
          </span>
          )
        }
      }
    ];

    this.state = {
      readVisible: false,
      visible: false,
      text: ''
    }
  }

  add = () => {
    this.setState({
      visible: true,
      text: ''
    });
  };

  showModal = (text) => {
    this.setState({
      visible: true,
      text
    });
  };

  showReadModal = (text) => {
    this.setState({
      readVisible: true,
      text
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
      readVisible: false,
      text: ''
    });
  };

  handleCancel = (e, type) => {
    this.setState({
      visible: false,
      readVisible: false,
      text: ''
    });
  };

  render() {
    const {readVisible, visible, text} = this.state;
    return (
      <Fragment>
        <SearchContent searchColumn={searchColumn}/>

        <Table dataSource={dataSource} columns={this.columns}/>
        <Modal
          title="高风险详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={formColumn} data={text} editable={false}/>
        </Modal>
      </Fragment>
    );
  }
}
