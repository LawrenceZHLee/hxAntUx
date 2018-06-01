import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {dataSource} from './../RiskGov/data';
/*
 * 风险点清单
 * */
// const dataSource = [
//   {data: ''}
// ];

const searchColumn = [
  {
    name: "风险点序号",
    value: "riskID",
    type: "input",
  },
  {
    name: "风险点分类",
    value: "riskGround",
    type: "select",
    option:[
      {
        value: "安全生产相关证照"
      },
      {
        value: "安全生产管理机构设置情况"
      },
      {
        value: "“三同时”管理"
      },
      {
        value: "安全生产责任制"
      },
      {
        value: "安全培训"
      },
      {
        value: "事故隐患排查"
      },
      {
        value: "应急救援及演练"
      },
      {
        value: "外包单位及管理"
      },
      {
        value: "职业健康防护"
      }
    ]
  },
  {
    name: "风险点级别",
    value: "riskLevel",
    type: "select",
    option: [
      {
        dataIndex: '极有可能发生'
      }, {
        dataIndex: '很可能发生'
      }, {
        dataIndex: '可能发生'
      }, {
        dataIndex: '较不可能发生'
      }, {
        dataIndex: '基本不可能发生'
      },
    ]
  },
];


export default class SortList extends Component {
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
      }, {
        title: '类别',
        dataIndex: 'riskCategory',
        key: 'riskCategory',
      }, {
        title: '级别',
        dataIndex: 'riskLevel',
        key: 'riskLevel',
      }, {
        title: '分类名称',
        dataIndex: 'riskGround',
        key: 'riskGround',
      }, {
        title: "划分依据",
        dataIndex: "riskCateBasis",
        key: "riskCateBasis",
      },{
        title: '风险名称',
        dataIndex: 'riskName',
        key: 'riskName',
      },  {
        title: '描述',
        dataIndex: 'riskDesc',
        key: 'riskDesc',
      }, {
        title: "发生可能性",
        dataIndex: "riskPossible",
        key:"riskPossible",
      },{
        title: "可致后果",
        dataIndex: "riskResult",
        key: "riskResult",
      },{
        title: '管控措施',
        dataIndex: 'riskMeasure',
        key: 'riskMeasure',
      }, {
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
        title: "负责人",
        dataIndex: "riskManger",
        key: "riskManger",
      },
      {
        title: "负责部门",
        dataIndex: "riskManDepart",
        key: "riskManDepart",
      },
      // {
      //   title: '登记人',
      //   dataIndex: 'riskRegName',
      //   key: 'riskRegName',
      // }, {
      //   title: '登记日期',
      //   dataIndex: 'riskRegTime',
      //   key: 'riskRegTime',
      // }, {
      //   title: "评估人",
      //   dataIndex: "riskAssessName",
      //   key: "riskAssessName",
      // },
      // {
      //   title: "评估时间",
      //   dataIndex: "riskAssessTime",
      //   key: "riskAssessTime",
      // },
      {
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
        <Table scroll={{x:1300}} dataSource={dataSource} columns={this.columns}/>
        <Modal
          title="风险清单详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={this.formColumn} data={text} editable={false}/>
        </Modal>
      </Fragment>
    );
  }
}
