import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';

const dataSource = [{
  key: '1',
  name: '喷花类',
  status: 1,
  packages: 10,
  rounds: 32,
  date: '2018-5-2',
  doneDate: '2018-5-10',
}, {
  key: '2',
  name: '旋转类',
  status: 2,
  packages: 4,
  rounds: 22,
  date: '2018-5-5',
  doneDate: '2018-5-10',
}, {
  key: '3',
  name: '升空类',
  status: 1,
  packages: 2,
  rounds: 15,
  date: '2018-5-7',
  doneDate: '2018-5-10',
}];

const searchColumn = [
  {
    name: "登记人",
    value: "name",
    type: "input",
  },
  {
    name: "状态",
    value: "status",
    type: "select",
    option: [
      {
        value: "合格"
      },
      {
        value: "不合格"
      },
    ]
  },
  {
    name: "登记时间",
    value: "rangeTime",
    type: "rangePicker",
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

export default class SaleInfo extends Component {
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
      },
      {
        name: "登记日期",
        value: "proDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "生产日期",
        value: "proDate1",
        type: "date",
        span: 12,
      },
      {
        name: "存储状态",
        value: "status",
        type: "select",
        span: 12,
        style: {"borderLeft": "none"},
        option: [
          {
            value: "合格"
          },
          {
            value: "不合格"
          }
        ]
      },
      {
        name: "存储地点",
        value: "location",
        type: "input",
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
      },
      {
        name: "登记日期",
        value: "proDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "生产日期",
        value: "proDate1",
        type: "date",
        span: 12,
      },
      {
        name: "存储状态",
        value: "status",
        type: "select",
        span: 12,
        style: {"borderLeft": "none"},
        option: [
          {
            value: "合格"
          },
          {
            value: "不合格"
          }
        ]
      },
      {
        name: "存储地点",
        value: "location",
        type: "input",
      },
      {
        name: "物品信息",
        type: "title"
      },
    ];
    this.columns = [{
      title: '生产日期',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '登记人',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '箱数量（箱/件）',
      dataIndex: 'packages',
      key: 'packages',
    }, {
      title: '箱数量（发/个）',
      dataIndex: 'rounds',
      key: 'rounds',
    }, {
      title: '登记日期',
      dataIndex: 'doneDate',
      key: 'doneDate',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (level) => {
        return {1: "合格", 2: "不合格"}[level]
      }
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
        <Table dataSource={dataSource} columns={this.columns} pagination={false}/>
        <Modal
          title="生产登记详情"
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
          title="新建生产登记"
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
