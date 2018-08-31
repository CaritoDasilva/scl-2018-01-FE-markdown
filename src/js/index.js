#!/usr/bin/env node
 // Bibliotecas e importaciones requeridas para usar el proyecto
var os = require('os')
const path = require('path');
const fs = require('fs');
const argv = require('../js/yargs').argv;
const markdownLinkExtractor = require('../js/extractorLinks').markdownLinkExtractor;
const saveLinks = require('../js/extractorLinks').saveLinks;
const fetch = require('node-fetch');
const colors = require('colors');
listOfInstrucions();




function listOfInstrucions(instruction) {
  instruction = argv._[0];

  switch (instruction) {
    case 'show':
      show();
      console.log('Se analizará si su archivo tiene links');
      break;
    case 'check':
      check();
      console.log('Se están analizando los links de su archivo .md');
      break;
    default:
      console.log('Comando no es reconocido');

  }
};

function mdLinks(path, option) {


  // return new Promise((resolve, reject) => {
  //   let filePromise = readFiles(filename)
  //   filePromise.then
  // })
};

function readFiles(filename) {
  // return new Promise((resolve, reject) => {
  let data = fs.readFileSync(`${path.join(process.cwd(), filename)}`, 'utf-8');
  console.log(`${path.join(process.cwd(), filename)}`);


  let txt = data.split(os.EOL);

  txt.forEach((element, index) => {
    console.log(element);
    console.log(txt);
    let line = index + 1;

    let links = markdownLinkExtractor(element);
    console.log(`###${JSON.stringify(links)}`);
    links.forEach((link2) => {

      console.log(`holi${JSON.stringify(link2.href)}`);
      fetch(`${link2.href}`)
        .then((response) => {
          if (response.status < 400) {
            validate = true;
          } else {
            validate = false;
          }
          let responseLinks = {
            url: link2.href,
            status: response.status + ' ' + response.statusText,
            line: line,
            validate: validate
          };

          if (validate === true) {
            console.log(colors.green(responseLinks));
          } else {
            console.log(colors.red(responseLinks));
          }

        })
        .catch(err => console.log((link2.href + ':ERROR ' + 'line:' + line).red));
    });
  });
  // }
};

// function urlLinks(links) {

// };

// Funciones de los comandos

function show() {
  let argv2 = process.argv;
  let parametro = argv2[3];
  filename = parametro.split('=')[1];
  console.log(filename);
  readFiles(filename);
  return filename;
};

function check(filename, responseLinks) {
  readFiles(filename);
  console.log(responseLinks);
}



// fs.readdir(pathSupplied, function (err, list) {
//   list.filter(extension).forEach(function (value) {
//     console.log(value);
//   });
// });


module.exports = {
  mdLinks: mdLinks,
  listOfInstrucions: listOfInstrucions,
  readFiles: readFiles,

};

// process.cwd() -> da la ruta donde se está ejecutando el usuario
// path.join() -> une las rutas

// 1er parámetro .cwd, 2do parametro nombre de archivo



//   function findExtName(element) {
//     let extFile = path.extname(element);
//     return extFile === '.md';
//     console.log(element);

//   };