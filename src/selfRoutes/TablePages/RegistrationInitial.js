import React, {Component, Fragment} from 'react';
import {Modal,Popover} from 'antd';

import StepTable from '../../components/SelfTable/StepTable';
import Omit from '../../components/SelfModule/Omit';


export default class RegistrationInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text:''
    };
    this.columns = [
      {
        tabTitle: "待审核",
        tabIcon: "one",
        searchColumn:[
          {
            name: "关键字",
            value: "keyword",
            type: "input",
          },
        ],
        rowSelection:[
          {
            name:"操作"
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
          name: '企业名称："中国石化销售有限公司安徽安庆怀宁帝豪加油站" - 行政区划："安徽省 安庆市 怀宁县 高河镇" - 隶属关系："中央" - 法定代表人："潘翀" - 企业联系电话："0556-5204058"',
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
        searchColumn:[
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
        searchColumn:[
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
  }

  showModal = (text) => {
    this.setState({
      visible: true,
      text
    });
  };
  handleOk = (e) => {
    this.setState({
      visible: false,
      text:''
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
      text:''
    });
  };

  render() {
    const {text,visible} = this.state;
    return (
      <Fragment>
        <StepTable columns={this.columns}/>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{text.name}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Fragment>
    )
  }
}
