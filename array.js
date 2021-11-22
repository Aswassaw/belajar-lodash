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
// let items = {
//   1: {
//     name: "Andry Pebrianto",
//   },
//   satu: {
//     name: "Bagas Ihwaluddin",
//   },
// };

// Perulangan object dengan js native
// for (let item in items) {
//   console.log(items[item].name + "-" + item);
// }

// let arr = [];
// Perulangan object dengan lodash
// _.each(items, (item, index) => {
//   console.log(item.name + "-" + index);

//   arr.push(item);
// });

// console.log(arr);

//////// 3
// Standard Map
// let newArr = [1, 2, 3].map((item) => {
//   return item + 1;
// });
// console.log(newArr);

// Lodash Map
// let newArrLodash = _.map([1, 2, 3], (item) => {
//   return item + 2;
// });
// console.log(newArrLodash);

//////// 4
// let users = {
//   admin: {
//     name: "Andry Pebrianto",
//     age: 18,
//   },
//   user: {
//     name: "Bagas Ihwaludin",
//     age: 17,
//   },
// };
// let usernames = [];
// let ages = [];
// let usersWithAgePlus10 = [];

// Lodash Map for object
// usernames = _.map(users, (item) => item.name);
// ages = _.map(users, (item) => item.age);
// usersWithAgePlus10 = _.map(users, (item, index) => {
//   console.log(index + "-" + item.name);
//   return {
//     ...item,
//     age: item.age + 10,
//   };
// });
// console.log(usernames);
// console.log(ages);
// console.log(usersWithAgePlus10);

//////// 5
// Menggunakan array of object dan sintaks yang lebih sederhana
let users = [
  {
    id: 1,
    name: "Aswassaw",
  },
  {
    id: 2,
    name: "Fliger",
  },
];

let usersName = _.map(users, "id");
console.log(usersName);
