#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs')
  .command('show', 'Recibe la URL relativa o absoluta del archivo a consultar', {
    path: {
      demand: true,
      alias: 'p'
    }
  })
  .help()
  .argv;
console.log(argv);
listOfInstrucions();
mdLinks();

function listOfInstrucions(instruction) {
  instruction = argv._[0];

  switch (instruction) {
    case 'show':
      show();
      break;

  }
};

function mdLinks(path, option) {

};

function findExtName(element) {
  let extFile = path.extname(element);
  console.log(element);
  return extFile === '.md';

}

function show(path) {
  let argv2 = process.argv;
  let parametro = argv2[3];
  path = parametro.split('=')[1];

  console.log(path);
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








module.exports = {
  mdLinks: mdLinks,
  findExtName: findExtName
}