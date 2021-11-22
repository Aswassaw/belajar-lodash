const _ = require("lodash");

//////// 1
// Change string to uppercase/lowercase in lodash
console.log(_.upperCase("manusia"));
console.log(_.lowerCase("MANUSIA"));
console.log(_.toUpper("manusia"));
console.log(_.toLower("MANUSIA"));
// Satu-satunya alasan untuk menggunakan fungsi case milik lodash adalah karena bisa digunakan dalam chain
console.log(_.chain("manusia").upperCase().value());
