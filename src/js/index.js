#!/usr/bin/env node

const fs = require('fs');


function mdLinks(path, option) {
  let argv = process.argv;
  let parametro = argv[2];
  path = parametro.split('=')[1];

  console.log(path);
};

function findExtName(element) {
  let extFile = path.extname(element);
  console.log(element);
  return extFile === '.md';

}

// let base = 5;
// let argv = process.argv;
// let parametro = argv[2];

// console.log(parametro);

// var pathSupplied = process.argv[2];
// var extFilter = process.argv[3];

// function extension(element) {
//   var extName = path.extname(element);
//   return extName === '.' + extFilter;
// };

// fs.readdir(pathSupplied, function (err, list) {
//   list.filter(extension).forEach(function (value) {
//     console.log(value);
//   });
// });








module.exports = mdLinks;
module.exports = findExtName;