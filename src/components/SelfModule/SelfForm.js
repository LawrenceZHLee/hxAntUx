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
              <p className="self-form-title" key={`form${index}`}>{item.name}</p>
            );
          case "select":
            return (
              <Col span={item.span ? item.span : 24} style={item.style}>
                <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
              <Col span={item.span ? item.span : 24} style={item.style}>
                <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
              <Col span={item.span ? item.span : 24} style={item.style}>
                <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
              <Col span={item.span ? item.span : 24} style={item.style}>
                <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
              <Col span={item.span ? item.span : 24} style={item.style}>
                <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
            <p className="self-form-title" key={`unForm${index}`}>{item.name}</p>
          )
        } else {
          return (
            <Col span={item.span ? item.span : 24} style={item.style}>
              <FormItem label={`${item.name}`} key={`form${index}`} colon={false}>
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
