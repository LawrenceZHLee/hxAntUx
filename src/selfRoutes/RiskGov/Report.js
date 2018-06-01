import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {formColumn} from './data';

/*
 * 风险上报监管
 * */
const dataSource = [
  {data: ''}
];

const searchColumn = [
  {
    name: "行政区划",
    value: "riskDivision",
    type: "input",
  },
  {
    name: "单位",
    value: "riskCompany",
    type: "input",
  },
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


export default class Report extends Component {
  constructor(props) {
    super(props);
    this.formColumn = [
      {
        name: "基本信息",
        type: "title"
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
        name: "风险点所在行政区划",
        value: "riskDivision",
        span: 12,
      },
      {
        name: "风险点所在单位",
        value: "riskCompany",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
      },
      {
        name: "风险点所在详细位置",
        value: "riskAddress",
        span: 12,
      },
      {
        name: "风险点所在经纬度",
        value: "riskLI",
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
        name: "风险评估",
        type: "title"
      },
      {
        name: "风险发生的可能性",
        value: "riskPossible",
        type: "input",
        span: 12,
      },
      {
        name: "级别",
        value: "riskPossibleLevel",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "select",
        option: [
          {
            value: '极有可能发生'
          }, {
            value: '很可能发生'
          }, {
            value: '可能发生'
          }, {
            value: '较不可能发生'
          }, {
            value: '基本不可能发生'
          },
        ]
      }, {
        name: "风险发生的可致后果",
        value: "riskResult",
        type: "input",
        span: 12,
      },
      {
        name: "级别",
        value: "riskResultLevel",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "select",
        option: [
          {
            value: '影响特别重大'
          }, {
            value: '影响重大'
          }, {
            value: '影响较大'
          }, {
            value: '影响一般'
          }, {
            value: '影响很小'
          },
        ]
      },
      {
        name: "评估人",
        value: "riskAssessName",
        type: "input",
        span: 12,
      },
      {
        name: "评估时间",
        value: "riskAssessTime",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "date",
      },
      {
        name: "风险分类",
        type: "title"
      },
      {
        name: "风险分类",
        value: "riskGround",
        type: "select",
        option: [
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
      }, {
        name: "划分依据",
        value: "riskCateBasis",
        type: "input",
      },
      {
        name: "划分人",
        value: "riskCateName",
        type: "input",
        span: 12,
      },
      {
        name: "划分时间",
        value: "riskCateTime",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "date",
      },
      {
        name: "风险分级",
        type: "title"
      },
      {
        name: "风险级别",
        value: "riskLevel",
        type: "select",
        option: [
          {
            value: '极有可能发生'
          }, {
            value: '很可能发生'
          }, {
            value: '可能发生'
          }, {
            value: '较不可能发生'
          }, {
            value: '基本不可能发生'
          },
        ]
      },
      {
        name: "评估人",
        value: "riskLevelName",
        type: "input",
        span: 12,
      },
      {
        name: "评估时间",
        value: "riskLevelTime",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "date",
      },
      {
        name: "风险防范",
        type: "title"
      },
      {
        name: "管控措施",
        value: "riskMeasure",
        type: "input",
      },
      {
        name: "负责人",
        value: "riskManger",
        type: "input",
        span: 12,
      },
      {
        name: "负责部门",
        value: "riskManDepart",
        span: 12,
        style: {"borderLeft": "none", "borderBottom": "none"},
        type: "input",
      }, {
        name: "制定人",
        value: "riskDeveloper",
        type: "input",
        span: 12,
      },
      {
        name: "制定时间",
        value: "riskDevTime",
        span: 12,
        style: {"borderLeft": "none"},
        type: "date",
      },
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
      },
    ];

    this.columns = [
      {
        title: '序号',
        dataIndex: 'riskID',
        key: 'riskID',
      },
      {
        title: "行政区划",
        dataIndex: "riskDivision",
        key: "riskDivision",
      },
      {
        title: "单位",
        dataIndex: "riskCompany",
        key: "riskCompany",
      },
      {
        title: "详细位置",
        dataIndex: "riskAddress",
        key: "riskAddress",
      },
      {
        title: "经纬度",
        dataIndex: "riskLI",
        key: "riskLI",
      },
      {
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
        title: "负责人",
        dataIndex: "riskManger",
        key: "riskManger",
      },
      {
        title: "负责部门",
        dataIndex: "riskManDepart",
        key: "riskManDepart",
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
          title="风险详情"
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
