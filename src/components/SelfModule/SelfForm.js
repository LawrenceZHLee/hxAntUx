import React, {Component, Fragment} from 'react';
import {Select, Form, Input, DatePicker, Row, Col} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const {RangePicker} = DatePicker;


class SelfForm extends Component {
  state = {
    cityValue: '',
    countyData: [],
    countyValue: ''
  };

  componentWillMount = () => {
    this.cityData = [];
    this.countyData = {};
  };

  //搜索框渲染
  selectRender = (item, data) => {
    return (
      <Select style={{width: 120}}>
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
      <Input/>
    )
  };

  dateRender = (item, data) => {
    return (
      <DatePicker
        showTime
        format="YYYY-MM-DD"
      />
    )
  };

  rangePickerRender = (item, data) => {
    return (
      <RangePicker
        showTime
        format="YYYY-MM-DD"
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
        <Select defaultValue={item.provinceData} style={{width: 90}}>
          <Option key={item.provinceData}>{item.provinceData}</Option>
        </Select>
        <Select value={cityValue} style={{width: 90}} onChange={this.handleCityChange}>
          {cityOptions}
        </Select>
        <Select value={countyValue} style={{width: 90}} onChange={this.onCountyChange}>
          {countyOptions}
        </Select>
      </Fragment>
    )
  };

  contentRender = (formColumn, data, editable) => {
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
        switch (item.type) {
          case "title":
            return (
              <h3 style={{"textAlign": "center"}} key={`form${index}`}>{item.name}</h3>
            );
          case "select":
            return (
              <Col span={item.span ? item.span : 24}>
                <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
                  {
                    getFieldDecorator(item.value, {
                      initialValue: data[item.value]
                    })(this.selectRender(item, data))
                  }
                </FormItem>
              </Col>
            );
          case 'input':
            return (
              <Col span={item.span ? item.span : 24}>
                <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
                  {
                    getFieldDecorator(item.value, {
                      initialValue: data[item.value]
                    })(this.inputRender(item, data))
                  }
                </FormItem>
              </Col>
            );
          case 'date':
            return (
              <Col span={item.span ? item.span : 24}>
                <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
                  {
                    getFieldDecorator(item.value, {
                      initialValue: data[item.value]
                    })(this.dateRender(item, data))
                  }
                </FormItem>
              </Col>
            );
          case 'rangePicker':
            return (
              <Col span={item.span ? item.span : 24}>
                <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
                  {
                    getFieldDecorator(item.value, {
                      initialValue: data[item.value]
                    })(this.rangePickerRender(item, data))
                  }
                </FormItem>
              </Col>
            );
          case 'selects':
            this.countyData = item.countyData;
            this.cityData = item.cityData;
            return (
              <Col span={item.span ? item.span : 24}>
                <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
                  {getFieldDecorator(item.value, {
                    initialValue: data[item.value]
                  })(this.cascaderSelectRender(item, data))}
                </FormItem>
              </Col>
            );
          default:
            break;
        }
      });
    } else {
      content = formColumn.map((item, index) => {
        const ItemLayout = item.span === 12 ? smallItemLayout : formItemLayout;
        if (item.type === "title") {
          return (
            <h3 style={{"textAlign": "center"}}>{item.name}</h3>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24}>
              <FormItem {...ItemLayout} label={`${item.name}:`} key={`form${index}`} style={{"width": "100%"}}>
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
