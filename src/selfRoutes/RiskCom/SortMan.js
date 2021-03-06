import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import StepTable from '../../components/SelfTable/StepTable';
import Omit from '../../components/SelfModule/Omit';
import {dataSource} from './../RiskGov/data';
import {formColumn} from './data';

/*
 * 风险点分类管理
 * */
export default class SortMan extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        tabTitle: "待划分",
        tabIcon: "one",
        searchColumn: [
          {
            name: "风险类别",
            value: "riskID",
            type: "input",
          }, {
            name: "风险点所在部门",
            value: "riskDepart",
            type: "input",
          },{
            name: "登记时间",
            value: "riskDepart",
            type: "input",
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
          },  {
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
        tabTitle: "已划分",
        tabIcon: "one",
        dataSource: dataSource,
        searchColumn: [
          {
            name: "风险类别",
            value: "riskID",
            type: "input",
          }, {
            name: "风险点所在部门",
            value: "riskDepart",
            type: "input",
          },{
            name: "评估时间",
            value: "riskDepart",
            type: "input",
          },
        ],
        columns: [
          {
            title: '序号',
            dataIndex: 'riskID',
            key: 'riskID',
          },{
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
          },  {
            title: '管控措施',
            dataIndex: 'riskMeasure',
            key: 'riskMeasure',
          }, {
            title: '所在部门',
            dataIndex: 'riskDepart',
            key: 'riskDepart',
          }, {
            title: '划分人',
            dataIndex: 'riskCateName',
            key: 'riskCateName',
          }, {
            title: '划分时间',
            dataIndex: 'riskCateTime',
            key: 'riskCateTime',
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
          title="风险分类详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={formColumn} data={text} editable={false}/>
        </Modal>
        <Modal
          title="风险分类修改"
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
