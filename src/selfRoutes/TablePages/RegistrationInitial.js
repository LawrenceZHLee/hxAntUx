import React, {Component, Fragment} from 'react';
import {Modal, Button} from 'antd';

import StepTable from '../../components/SelfTable/StepTable';
import Omit from '../../components/SelfModule/Omit';
import SelfForm from '../../components/SelfModule/SelfForm';


export default class RegistrationInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      readVisible: false,
      text: ''
    };
    this.columns = [
      {
        tabTitle: "待审核",
        tabIcon: "one",
        searchColumn: [
          {
            name: "关键字",
            value: "keyword",
            type: "input",
          },
        ],
        rowSelection: [
          {
            name: "操作"
          }
        ],
        columns: [
          {
            title: '事项概述',
            dataIndex: 'name',
            key: 'name',
            render(text){
              return (
                <Omit text={text} sizeWord={15}/>
              )
            }
          }, {
            title: '当前状态',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '启动人员',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: '操作',
            key: 'operation',
            render: (text) => {
              return (
                <div>
                  <a onClick={() => this.showModal(text)}>点击</a>
                </div>
              )
            }
          }
        ],
        dataSource: [{
          key: '1',
          name: '中国石化销售有限公司中国石化销售有限公司中国石化销售有限公司中国石化销售有限公司中国石化销售有限公司',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }],
      },
      {
        tabTitle: "已审核",
        tabIcon: "two",
        searchColumn: [
          {
            name: "关键字",
            value: "keyword",
            type: "input",
          },
        ],
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: '操作',
            key: 'operation',
            render: (text, record, index) => {
              return (
                <div>
                  <a onClick={() => this.showReadModal(text)}>点击</a>
                </div>
              )
            }
          }
        ],
        dataSource: [{
          key: '3',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '4',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }],
      },
      {
        tabTitle: "已办结",
        tabIcon: "three",
        searchColumn: [
          {
            name: "关键字",
            value: "keyword",
            type: "input",
          },
        ],
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: '操作',
            key: 'operation',
            render: (text, record, index) => {
              return (
                <div>
                  <a onClick={() => this.showModal(text)}>点击</a>
                </div>
              )
            }
          }
        ],
        dataSource: [{
          key: '5',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '6',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }],
      }
    ];

    this.formColumn = [
      {
        name: "企业注册信息",
        type: "title"
      },
      {
        name: "企业名称",
        value: "name",
        type: "input",
      },
      {
        name: "名称",
        value: "names",
        type: "select",
        span: 12,
        option: [
          {
            value: "Jack"
          },
          {
            value: "Lucy"
          },
          {
            value: "yiminghe"
          }
        ]
      },
      {
        name: "时间",
        value: "time",
        type: "date",
        span: 12,
      },
      {
        name: "时间段",
        value: "rangeTime",
        type: "rangePicker",
      },
      {
        name: "级联选择",
        value: "selects",
        type: "selects",
        provinceData: "安徽省",
        cityData: ['合肥市', '淮北市'],
        countyData: {
          合肥市: ['瑶海区', '庐阳区', '蜀山区'],
          淮北市: ['杜集区', '相山区', '烈山区'],
        }
      },
    ];

    this.readColumn = [
      {
        name: "企业注册信息",
        type: "title"
      },
      {
        name: "企业名称",
        value: "name",
        type: "input",
      },
      {
        name: "名称",
        value: "names",
        type: "select",
        span: 12,
        option: [
          {
            value: "Jack"
          },
          {
            value: "Lucy"
          },
          {
            value: "yiminghe"
          }
        ]
      },
      {
        name: "时间",
        value: "time",
        type: "date",
        span: 12
      },
      {
        name: "时间段",
        value: "rangeTime",
        type: "rangePicker",
      },
      {
        name: "级联选择",
        value: "selects",
        type: "selects",
        provinceData: "安徽省",
        cityData: ['合肥市', '淮北市'],
        countyData: {
          合肥市: ['瑶海区', '庐阳区', '蜀山区'],
          淮北市: ['杜集区', '相山区', '烈山区'],
        }
      },
    ];
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
    const {text, visible, readVisible} = this.state;
    return (
      <Fragment>
        <StepTable columns={this.columns}/>
        <Modal
          title="待处理任务"
          visible={visible}
          onOk={this.handleOk}
          onCancel={() => this.handleCancel("a")}
          width={1000}
          footer={(
            <div style={{"textAlign": "center"}}>
              <Button type="primary">查看</Button>
              <Button type="primary">查看</Button>
              <Button type="primary">查看</Button>
              <Button type="primary" onClick={() => this.handleCancel("a")}>关闭</Button>
            </div>)}
        >
          <SelfForm ref="infoForm" formColumn={this.formColumn} data={text} editable={true}/>
        </Modal>
        <Modal
          title="查看处理任务"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <SelfForm ref="readForm" formColumn={this.readColumn} data={text} editable={false}/>
        </Modal>
      </Fragment>
    )
  }
}
