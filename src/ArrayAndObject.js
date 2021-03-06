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
// let users = [
//   {
//     id: 1,
//     name: "Aswassaw",
//   },
//   {
//     id: 2,
//     name: "Fliger",
//   },
// ];

// let usersName = _.map(users, "id");
// console.log(usersName);

//////// 6
// Challenge (map)
// let users = [
//   {
//     id: 1,
//     first_name: "Andry",
//     status: "active",
//   },
//   {
//     id: 2,
//     first_name: "Bagas",
//     status: "inactive",
//   },
// ];

// Tugas
// - Mengubah key first_name dari snake_case menjadi camelCase
// - Mengubah key status menjadi isActive dan nilainya antara true / false, bukan active / inactive

// Normalize with js
// function normalizeUsers(users) {
//   return users.map((user) => {
//     return {
//       id: user.id,
//       firstName: user.first_name,
//       isActive: user.status === "active",
//     };
//   });
// }
// let usersAfterNormalizeWithJS = normalizeUsers(users);
// console.log(usersAfterNormalizeWithJS);

// Normalize using lodash
// let usersAfterNormalizeWithLodash = _.map(users, (user) => {
//   return {
//     id: user.id,
//     firstName: user.first_name,
//     isActive: user.status === "active",
//   };
// });
// console.log(usersAfterNormalizeWithLodash);

//////// 7
// Filter with lodash
// console.log(_.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => item % 2 !== 0)); // Filter angka ganjil
// console.log(_.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => item % 2 === 0)); // Filter angka ganjil

// Filter object with lodash
// let users = {
//   admin: {
//     name: "Andry",
//   },
//   user: {
//     name: "Bagas",
//   },
//   user: {
//     name: "Adi",
//   },
// };
// console.log(_.filter(users, { name: "Andry" }));
// console.log(_.filter(users, (user) => user.name.includes("d")));

//////// 8
// Challenge (filter)
// let products = [
//   {
//     id: 1,
//     name: "milk",
//     price: 2000,
//   },
//   {
//     id: 2,
//     name: "bread",
//     price: 3000,
//   },
//   {
//     id: 3,
//     name: "meat",
//     price: 8000,
//   },
// ];

// function searchItem(search) {
//   return _.filter(products, (product) => product.name.includes(search.toLowerCase()));
// }
// console.log(searchItem("A"));

//////// 9
// Includes on js native
// console.log([1, 2, 3, 4, 5].includes(4));
// Includes with lodash
// console.log(_.includes([1, 2, 3, 4, 5], 7));

//////// 10
// Lodash method (find, findIndex, findLast, findLastIndex)
// let users = [
//   {
//     id: 1,
//     name: "Andry",
//   },
//   {
//     id: 2,
//     name: "Bagas",
//   },
//   {
//     id: 3,
//     name: "Andry",
//   },
// ];
// console.log(_.find(users, (user) => user.name === "Andry"));
// console.log(_.findIndex(users, (user) => user.name === "Andry"));
// console.log(_.findLast(users, (user) => user.name === "Andry"));
// console.log(_.findLastIndex(users, (user) => user.name === "Andry"));

//////// 11
// Removing item from array with lodash
// let initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(_.without(initialArr, 1, 4, 9)); // Tidak mengubah array bawaan

// let users = [
//   {
//     id: 1,
//     name: "Andry",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Bagad",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "Adi",
//     isActive: true,
//   },
// ];
// // Reject (menghapus item dari array)(tidak mengubah array bawaan)
// console.log(
//   // Mengembalikan array users hanya yang id !== 2
//   _.reject(users, (user) => {
//     return user.id === 2;
//   })
// );
// //
// // Remove (menghapus item dari array)(mengubah array bawaan)
// console.log(
//   // Mengembalikan array users hanya yang isActive !== true
//   _.remove(users, (user) => {
//     return !user.isActive;
//   })
// );

//////// 12
// Chanllenge (reject)
// let users = [
//   {
//     id: 1,
//     name: "Andry",
//     isActive: true,
//     likes: 100,
//   },
//   {
//     id: 2,
//     name: "Bagad",
//     isActive: false,
//     likes: 34,
//   },
//   {
//     id: 1,
//     name: "Adi",
//     isActive: false,
//     likes: 991,
//   },
// ];
// function getPopularUsers(users){
//   // Mengembalikan users dengan likes lebih besar 100 dan isActive true
//   return _.reject(users, (user) => {
//     return !user.isActive || user.likes < 100;
//   })
// }
// console.log(getPopularUsers(users));

//////// 13
// Every and some
// let users = [
//   {
//     id: 1,
//     name: "Andry",
//     isActive: true,
//     likes: 100,
//   },
//   {
//     id: 2,
//     name: "Bagad",
//     isActive: false,
//     likes: 34,
//   },
//   {
//     id: 1,
//     name: "Adi",
//     isActive: false,
//     likes: 991,
//   },
// ];
// // Every (akan mengembalikan true jika semua isActive bernilai true)
// console.log(
//   _.every(users, (user) => {
//     return user.isActive;
//   })
// );
// // Some (akan mengembalikan true jika ada salah satu isActive yang bernilai)
// console.log(_.some(users, (user) => user.isActive));

//////// 14
// Sorting
// Sorting with plain js
// console.log([2, 1, 6, 9, 3, 11, 77, 3, 99, 22].sort((a, b) => a - b));
// Sorting with lodash
// console.log(_.sortBy([2, 1, 6, 9, 3, 11, 77, 3, 99, 22]));

// Sorting array of object
// let users = [
//   {
//     name: "Andry",
//     react: [
//       {
//         angry: 12,
//         care: 33,
//         love: 77,
//         like: 13,
//       },
//     ],
//   },
//   {
//     name: "Bagad",
//     react: [
//       {
//         angry: 33,
//         care: 24,
//         love: 12,
//         like: 67,
//       },
//     ],
//   },
//   {
//     name: "Badas",
//     react: [
//       {
//         angry: 33,
//         care: 24,
//         love: 12,
//         like: 67,
//       },
//     ],
//   },
//   {
//     name: "Adi",
//     react: [
//       {
//         angry: 35,
//         care: 22,
//         love: 44,
//         like: 46,
//       },
//     ],
//   },
//   {
//     name: "Allung",
//     react: [
//       {
//         angry: 88,
//         care: 99,
//         love: 66,
//         like: 1,
//       },
//     ],
//   },
// ];
// Mengurutkan berdasarkan likes
// console.log(
//   _.orderBy(users, [
//     (user) => {
//       return user.react[0].care;
//     },
//     (user) => {
//       return user.name;
//     },
//   ], ['desc', 'asc'])
// );

//////// 15
// Group by
// let users = [
//   {
//     id: 1,
//     name: "Andry",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Bagad",
//     isActive: false,
//   },
//   {
//     id: 1,
//     name: "Adi",
//     isActive: false,
//   },
// ];
// console.log(_.groupBy(users, (user) => user.isActive));

//////// 16
// Chain method (melakukan pemanggilan method lodash secara berantai)
// console.log(
//   _.chain([33, 1, 3, 88, 22, 12, 7])
//     .sortBy()
//     .filter((item) => item % 2 !== 0)
//     .map((item) => item * 2)
//     .value()
// );

//////// 17
// // head (Mendapatkanbagian array pertama)
// console.log(_.head(["Human", 44, true, "Bagad"]));
// // tail (Mendapatkan bagian array selain array pertama)
// console.log(_.tail(["Human", 44, true, "Bagad"]));
// // last (Mendapatkan bagian array terakhir)
// console.log(_.last(["Human", 44, true, "Bagad"]));
// // initial (Mendapatkan bagian array selain array terakhir)
// console.log(_.initial(["Human", 44, true, "Bagad"]));

//////// 18
// Shuffle method
console.log(_.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Shuffle method for string
console.log(_.shuffle("MAnusia"));

//////////////// Note:
// - Method lodash (map dan filter) akan tetap mengembalikan array bahkan jika initial valuenya adalah obejct.
// - Semua lodash method yang berfungsi pada array juga akan berfungsi jika digunakan pada string.
