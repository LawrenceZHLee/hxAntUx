import React, {Component, Fragment} from 'react';
import {Button} from 'antd';
// import './../../../Indexs/mapAnhui/index.html'

export default class MapArea extends Component {
  render() {
    return (
      <div style={{"position": "relative"}}>
        <div style={{"position": "absolute", "top": "0", "left": "0"}}>
          <Button style={{'background': 'transparent', 'color': 'white'}}><a
            href="./../../../Indexs/mapAnhui/index.html" target="_blank">全屏</a></Button>
        </div>
        <div>
          <iframe height="800px" width="100%" src="./../../../Indexs/mapAnhui/index.html">

          </iframe>
        </div>
      </div>
    )
  }
}
