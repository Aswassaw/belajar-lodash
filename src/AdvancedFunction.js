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
console.log(_.uniqueId()); // 1
console.log(_.uniqueId()); // 2
console.log(_.uniqueId()); // 3
