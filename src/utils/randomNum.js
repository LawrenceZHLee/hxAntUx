//生成随机数
const random = (n, values, limit) => {
  if (n === 0) return values;
  values.push(Math.ceil(Math.random() * limit))
  return random(n - 1, values, limit);
};

export function reValue(num, limit) {
  const values = [];
  return random(num, values, limit);
};

const sortV = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1
  } else {
    return 0;
  }
};

export function sortValue(num, limit) {
  const values = random(num, [], limit);
  return values.sort(sortV)
}

