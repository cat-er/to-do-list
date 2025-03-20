function calculateNum(level, num) {
  const map = {
    A: 1,
    B: 2,
    C: 3,
  };
  const key = map[level];
  if (key === undefined) throw new Error("参数错误");
  if (Number(num) === NaN) throw new Error("num要传数字");
  return key * num;
}

console.log(calculateNum("A", 1000));
console.log(calculateNum("B", 2000));
console.log(calculateNum("C", 3000));
