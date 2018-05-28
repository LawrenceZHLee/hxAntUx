import moment from 'moment';

//生成时间
const month = (result,size,d) => {
  if(size === 0) return result;
  const newMonth=moment().subtract(size, 'M').format('L');
  result.push(newMonth.slice(2));
  return month(result,size-1,d);
};

export function generateMonth(size) {
  const d = new Date();
  const result=[];
  return month(result,size,d)
}
