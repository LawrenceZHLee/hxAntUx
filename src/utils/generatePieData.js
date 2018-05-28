import {reValue} from './randomNum';

export function generatePieData(column, limit, timeData = []) {
  let data = [];
  if (timeData.length > 0) {
    column.map(item => {
      timeData.forEach(it => {
        const itCol = {};
        itCol.name = item.name;
        itCol.time = it;
        itCol.count = reValue(1, limit)[0];
        data.push(itCol);
      });
    });
  } else {
    data = column.map(item => {
      const itCol = {};
      itCol.name = item.name;
      itCol.count = reValue(1, limit)[0];
      return itCol;
    });
  }
  console.log('$PARANS!!!!data',data)
  return data;
}
