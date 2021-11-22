const _ = require("lodash");

//////// 1
// Standard Foreach (Mengembalikan undefined)
// let eachStandard = [1, 2, 3].forEach((item, index) => {
//   console.log(item + "-" + index);
// });

// Lodash Foreach (Mengembalikan array)
// let eachLodash = _.each([1, 2, 3], (item, index) => {
//   console.log(item + "-" + index);
// });

// console.log(eachStandard, eachLodash);

//////// 2
let items = {
  1: {
    name: "Andry Pebrianto",
  },
  satu: {
    name: "Bagas Ihwaluddin",
  },
};

// Perulangan object dengan js native
for (let item in items) {
  console.log(items[item].name + "-" + item);
}

let arr = [];
// Perulangan object dengan lodash
_.each(items, (item, index) => {
  console.log(item.name + "-" + index);

  arr.push(item);
});

console.log(arr);
