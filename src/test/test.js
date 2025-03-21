const list = [{ a: 1 }, { a: 2 }, { a: 3 }];

const del = list.splice(1, 1);
console.log(list); // [{ a: 1 }, { a: 3 }]
console.log(del); // [{ a: 2 }]
