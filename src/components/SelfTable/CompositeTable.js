import React, {Component, Fragment} from 'react';
import TraTable from './TraTable';
import ChangeButton from './ChangeButton';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';

//复合图表
export default class CompositeTable extends Component {
  state = {
    buttonColumn: [
      {
        name: "统计图",
        selected: true,
        icon: "chart"
      },
      {
        name: "统计表",
        selected: false,
        icon: "table"
      }
    ]
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleTableChange = name => {
    const buttonColumn = [...this.state.buttonColumn];
    buttonColumn.forEach(item => {
      item.selected = false;
    });
    for (const item of buttonColumn) {
      if (item.name === name) {
        item.selected = true
      }
    }
    this.setState({
      buttonColumn
    })
  };

  render() {
    const {buttonColumn} = this.state;
    const {title, chartContent,columns,data} = this.props;
    return (
      <Fragment>
        <ChangeButton
          name="统计类别:"
          buttonColumn={buttonColumn}
          handleTableChange={this.handleTableChange}
        />
        {
          buttonColumn[0].selected ?
            (
              <Fragment>
                <div className="self-chart-title">{title}</div>
                {chartContent}
              </Fragment>
            ) :
            (
              <TraTable
                columns={columns}
                data={data}
                title={title}
              />
            )
        }

      </Fragment>
    );
  }
}
