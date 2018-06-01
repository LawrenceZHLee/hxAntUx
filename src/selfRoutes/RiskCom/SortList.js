import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {dataSource} from './../RiskGov/data';
import {formColumn} from './data';

/*
 * 风险点清单
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
    name: "风险点所在部门",
    value: "riskDepart",
    type: "input",
  }
];


export default class SortList extends Component {
  constructor(props) {
    super(props);

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
          <SelfForm ref="readForm" formColumn={formColumn} data={text} editable={false}/>
        </Modal>
      </Fragment>
    );
  }
}
