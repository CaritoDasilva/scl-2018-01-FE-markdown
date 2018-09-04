#!/usr/bin/env node
// Bibliotecas e importaciones requeridas para usar el proyecto
const argv = require('../js/yargs').argv;
var os = require('os');
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('../js/extractorLinks').markdownLinkExtractor;
const fetch = require('node-fetch');
const colors = require('colors');
listOfInstrucions();


// function mdLinks(filename, option) {

//   // return new Promise((resolve, reject) => {
//   //   if (error) {
//   //     return reject(error);
//   //   }
//   //   return resolve(readFilePromise);
//   // });
// };

function mdLinks(filename) {
  return new Promise((resolve, reject) => {
    if (path.isAbsolute(filename) === false) {
      fs.readFile(`${path.join(process.cwd(), filename)}`, 'utf-8', (error, data) => {
        if (error) {
          return reject(error);
          // Sabemos que hay un error, así que rechazamos la promesa
          // Si hay error, también nos aseguramos con return de no seguir ejecutando nada más en esta función
        }
        return resolve(data);
        // En caso de que no haya error resolvemos la promesa con los datos que recibimos en el callback
      });
    } else {
      fs.readFile((filename), 'utf-8', (error, data) => {
        if (error) {
          return reject(error);
          // Sabemos que hay un error, así que rechazamos la promesa
          // Si hay error, también nos aseguramos con return de no seguir ejecutando nada más en esta función
        }
        return resolve(data);
        // En caso de que no haya error resolvemos la promesa con los datos que recibimos en el callback
      });
    }
  });
};

mdLinks(filename)
  .then((data) => {
    let txt = data.split(os.EOL);

    txt.forEach((element, index) => {
      let line = index + 1;

      let links = markdownLinkExtractor(element);

      links.forEach((link2) => {
        fetch(`${link2.href}`)
          .then((response) => {
            if (response.status < 400) {
              validate = true;
            } else {
              validate = false;
            }
            let responseLinks = {
              href: link2.href,
              text: link2.text,
              file: link2.file,
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
          .catch(err => {
            let catchLinks = {
              href: link2.href,
              text: link2.text,
              file: link2.file,
              status: err.code,
              line: line,
              validate: false
            };
            console.log(colors.red(catchLinks));
          });
      });
    });
  });


// Funciones de los comandos

function listOfInstrucions(instruction) {
  if (require.main === module) {
    // Soy un programa en la terminal


    instruction = Object.entries(argv)[1][0];
    // console.log(`###${instruction}`);


    switch (instruction) {
    case 'validate':
      show();
      console.log('Se analizará si su archivo tiene links');
      break;
    case 'v':
      show();
      console.log('Se analizará si su archivo tiene links');
      break;
    default:
      console.log('Comando no es reconocido');
    }
  }
};

function show() {
  let argv2 = process.argv;
  let parametro = argv2[2];

  filename = parametro.split('=')[1];
};

module.exports = {

  listOfInstrucions: listOfInstrucions,
  mdLinks: mdLinks

};