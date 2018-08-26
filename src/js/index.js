#!/usr/bin/env node

const fs = require('fs');
const argv = require('../js/yargs').argv;
listOfInstrucions();
mdLinks();

function listOfInstrucions(instruction) {
  instruction = argv._[0];

  switch (instruction) {
    case 'show':
      show();
      console.log('Se analizará si su archivo tiene links');
      break;
    default:
      console.log('Comando no es reconocido');

  }
};

function mdLinks(path, option) {

};

function readFile(file) {

}

function infoLink(links) {
  links = {
    href,
    text,
    file
  };
  return links;


}


function findLinks(links) {

}

function findExtName(element) {
  let extFile = path.extname(element);
  return extFile === '.md';
  console.log(element);

};

function show(path) {
  let argv2 = process.argv;
  let parametro = argv2[3];
  path = parametro.split('=')[1];
  findExtName(element);
  console.log(path);
}


// fs.readdir(pathSupplied, function (err, list) {
//   list.filter(extension).forEach(function (value) {
//     console.log(value);
//   });
// });








module.exports = {
  mdLinks,
  findExtName
}