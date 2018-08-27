#!/usr/bin/env node
 // Bibliotecas e importaciones requeridas para usar el proyecto
const path = require('path');
const fs = require('fs');
const argv = require('../js/yargs').argv;
const Marked = require('marked');
listOfInstrucions();


// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo
function markdownLinkExtractor(filename) {
  const links = [];

  const renderer = new Marked.Renderer();

  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = function (href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  renderer.image = function (href, title, text) {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  Marked(filename, {
    renderer: renderer
  });

  console.log(links);
};

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
  markdownLinkExtractor(filename);
  return data;
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
  listOfInstrucions,
  readFiles
};

// process.cwd() -> da la ruta donde se está ejecutando el usuario
// path.join() -> une las rutas

// 1er parámetro .cwd, 2do parametro nombre de archivo

// function infoLink(linksStatus) {
//     linksStatus = {
//       href,
//       text,
//       file
//     };
//     return linksStatus;


//   }


//   function findLinks(data) {
//     links = [];
//     data.forEach((file) => {
//       if (file === 'www') {
//         links.push(file);
//       }
//       return links;
//     });
//   }

//   function findExtName(element) {
//     let extFile = path.extname(element);
//     return extFile === '.md';
//     console.log(element);

//   };