import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';

/*
 * 政府烟花爆竹销售
 * */
const dataSource = [
  {
    key: '1',
    name: '喷花类',
    status: '待售',
    packages: 10,
    rounds: 32,
    date: '2018-5-2',
    doneDate: '2018-5-10',
    sales:'巢湖市红盛烟花爆竹有限责任公司',
    purchase:'',
    division:'合肥市 - 巢湖市 - 烔炀镇',
  }, {
    key: '2',
    name: '旋转类',
    status: '已售',
    packages: 4,
    rounds: 22,
    date: '2018-5-5',
    doneDate: '2018-5-12',
    sales:'巢湖市红盛烟花爆竹有限责任公司',
    purchase:'马湖家祥商店',
    division:'合肥市 - 巢湖市 - 烔炀镇',
  }, {
    key: '3',
    name: '升空类',
    status: '已售',
    packages: 2,
    rounds: 15,
    date: '2018-5-7',
    doneDate: '2018-5-10',
    sales:'合肥市博发土产日杂有限公司',
    purchase:'合肥庐阳区可苑百货商店',
    division:'合肥市 - 庐阳区 - 逍遥津街道',
  }, {
    key: '4',
    name: '升空类',
    status: '已售',
    packages: 2,
    rounds: 15,
    date: '2018-5-7',
    doneDate: '2018-5-7',
    sales:'安徽省庐江县鑫隆花炮有限公司',
    purchase:'倪晋宝批发部',
    division:'合肥市 - 庐江县 - 庐城镇',
  }, {
    key: '5',
    name: '升空类',
    status: '已售',
    packages: 2,
    rounds: 15,
    date: '2018-5-7',
    doneDate: '2018-5-5',
    sales:'安徽省庐江县鑫隆花炮有限公司',
    purchase:'罗河面街批发部',
    division:'合肥市 - 庐江县 - 庐城镇',
  }];

const searchColumn = [
  {
    name: "行政区划",
    value: "division",
    type: "input",
  },
  {
    name: "销售单位",
    value: "sales",
    type: "input",
  },
  {
    name: "购买单位",
    value: "purchase",
    type: "input",
  },
  {
    name: "销售状态",
    value: "status",
    type: "select",
    option: [
      {
        value: "已售"
      },
      {
        value: "未售"
      },
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
        name: "销售单位",
        value: "sales",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "购买单位",
        value: "purchase",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "经办人",
        value: "manager",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "经办人证件类型",
        value: "managerType",
        type: "select",
        option:[
          {
            value:'xx1类'
          },
          {
            value:'xx2类'
          },
          {
            value:'xx3类'
          },
        ],
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "经办人证件号码",
        value: "managerID",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "销售经办人证件",
        value: "saleName",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "销售经办人证件类型",
        value: "saleType",
        type: "select",
        option:[
          {
            value:'xx1类'
          },
          {
            value:'xx2类'
          },
          {
            value:'xx3类'
          },
        ],
        span: 12,
        className: "width260"
      },
      {
        name: "销售经办人证件号码",
        value: "saleID",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "销售负责人",
        value: "saleManger",
        type: "input",
        span: 12,
        className: "width260",
      },
      {
        name: "销售日期",
        value: "saleDate",
        type: "date",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "零售点",
        value: "retail",
        type: "input",
        className: "width260",
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
        name: "销售单位",
        value: "sales",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "购买单位",
        value: "purchase",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "经办人",
        value: "manager",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "经办人证件类型",
        value: "managerType",
        type: "select",
        option:[
          {
            value:'xx1类'
          },
          {
            value:'xx2类'
          },
          {
            value:'xx3类'
          },
        ],
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "经办人证件号码",
        value: "managerID",
        type: "input",
        span: 12,
        className: "width260"
      },
      {
        name: "销售经办人证件",
        value: "saleName",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "销售经办人证件类型",
        value: "saleType",
        type: "select",
        option:[
          {
            value:'xx1类'
          },
          {
            value:'xx2类'
          },
          {
            value:'xx3类'
          },
        ],
        span: 12,
        className: "width260"
      },
      {
        name: "销售经办人证件号码",
        value: "saleID",
        type: "input",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "销售负责人",
        value: "saleManger",
        type: "input",
        span: 12,
        className: "width260",
      },
      {
        name: "销售日期",
        value: "saleDate",
        type: "date",
        span: 12,
        className: "width260",
        style: {"borderLeft": "none"},
      },
      {
        name: "零售点",
        value: "retail",
        type: "input",
        className: "width260",
      },
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
      },{
        title: '销售单位',
        dataIndex: 'sales',
        key: 'sales',
      }, {
        title: '购买单位',
        dataIndex: 'purchase',
        key: 'purchase',
      }, {
        title: '箱数量（箱/件）',
        dataIndex: 'packages',
        key: 'packages',
      }, {
        title: '箱数量（发/个）',
        dataIndex: 'rounds',
        key: 'rounds',
      }, {
        title: '销售状态',
        dataIndex: 'status',
        key: 'status',
      }, {
        title: '操作',
        key: 'operation',
        render: (record, index) => {
          return (
          <a style={{"marginRight": "10px"}} href="javascript:void(0)" onClick={() => {
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
