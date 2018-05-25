const random = (n,values,limt) => {
  if(n === 0) return values;
  values.push(Math.ceil(Math.random()*limt))
  return random(n-1,values,limt);
};

export function reValue (num,limt) {
  const values = [];
  return random(num,values,limt);
};

