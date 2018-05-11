import React, { Component } from "react";
import { Popover } from "antd";

let isNeedFormat = (text, sizeWord) => {
  if (typeof text === "string" && text.length > sizeWord) {
    return true;
  } else {
    return false;
  }
};
let format = (text, sizeWord) => {
  return text.substr(0, sizeWord) + "...";
};
export default ({ text = "", sizeWord = 6 }) => {
  if (isNeedFormat(text, sizeWord)) {
    let formated = format(text, sizeWord);
    return (
      <Popover content={text}>
        <a href="javascript:void(0)">{formated}</a>
      </Popover>
    );
  } else {
    return <span>{text}</span>;
  }
};
