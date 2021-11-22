const _ = require("lodash");

//////// 1
// // Change string to uppercase/lowercase in lodash
// console.log(_.upperCase("manusia"));
// console.log(_.lowerCase("MANUSIA"));
// console.log(_.toUpper("manusia"));
// console.log(_.toLower("MANUSIA"));
// // Satu-satunya alasan untuk menggunakan fungsi case milik lodash adalah karena bisa digunakan dalam chain
// console.log(_.chain("manusia").upperCase().value());

//////// 2
// Join (menggabungkan array menjadi string) & Split (memisah string menjadi array)
// console.log(_.join(["A", "n", "d", "r", "y"], ""));
// console.log(_.split("Andry", ""));
// console.log(_.chain("foo/bar").split("/").join(" dan ").value());

//////// 3
// Challenge (converting string to slug)
// function convertStringToSlug(str) {
//   let slug = _.chain(str).toLower().split(" ").join("-").value();
//   return encodeURI(slug);
// }
// console.log(convertStringToSlug("Kota Trenggalek sangat indah"));
// console.log(convertStringToSlug("Soal CPNS ini akan membuatmu sakit kepala"));
// console.log(convertStringToSlug("Aldino Alung Putra Anugraha"));

//////// 4
// Capitalize string
console.log(_.capitalize("bagas adalah jelmaan makhluk yang sangat hebat"));
