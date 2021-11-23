const _ = require("lodash");

//////// 1
// // Generate random number in plain js
// console.log(parseInt(Math.random() * 100)); // From 0 to 100
// // Generate random number in lodash
// console.log(_.random(100)); // From 0 to 100
// console.log(_.random(20, 25)); // From 20 to 25
// console.log(_.random(20, 25, true)); // From 20 to 25 and float

//////// 2
// Generate unique id
// console.log(_.uniqueId()); // 1
// console.log(_.uniqueId('user_')); // 2
// console.log(_.uniqueId('post_')); // 3

//////// 3
// Flatten (mengubah array multidimensi menjadi hanya 1 dimensi)
// console.log(
//   _.flatten([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );
// console.log(
//   _.flattenDeep([
//     [1, 2, 3],
//     [4, 5, [6, 7, [9, 10, [11, 12, 13]]]],
//   ])
// );

//////// 4
// Compact (menghilangkan nilai falsy dari array)
// let arr = [1, 2, null, 3, undefined, 0, false, ""];
// console.log(_.compact(arr));

// let user = [
//   {
//     id: 1,
//     name: "Andry",
//   },
//   null,
//   {
//     id: 2,
//     name: "Bagas",
//   },
//   undefined,
//   {
//     id: 3,
//     name: "Adi",
//   },
// ];
// console.log(_.compact(user));

//////// 5
// Clone (membuat clone, mencegah bug reference)
// let baseConfig = {
//   apiUrl: "andry.com",
//   port: 3000,
// };
// // Membuat clone di plain js
// let nativeClone = { ...baseConfig };
// nativeClone.apiUrl = 'bagas.com'
// // Membuat clone di lodash
// let lodashClone = _.clone(baseConfig);
// lodashClone.port = 4000;
// console.log(baseConfig);
// console.log(nativeClone);
// console.log(lodashClone);

//////// 6
// Cheking type in lodash
console.log(_.isString("Manusia")); // True jika string
console.log(_.isNumber(5)); // True jika number
console.log(_.isBoolean(true)); // True jika boolean
console.log(_.isNaN(NaN)); // True jika NaN
console.log(_.isEmpty("")); // True jika kosong
console.log(_.isObject({})); // True jika object
console.log(_.isArray({})); // True jika array
console.log(_.isEqual(1, "1")); // 1 number sama dengan 1 string
console.log(_.isEqual({ 1: "A" }, { 1: "A" })); // Membandingkan 2 buah object (ini mustahil di plain js, tapi lodash bisa)
console.log(_.isNull(null)); // True jika null
console.log(_.isUndefined(undefined)); // True jika undefined
console.log(_.isNil(undefined)); // True jika null / undefined
