//生成随机数
const random = (n,values,limit) => {
  if(n === 0) return values;
  values.push(Math.ceil(Math.random()*limit))
  return random(n-1,values,limit);
};

export function reValue (num,limit) {
  const values = [];
  return random(num,values,limit);
};

