import {arrCopy} from './deepCopy';
const randomNum = (num) => {
  return Math.ceil(Math.random() * num) - 1
};

export function setData(values, arr) {
  const names = arrCopy(arr);
  const data = values.map((item,index) => {
    const nameIndex = randomNum(names.length);
    const dataItem = {};
    dataItem.value = item;
    dataItem.rank = index+1;
    dataItem.name = names[nameIndex];
    names.splice(nameIndex,1);
    return dataItem;
  });
  return data;
};
