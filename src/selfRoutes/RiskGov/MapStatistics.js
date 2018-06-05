import React, {Component, Fragment} from 'react';
import {Table} from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
import 'echarts/map/js/province/anhui';

export default ({title,column,data,color='#3F7BD3'}) => {
  const option = {
    geo: {
      name: 'Enroll distribution',
      type: 'map',
      map: '安徽',
      label: {
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#022548',
          borderColor: '#0DABEA',
          position: ['50%', '50%'],
        },
        emphasis: {
          areaColor: '#011B34',
        },
      },
    },
    visualMap: {
      min: 0,
      max: 100,
      text: ['高', '低'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['white', color]
      }
    },
    series: [
      {
        name: '安徽各市',
        type: 'map',
        mapType: '安徽', // 自定义扩展图表类型
        itemStyle: {
          normal: {label: {show: true}},
          emphasis: {label: {show: true}}
        },
        data: data
      }
    ]
  };
  return (
    <div className="mapContainer">
      <div className="mapItem">
        <h3 style={{"textAlign":"center"}}>{title}分布图</h3>
        <ReactEcharts option={option} style={{height: '650px'}}/>
      </div>
      <div className="mapItem">
        <h3 style={{"textAlign":"center"}}>{title}统计图</h3>
        <Table columns={column} dataSource={data} />
      </div>
    </div>
  )
}
