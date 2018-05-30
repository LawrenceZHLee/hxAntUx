import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';

/*
 * 政府烟花爆竹生产
 * */
const dataSource = [
  {
    key: '1',
    name: '张奎',
    status: 1,
    packages: 10,
    rounds: 32,
    date: '2018-5-2',
    doneDate: '2018-5-10',
    division:'淮北市 - 相山区 - 相山西街道',
    company:'淮北市瑞祥烟花爆竹有限公司'
  }, {
    key: '2',
    name: '徐庆平',
    status: 2,
    packages: 4,
    rounds: 22,
    date: '2018-5-5',
    doneDate: '2018-5-10',
    division:'合肥市 - 长丰县 - 水湖镇',
    company:'长丰县丰特供销有限责任公司'
  }, {
    key: '3',
    name: '朱术付',
    status: 1,
    packages: 2,
    rounds: 15,
    date: '2018-5-7',
    doneDate: '2018-5-10',
    division:'合肥市 - 肥西县 - 山南镇',
    company:'肥西县盛安烟花炮竹销售有限责任公司'
  }];

const searchColumn = [
  {
    name: "行政区划",
    value: "division",
    type: "input",
  },
  {
    name: "单位名称",
    value: "company",
    type: "input",
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

export default class ProductInfo extends Component {
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
        name: "物品等级",
        value: "status",
        type: "select",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        option: [
          {
            value: "合格"
          },
          {
            value: "不合格"
          }
        ]
      },
      // {
      //   name: "存储地点",
      //   value: "location",
      //   type: "input",
      // },
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
        name: "物品等级",
        value: "status",
        type: "select",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        option: [
          {
            value: "合格"
          },
          {
            value: "不合格"
          }
        ]
      },
      // {
      //   name: "存储地点",
      //   value: "location",
      //   type: "input",
      // },
      {
        name: "物品信息",
        type: "title"
      },
    ];
    this.columns = [
      {
        title: '行政区划',
        dataIndex: 'division',
        key: 'division',
      }, {
        title: '单位名称',
        dataIndex: 'company',
        key: 'company',
      }, {
        title: '生产箱数量（箱/件）',
        dataIndex: 'packages',
        key: 'packages',
      }, {
        title: '生产箱数量（发/个）',
        dataIndex: 'rounds',
        key: 'rounds',
      }, {
        title: '生产日期',
        dataIndex: 'date',
        key: 'date',
      },  {
        title: '操作',
        key: 'operation',
        render: (record, index) => {
          return (
          <a href="javascript:void(0)" onClick={() => {
            this.showReadModal(record)
          }}>查看详情</a>
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
        <Table dataSource={dataSource} columns={this.columns}/>
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
          onCancel={(e) => this.handleCancel(e,"a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={this.formColumn} data={text} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
