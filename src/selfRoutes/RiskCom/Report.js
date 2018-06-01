import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import StepTable from '../../components/SelfTable/StepTable';
import Omit from '../../components/SelfModule/Omit';
import {dataSource} from './../RiskGov/data';
import {formColumn} from './data';

/*
 * 风险点上报
 * */
export default class Report extends Component {
  constructor(props) {
    super(props);

    this.smallC = [
      {
        name: "风险上报",
        type: "title"
      },
      {
        name: "上报单元",
        value: "riskReportUnit",
        type: "input",
      },
      {
        name: "上报人",
        value: "riskReporter",
        type: "input",
        span: 12,
      },
      {
        name: "上报时间",
        value: "riskReportTime",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },];

    this.columns = [
      {
        tabTitle: "待上报",
        tabIcon: "one",
        searchColumn: [
          {
            name: "风险点名称",
            value: "riskID",
            type: "input",
          },
          {
            name: "风险点所在部门",
            value: "riskRegName",
            type: "input",
          },
          {
            name: "评估时间",
            value: "riskRegTime",
            type: "rangePicker",
          },
        ],
        dataSource: dataSource,
        rowSelection: [
          {
            name: "批量上报",
            fun: () => this.showSmall()
          }
        ],
        columns: [
          {
            title: '序号',
            dataIndex: 'riskID',
            key: 'riskID',
          }, {
            title: '级别',
            dataIndex: 'riskLevel',
            key: 'riskLevel',
          }, {
            title: '分类名称',
            dataIndex: 'riskGround',
            key: 'riskGround',
          }, {
            title: '风险名称',
            dataIndex: 'riskName',
            key: 'riskName',
          }, {
            title: '是否重大危险源',
            dataIndex: 'dangerSource',
            key: 'dangerSource',
          }, {
            title: '所在部门',
            dataIndex: 'riskDepart',
            key: 'riskDepart',
          },
          {
            title: '操作',
            key: 'operation',
            render: (record, index) => {
              return (
                <span>
          <a style={{"marginRight": "10px"}} href="javascript:void(0)" onClick={() => {
            this.showReadModal(record)
          }}>查看详情</a>
          <a href="javascript:void(0)" onClick={() => {
            this.showModal(record)
          }}>上报</a>
          </span>
              )
            }
          }
        ]
      },
      {
        tabTitle: "已上报",
        tabIcon: "one",
        dataSource: dataSource,
        searchColumn: [
          {
            name: "风险点名称",
            value: "riskID",
            type: "input",
          },
          {
            name: "风险点所在部门",
            value: "riskRegName",
            type: "input",
          },
          {
            name: "上报时间",
            value: "riskRegTime",
            type: "rangePicker",
          },
        ],
        columns: [
          {
            title: '序号',
            dataIndex: 'riskID',
            key: 'riskID',
          }, {
            title: '级别',
            dataIndex: 'riskLevel',
            key: 'riskLevel',
          }, {
            title: '分类名称',
            dataIndex: 'riskGround',
            key: 'riskGround',
          }, {
            title: '风险名称',
            dataIndex: 'riskName',
            key: 'riskName',
          }, {
            title: '是否重大危险源',
            dataIndex: 'dangerSource',
            key: 'dangerSource',
          }, {
            title: '所在部门',
            dataIndex: 'riskDepart',
            key: 'riskDepart',
          }, {
            title: '上报人',
            dataIndex: 'riskReporter',
            key: 'riskReporter',
          },{
            title: '上报时间',
            dataIndex: 'riskReportTime',
            key: 'riskReportTime',
          },
          {
            title: '操作',
            key: 'operation',
            render: (record, index) => {
              return (
                <span>
          <a style={{"marginRight": "10px"}} href="javascript:void(0)" onClick={() => {
            this.showReadModal(record)
          }}>查看详情</a>
                  {/*<a href="javascript:void(0)" onClick={() => {*/}
                  {/*this.showModal(record)*/}
                  {/*}}>辨识</a>*/}
          </span>
              )
            }
          }
        ]
      },
    ];

    this.state = {
      readVisible: false,
      visible: false,
      text: '',
      allVisible: false
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
      text: '',
      allVisible:false
    });
  };

  showSmall = () => {
    this.setState({
      allVisible: true
    })
  };

  handleCancel = (e, type) => {
    if (type === "a") {
      this.refs.infoForm.getForm().resetFields();
    } else if (type === "b") {
      this.refs.smallForm.getForm().resetFields();
    }
    this.setState({
      visible: false,
      readVisible: false,
      text: '',
      allVisible: false
    });
  };

  render() {
    const {readVisible, visible, text, allVisible} = this.state;
    return (
      <Fragment>
        <StepTable columns={this.columns}/>
        <Modal
          title="上报登记详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={formColumn} data={text} editable={false}/>
        </Modal>
        <Modal
          title="新建上报登记"
          visible={visible}
          onOk={this.handleOk}
          onCancel={(e) => this.handleCancel(e,"a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={formColumn} data={text} editable={true}/>
        </Modal>

        <Modal
          title="批量上报"
          visible={allVisible}
          onOk={this.handleOk}
          onCancel={(e) => this.handleCancel(e,'b')}
          width={800}
        >
          <SelfForm ref="smallForm" formColumn={this.smallC} data={{}} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
