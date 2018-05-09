import React, {Component, Fragment} from 'react';
import {Button, Select, Form, Input, DatePicker} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const {RangePicker} = DatePicker;

//搜索框
class SearchForm extends Component {
  state = {
    cityValue: '',
    countyData: [],
    countyValue:''
  };

  componentWillMount = () => {
    this.cityData=[];
    this.countyData = {};
  };

  //搜索框渲染
  selectRender = item => {
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
  inputRender = item => {
    return (
      <Input/>
    )
  };

  dateRender = item => {
    return (
      <DatePicker
        showTime
        format="YYYY-MM-DD"
      />
    )
  };

  rangePickerRender = item => {
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
      countyValue:''
    });
  };
  onCountyChange = (value) => {
    this.setState({
      countyValue: value,
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    this.setState({
      countyData: this.countyData[this.cityData[0]],
      cityValue: '',
      countyValue: '',
    })
  };

  cascaderSelectRender = item => {
    const {countyValue,cityValue,countyData}=this.state;
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

  contentRender = searchColumn => {
    const {getFieldDecorator} = this.props.form;
    const content = searchColumn.map((item, index) => {
      switch (item.type) {
        case "select":
          return (
            <FormItem label={`${item.name}:`} key={`table${index}`}>
              {
                getFieldDecorator(item.value)(this.selectRender(item))
              }
            </FormItem>
          );
        case 'input':
          return (
            <FormItem label={`${item.name}:`} key={`table${index}`}>
              {
                getFieldDecorator(item.value)(this.inputRender(item))
              }
            </FormItem>
          );
        case 'date':
          return (
            <FormItem label={`${item.name}:`} key={`table${index}`}>
              {
                getFieldDecorator(item.value)(this.dateRender(item))
              }
            </FormItem>
          );
        case 'rangePicker':
          return (
            <FormItem label={`${item.name}:`} key={`table${index}`}>
              {
                getFieldDecorator(item.value)(this.rangePickerRender(item))
              }
            </FormItem>
          );
        case 'selects':
          this.countyData = item.countyData;
          this.cityData = item.cityData;
          return (
            <FormItem label={`${item.name}:`} key={`table${index}`}>
              {getFieldDecorator(item.value)(this.cascaderSelectRender(item))}
            </FormItem>
          );
        default:
          break;
      }
    });
    return content;
  };

  render() {
    const {searchColumn} = this.props;
    const searchContent = this.contentRender(searchColumn);
    return (
      <div className="self-search-container">
        <div className="self-inner-search">
          <Form layout="inline">
            {searchContent}
          </Form>
        </div>
        <div className="self-button-con">
          <Button type="primary" onClick={this.handleReset}>清空</Button>
          <Button type="primary">查询</Button>
        </div>
      </div>
    )
  }
}

const SelfSearchForm = Form.create()(SearchForm);

export default SelfSearchForm;
