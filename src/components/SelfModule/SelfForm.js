import React, {Component, Fragment} from 'react';
import {Select, Form, Input, DatePicker, Row, Col, Button} from 'antd';
import moment from 'moment';

const Option = Select.Option;
const FormItem = Form.Item;
const {RangePicker} = DatePicker;


class SelfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: '',
      countyData: [],
      countyValue: '',
      addContent: [],
    };
    this.originContent = '';
  }

  componentWillMount = () => {
    this.cityData = [];
    this.countyData = {};
  };

  //搜索框渲染
  selectRender = (item, data) => {
    return (
      <Select style={{width: 120}} size="small">
        {item.option.map((it, index) => {
          return (
            <Option value={it.value} key={index}>{it.value}</Option>
          )
        })}
      </Select>
    )
  };

  //input框渲染
  inputRender = (item, data) => {
    return (
      <Input size="small"/>
    )
  };

  dateRender = (item, data) => {
    return (
      <DatePicker
        showTime
        format="YYYY-MM-DD"
        size="small"
      />
    )
  };

  rangePickerRender = (item, data) => {
    return (
      <RangePicker
        showTime
        format="YYYY-MM-DD"
        size="small"
      />
    )
  };

  //级联选择
  handleCityChange = (value) => {
    this.setState({
      cityValue: value,
      countyData: this.countyData[value],
      countyValue: ''
    });
  };
  onCountyChange = (value) => {
    this.setState({
      countyValue: value,
    });
  };

  cascaderSelectRender = (item, data) => {
    const {countyValue, cityValue, countyData} = this.state;
    const cityOptions = item.cityData.map(city => <Option key={city}>{city}</Option>);
    const countyOptions = countyData.map(city => <Option key={city}>{city}</Option>);
    return (
      <Fragment>
        <Select defaultValue={item.provinceData} style={{width: 90}} size="small">
          <Option key={item.provinceData}>{item.provinceData}</Option>
        </Select>
        -
        <Select value={cityValue} style={{width: 90}} onChange={this.handleCityChange} size="small">
          {cityOptions}
        </Select>
        -
        <Select value={countyValue} style={{width: 90}} onChange={this.onCountyChange} size="small">
          {countyOptions}
        </Select>
      </Fragment>
    )
  };

  handleType = (item, index, data, type) => {
    const {getFieldDecorator} = this.props.form;
    switch (item.type) {
      case "title":
        return (
          <Col span={24}>
            <p className="self-form-title" key={`form${index}`}>{item.name}</p>
          </Col>
        );
      case "select":
        if (type === 'add') {
          return (
            <FormItem key={`form${index}`} className={item.className}>
              {this.selectRender(item, data)}
            </FormItem>
          );
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {
                  getFieldDecorator(item.value, {
                    initialValue: data[item.value]
                  })(this.selectRender(item, data))
                }
              </FormItem>
            </Col>
          );
        }
      case 'input':
        if (type === 'add') {
          return (
            <FormItem key={`form${index}`} className={item.className}>
              {this.inputRender(item, data)}
            </FormItem>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {
                  getFieldDecorator(item.value, {
                    initialValue: data[item.value]
                  })(this.inputRender(item, data))
                }
              </FormItem>
            </Col>
          );
        }
      case 'date':
        if (type === 'add') {
          return (
            <FormItem key={`form${index}`} className={item.className}>
              {this.dateRender(item, data)}
            </FormItem>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {
                  getFieldDecorator(item.value, {
                    initialValue: data[item.value] ? moment(data[item.value],"YYYY-MM-DD"):data[item.value]
                  })(this.dateRender(item, data))
                }
              </FormItem>
            </Col>
          );
        }
      case 'rangePicker':
        if (type === 'add') {
          return (
            <FormItem key={`form${index}`} className={item.className}>
              {this.rangePickerRender(item, data)}
            </FormItem>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {
                  getFieldDecorator(item.value, {
                    initialValue: data[item.value] ? [moment(data[item.value][0],"YYYY-MM-DD"),moment(data[item.value][1],"YYYY-MM-DD")]:data[item.value]
                  })(this.rangePickerRender(item, data))
                }
              </FormItem>
            </Col>
          );
        }
      case 'selects':
        this.countyData = item.countyData;
        this.cityData = item.cityData;
        if (type === 'add') {
          return (
            <FormItem key={`form${index}`} className={item.className}>
              {this.cascaderSelectRender(item, data)}
            </FormItem>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {getFieldDecorator(item.value, {
                  initialValue: data[item.value]
                })(this.cascaderSelectRender(item, data))}
              </FormItem>
            </Col>
          );
        }
      default:
        break;
    }
  };

  //添加行
  add = () => {
    const {addContent} = this.state;
    const index = addContent.length;
    addContent.push(
      <Col span={24} className="self-special-col">
        {this.originContent}

        <Button onClick={() => {
          this.delete(index)
        }}>删除</Button>
      </Col>
    );
    this.setState({
      addContent
    })
  };

  //删除行
  delete = (index) => {
    const {addContent} = this.state;
    addContent.splice(index, 1);
    this.setState({
      addContent
    })
  };

  contentRender = (formColumn, data, editable) => {
    const {addContent} = this.state;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
      },
    };
    const smallItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    let content = [];
    if (editable) {
      content = formColumn.map((item, index) => {
        const ItemLayout = item.span === 12 ? smallItemLayout : formItemLayout;
        if (item.type !== 'add') {
          return this.handleType(item, index, data, item.type);
        } else {
          const content1 = item.names.map((itName, ind) => {
            return this.handleType(itName, `in${ind}`, data, 'add')
          });
          this.originContent = content1;
          const nameContent = item.names.map((it,i)=>{
            return (
              <span className="ant-form-item-label" key={`name${i}`}>
                {it.name}
              </span>
            )
          });
          return (
            <Fragment>
              <Col span={24} className="self-special-col">
                {nameContent}
                <span style={{"width":"96px"}}/>
              </Col>
              <Col span={24} className="self-special-col">
                {content1}
                <Button onClick={() => {
                  this.delete(0)
                }} disabled>删除</Button>
              </Col>
              {addContent}
              <Col span={24} style={{"justifyContent": "flexStart", "padding": "10px"}}>
                <Button type="primary" size="small" onClick={() => {
                  this.add()
                }}>添加物品信息</Button>
              </Col>
            </Fragment>
          )
        }


      });
    } else {
      content = formColumn.map((item, index) => {
        const ItemLayout = item.span === 12 ? smallItemLayout : formItemLayout;
        if (item.type === "title") {
          return (
            <Col span={24}>
              <p className="self-form-title" key={`unForm${index}`}>{item.name}</p>
            </Col>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} className={item.className} colon={false}>
                {data[item.value]}
              </FormItem>
            </Col>
          )
        }

      })
    }

    return content;
  };

  render() {
    const {formColumn, data, editable} = this.props;
    const formContent = this.contentRender(formColumn, data, editable);
    return (
      <div className="self-form-container">
        <Form layout="inline">
          <Row>
            {formContent}
          </Row>
        </Form>
      </div>
    )
  }
}

const SelfFormContent = Form.create()(SelfForm);

export default SelfFormContent;
