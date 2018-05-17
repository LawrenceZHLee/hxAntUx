import React, {Component, Fragment} from 'react';

export default ()=>{
  return (
    <div className="self-document-container">
      <div className="self-document-explain">
      <h3>一、新添菜单模块</h3>
      <p>在路径 <span>src/common</span> 选择 <span>menuList.js</span> 文件。进入文件，找到 <span>menuList.moduleColumn</span> ,按照

        <pre><code>
          {`{name: '模块名称',
 menu: menuList.menuData(n),
 icon: 'icon-one',
 selected: true}`}</code></pre>的格式去定义每一个模块。如果此模块被选中 <span>selected</span> 则是 <span>true</span> 否则是 <span>false</span> 。
      </p>
      <p> 再到对应的 <span>menuList.menuData(n)</span> 里添加新的菜单，若没有对应的 <span>menuList.menuData(n)</span> ，则需要新建一个 <span>menuList.menuData(n)</span> 。</p>
      <p>假设我需要新建一个 <span>menuList.menuData5</span> 并向里面添加菜单模块。按照以下格式
        <pre><code>
          {`{
 name: '一级菜单名称',
 icon: 'table',
 path: 'list',
 children: [
 {
 name: '二级菜单名称',
 path: 'initial-registration',
 },
 {
 name: '二级菜单名称',
 path: 'review-registration',
 },]
}`}</code></pre>
        <span>name</span> 可以自定义。
        </p>
        <p><span>icon</span> 可以换成其他的图标。打开<a href="https://ant.design/components/icon-cn/" target="_blank">图标库</a>，点击图标即可复制名称</p>
        <p><span>path</span> 可以自定义。建议一级路径名称在
          <span>dashboard（仪表）</span> 、
          <span>list（列表）</span> 、
          <span>form（表单）</span> 、
          <span>profile（详情）</span> 、
          <span>result（结果）</span> 、
          <span>warning（异常）</span> 、
          <span>user（用户）</span> 这些里面去选择使用。</p>
        <p>一级菜单下的子菜单写在 <span>children</span> 数组里。 <span>name</span> 和 <span>path</span> 都可以自定义。</p>
        <h3>二、路由配置</h3>
        <p>在路径 <span>src/common</span> 选择 <span>router.js</span> 文件。进入文件，找到 <span>routerConfig</span> 对象,按照
          <pre><code>
          {`//页面名称
'/一级路径名/二级路径':{
component: dynamicWrapper(app, [页面类别：chat,list,form,monitor,profile], () => import('../selfRoutes/文件夹名/js文件名')),
},`}</code></pre>
        格式添加类目。具体示例如下
          <pre><code>
          {`//企业注册数量统计
'/dashboard/coStatistics':{
component: dynamicWrapper(app, ['chart'], () => import('../selfRoutes/Enterprise/CoStatistics')),
},`}</code></pre>
        </p>
      </div>
    </div>
  )
}
