import React, {Component, Fragment} from 'react';
import Highlight from 'react-highlight';

export default ()=>{
  return (
    <Fragment>
      <h3>一、新添菜单模块</h3>
      <p>在路径 <span>src/common</span> 选择 <span>menuList.js</span> 文件。进入文件，找到 <span>menuList.moduleColumn</span> ,按照
        <pre><code>
          {
            `{name: '一企一档',
 menu: menuList.menuData1,
 icon: 'icon-one',
 color: 'selected',
 selected:true
 }`}
        </code></pre>
      </p>
    </Fragment>
  )
}
