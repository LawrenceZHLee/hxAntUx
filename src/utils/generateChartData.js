import {reValue} from './randomNum';

export function generateChartData (column,dataValue,limit) {
  const data = column.map(item => {
    const itCol={};
    itCol.name=item.name;
    dataValue.forEach(it => {
      itCol[`${it}`] = reValue(1,limit)[0];
    });
    return itCol;
  });
  return data;
}
