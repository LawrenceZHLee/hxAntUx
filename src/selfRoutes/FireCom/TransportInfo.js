import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';

/*
 * 企业烟花爆竹运输
 * */

const dataSource = [
  {
    key: '1',
    name: '喷花类',
    status: '待运输',
    packages: 10,
    rounds: 32,
    date: '2018-5-2',
    doneDate: '2018-5-10',
    inDate: '2018/5/10-2018/5/13',
    outDate: '2018-5-11',
    purchase: '江苏xxx',
    sales: '河南xxx'
  }, {
    key: '2',
    name: '旋转类',
    status: '运输中',
    packages: 4,
    rounds: 22,
    date: '2018-5-5',
    doneDate: '2018-5-10',
    inDate: '2018/5/10-2018/5/15',
    outDate: '2018-5-13',
    purchase: '重庆xxx',
    sales: '四川xxx'
  }, {
    key: '3',
    name: '升空类',
    status: '已到达',
    packages: 2,
    rounds: 15,
    date: '2018-5-7',
    doneDate: '2018-5-10',
    inDate: '2018/5/11-2018/5/16',
    outDate: '2018-5-12',
    purchase: '上海xxx',
    sales: '西藏xxx'
  }];

const searchColumn = [
  {
    name: "购买单位",
    value: "purchase",
    type: "input",
  },
  {
    name: "销售单位",
    value: "sales",
    type: "input",
  },
  {
    name: "运输状态",
    value: "status",
    type: "select",
    option: [
      {
        value: '待运输'
      },
      {
        value: '运输中'
      },
      {
        value: '已到达'
      }
    ]
  },
];

const inSource = [
  {
    fireName: "喷花类",
    fireLevel: "A级",
    fireModel: "xxx",
    fireCategory: "xxx",
    unit: "箱数量(箱/件)",
    fireNum: "2",
    fireNorm: "1*2"
  },
  {
    fireName: "xx类",
    fireLevel: "B级",
    fireModel: "xxx",
    fireCategory: "xxx",
    unit: "箱数量(发/件)",
    fireNum: "4",
    fireNorm: "1*3"
  },
];

export default class TransportInfo extends Component {
  constructor(props) {
    super(props);
    this.formColumn = [
      {
        name: "基本信息",
        type: "title"
      },
      {
        name: "登记人",
        value: "name",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "登记时间",
        value: "proDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "购买单位",
        value: "sales",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "生产或经营许可证号",
        value: "license",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "承运单位",
        value: "transport",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "危险货物道路运输证件号",
        value: "tranLicense",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "驾驶员姓名",
        value: "driver",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "驾驶员身份证号码",
        value: "driverID",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "危险货物道路运输从业资格证号",
        value: "dangerLicense",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "押运员危险货物道路运输从业资格证号",
        value: "escortLicense",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "押运员姓名",
        value: "escortName",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "押运员身份证号码",
        value: "escortID",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "运输起始时间",
        value: "startTime",
        type: "date",
        span: 12,
        className: "width260"
      },
      {
        name: "运输截止时间",
        value: "endTime",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "起运地",
        value: "startAddress",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "途径地",
        value: "endAddress",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "到达地",
        value: "destination",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "经办人",
        value: "manager",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "负责人",
        value: "principal",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "开具日期",
        value: "startDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "物品信息",
        type: "title"
      },
      {
        type: "add",
        names: [
          {
            name: "烟花爆竹名称",
            type: "input",
            value: "fireName"
          },
          {
            name: "烟花爆竹级别",
            type: "select",
            value: "fireLevel",
            option: [
              {
                value: "A级"
              },
              {
                value: "B级"
              },
              {
                value: "C级"
              }
            ]
          },
          {
            name: "烟花爆竹型号",
            type: "input",
            value: "fireModel"
          },
          {
            name: "烟花爆竹类别",
            type: "input",
            value: "fireCategory"
          },
          {
            name: "计量单位",
            type: "select",
            value: "unit",
            option: [
              {
                value: "箱数量(箱/件)"
              },
              {
                value: "箱数量(发/个)"
              },
            ]
          },
          {
            name: "箱数量",
            type: "input",
            value: "fireNum"
          },
          {
            name: "每箱规格",
            type: "input",
            value: "fireNorm"
          },
        ]
      }
    ];
    this.readColumn = [
      {
        name: "基本信息",
        type: "title"
      },
      {
        name: "登记人",
        value: "name",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "登记时间",
        value: "proDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "购买单位",
        value: "sales",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "生产或经营许可证号",
        value: "license",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "承运单位",
        value: "transport",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "危险货物道路运输证件号",
        value: "tranLicense",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "驾驶员姓名",
        value: "driver",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "驾驶员身份证号码",
        value: "driverID",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "危险货物道路运输从业资格证号",
        value: "dangerLicense",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "押运员危险货物道路运输从业资格证号",
        value: "escortLicense",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "押运员姓名",
        value: "escortName",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "押运员身份证号码",
        value: "escortID",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "运输起始时间",
        value: "startTime",
        type: "date",
        span: 12,
        className: "width260"
      },
      {
        name: "运输截止时间",
        value: "endTime",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "起运地",
        value: "startAddress",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "途径地",
        value: "endAddress",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "到达地",
        value: "destination",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "经办人",
        value: "manager",
        type: "input",
        span: 12,
        style: {"borderLeft": "none"},
        className: "width260"
      },
      {
        name: "负责人",
        value: "principal",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "开具日期",
        value: "startDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        className: "width260"
      },
      {
        name: "物品信息",
        type: "title"
      },
    ];
    this.columns = [
      {
        title: '购买单位',
        dataIndex: 'purchase',
        key: 'purchase',
      }, {
        title: '销售单位',
        dataIndex: 'sales',
        key: 'sales',
      }, {
        title: '箱数量（箱/件）',
        dataIndex: 'packages',
        key: 'packages',
      }, {
        title: '箱数量（发/个）',
        dataIndex: 'rounds',
        key: 'rounds',
      }, {
        title: '运输时间段',
        dataIndex: 'inDate',
        key: 'inDate',
      }, {
        title: '运输状态',
        dataIndex: 'status',
        key: 'status',
      }, {
        title: '登记人',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '登记日期',
        dataIndex: 'doneDate',
        key: 'doneDate',
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
    this.inColumn = [
      {
        title: "烟花爆竹名称",
        dataIndex: "fireName",
        key: "fireName"
      },
      {
        title: "烟花爆竹级别",
        dataIndex: "fireLevel",
        key: "fireLevel",
      },
      {
        title: "烟花爆竹型号",
        dataIndex: "fireModel",
        key: "fireModel",
      },
      {
        title: "烟花爆竹类别",
        dataIndex: "fireCategory",
        key: "fireCategory",
      },
      {
        title: "计量单位",
        dataIndex: "unit",
        key: "unit",
      },
      {
        title: "箱数量",
        dataIndex: "fireNum",
        key: "fireNum",
      },
      {
        title: "每箱规格",
        dataIndex: "fireNorm",
        key: "fireNorm",
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
        <SearchContent searchColumn={searchColumn}/>
        <div style={{"marginBottom": "20px"}}>
          <Button type="primary" onClick={() => {
            this.add()
          }}>新建</Button>
        </div>
        <Table dataSource={dataSource} columns={this.columns}/>
        <Modal
          title="仓储登记详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={this.readColumn} data={text} editable={false}/>
          <div style={{"border": "1px solid #aed0ea", "borderTop": "none"}}>
            <Table dataSource={inSource} columns={this.inColumn} pagination={false}/>
          </div>
        </Modal>
        <Modal
          title="新建仓储登记"
          visible={visible}
          onOk={this.handleOk}
          onCancel={() => this.handleCancel("a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={this.formColumn} data={text} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
