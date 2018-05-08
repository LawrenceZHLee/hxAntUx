import React, {Component, Fragment} from 'react';

//按钮切换
export default ({buttonColumn,name,handleTableChange}) => {
  const buttonChangeContent = buttonColumn.map((item,index) => {
    const color = item.selected ? "se":"unSe";
    return (
      <Fragment key={index}>
        <span className={`self-table-item  self-color-${color}`} onClick={()=>handleTableChange(item.name)}>
              <i className={`iconfont icon-${item.icon}`}/>{item.name}
            </span>
      </Fragment>
    )
  });
  return (
    <div className="self-table-change">
      <p className="self-table-text">
        <span className="f16">{name}</span>
        {buttonChangeContent}
      </p>
    </div>
  )
}
