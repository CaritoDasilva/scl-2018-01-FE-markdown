#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const argv = require('../js/yargs').argv;

listOfInstrucions();



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

function readFiles(filename) {
  let data = fs.readFileSync(`${path.join(process.cwd(), filename)}`, 'utf-8');
  console.log(data);

  return data;
};

function infoLink(linksStatus) {
  linksStatus = {
    href,
    text,
    file
  };
  return linksStatus;


}


function findLinks(data) {
  links = [];
  data.forEach((file) => {
    if (file === 'www') {
      links.push(file);
    }
    return links;
  });
}

function findExtName(element) {
  let extFile = path.extname(element);
  return extFile === '.md';
  console.log(element);

};

function show(filename) {
  let argv2 = process.argv;
  let parametro = argv2[3];
  filename = parametro.split('=')[1];
  console.log(filename);
  readFiles(filename);
}


// fs.readdir(pathSupplied, function (err, list) {
//   list.filter(extension).forEach(function (value) {
//     console.log(value);
//   });
// });


// url('../../../../markdonwnLinks/scl-2018-01-FE-markdown/src/js/file2.txt')





module.exports = {
  mdLinks,
  findExtName,
  listOfInstrucions,
  readFiles
}

// process.cwd() -> da la ruta donde se está ejecutando el usuario
// path.join() -> une las rutas

// 1er parámetro .cwd, 2do parametro nombre de archivo