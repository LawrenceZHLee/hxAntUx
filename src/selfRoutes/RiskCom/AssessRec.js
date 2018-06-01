import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import StepTable from '../../components/SelfTable/StepTable';
import Omit from '../../components/SelfModule/Omit';
import {dataSource} from './../RiskGov/data';
import {formColumn} from './data';

/*
 * 风险点评估
 * */

// {
//   title: '评估状态',//已评估，未评估
//   dataIndex: 'riskRecStatus',
//   key: 'riskRecStatus',
// },

export default class AssessRec extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        tabTitle: "待评估",
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
            name: "登记时间",
            value: "riskRegTime",
            type: "rangePicker",
          },
        ],
        dataSource: dataSource,
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
            title: '重大危险源级别',
            dataIndex: 'dangerLevel',
            key: 'dangerLevel',
          }, {
            title: '描述',
            dataIndex: 'riskDesc',
            key: 'riskDesc',
          },{
            title: '可致后果',
            dataIndex: 'riskResult',
            key: 'riskResult',
          }, {
            title: '管控措施',
            dataIndex: 'riskMeasure',
            key: 'riskMeasure',
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
          }}>辨识</a>
          </span>
              )
            }
          }
        ]
      },
      {
        tabTitle: "已评估",
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
            name: "评估时间",
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
            title: '重大危险源级别',
            dataIndex: 'dangerLevel',
            key: 'dangerLevel',
          }, {
            title: '描述',
            dataIndex: 'riskDesc',
            key: 'riskDesc',
          },{
            title: '可致后果',
            dataIndex: 'riskResult',
            key: 'riskResult',
          }, {
            title: '管控措施',
            dataIndex: 'riskMeasure',
            key: 'riskMeasure',
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
    if (type === "a") {
      this.refs.infoForm.getForm().resetFields();
    }
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
        <StepTable columns={this.columns}/>
        <Modal
          title="生产登记详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={formColumn} data={text} editable={false}/>
        </Modal>
        <Modal
          title="新建生产登记"
          visible={visible}
          onOk={this.handleOk}
          onCancel={(e) => this.handleCancel(e,"a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={formColumn} data={text} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
