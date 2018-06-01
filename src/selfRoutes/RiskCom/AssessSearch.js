import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {dataSource} from './../RiskGov/data';
/*
 * 风险点查找
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
    name: "危险点所在部门",
    value: "riskRegName",
    type: "input",
  },
  {
    name: "登记时间",
    value: "riskRegTime",
    type: "rangePicker",
  },
];


export default class AssessSearch extends Component {
  constructor(props) {
    super(props);
    this.formColumn = [
      {
        name: "基本信息",
        type: "title"
      },
      {
        name: "风险名称",
        value: "riskName",
        type: "input",
      },
      {
        name: "风险点序号",
        value: "riskID",
        type: "input",
        span: 12,
      },
      {
        name: "风险点所在部门",
        value: "riskDepart",
        type: "input",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
      },
      {
        name: '是否重大危险源',
        value: 'dangerSource',
        span: 12,
        type: "select",
        option: [
          {
            value: "是"
          },
          {
            value: "否"
          }
        ]
      }, {
        name: '重大危险源级别',
        value: 'dangerLevel',
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "select",
        option: [
          {
            value: "一级"
          },
          {
            value: "二级"
          },
          {
            value: "三级"
          },
          {
            value: "四级"
          }
        ]
      },
      {
        name: "风险描述",
        value: "riskDesc",
        type: "input",
      },
      {
        name: "登记人",
        value: "riskRegName",
        type: "input",
        span: 12,
      },
      {
        name: "登记日期",
        value: "riskRegTime",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
    ];

    this.columns = [
      {
        title: '序号',
        dataIndex: 'riskID',
        key: 'riskID',
      },{
        title: "风险名称",
        dataIndex: "riskName",
        key: "riskName",
      }, {
        title: '描述',
        dataIndex: 'riskDesc',
        key: 'riskDesc',
      },{
        title: '是否重大危险源',
        dataIndex: 'dangerSource',
        key: 'dangerSource',
      }, {
        title: '重大危险源级别',
        dataIndex: 'dangerLevel',
        key: 'dangerLevel',
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
          <a href="javascript:void(0)" onClick={() => {
            this.showModal(record)
          }}>修改</a>
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
        <SearchContent searchColumn={searchColumn}/>
        <div style={{"marginBottom": "20px"}}>
          <Button type="primary" onClick={() => {
            this.add()
          }}>新建</Button>
        </div>
        <Table dataSource={dataSource} columns={this.columns}/>
        <Modal
          title="风险点查找信息"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={this.formColumn} data={text} editable={false}/>
        </Modal>
        <Modal
          title="新建风险点信息"
          visible={visible}
          onOk={this.handleOk}
          onCancel={(e) => this.handleCancel(e,"a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={this.formColumn} data={text} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
