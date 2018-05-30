import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';
import {formCloumn} from './data';

/*
 * 风险防范监管
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
    name: "风险点类别",
    value: "riskCategory",
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


export default class JudgmentSort extends Component {
  constructor(props) {
    super(props);

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
        title: "管控措施",
        dataIndex: "riskMeasure",
        key: "riskMeasure",
      },{
        title: '具体名称',
        dataIndex: 'riskName',
        key: 'riskName',
      },  {
        title: '描述',
        dataIndex: 'riskDesc',
        key: 'riskDesc',
      },  {
        title: '是否重大危险源',
        dataIndex: 'dangerSource',
        key: 'dangerSource',
      },{
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
          title="风险上报详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={formCloumn} data={text} editable={false}/>
        </Modal>
      </Fragment>
    );
  }
}
