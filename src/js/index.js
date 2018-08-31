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






function mdLinks(path, option) {


  // return new Promise((resolve, reject) => {
  //   let filePromise = readFiles(filename)
  //   filePromise.then
  // })
};

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${path.join(process.cwd(), filename)}`, 'utf-8', (error, data) => {

      if (error) {
        return reject(error); //Sabemos que hay un error, así que rechazamos la promesa
        //Si hay error, también nos aseguramos con return de no seguir ejecutando nada más en esta función
      }
      return resolve(data); //En caso de que no haya error resolvemos la promesa con los datos que recibimos en el callback




    });
  });
};
readFilePromise(filename)
  .then((data) => {
    let txt = data.split(os.EOL);

    txt.forEach((element, index) => {
      console.log(element);
      console.log(txt);
      let line = index + 1;

      let links = markdownLinkExtractor(element);
      console.log(`###${JSON.stringify(links)}`);
      links.forEach((link2) => {
        console.log(link2);
        console.log(`holi${JSON.stringify(link2.href)}`);
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
          .catch(err => console.log((link2.href + ':ERROR ' + 'line:' + line).red));
      });
    });
  });


// function readFiles(filename) {
//   // return new Promise((resolve, reject) => {
//   let data = fs.readFileSync(`${path.join(process.cwd(), filename)}`, 'utf-8');
//   console.log(`${path.join(process.cwd(), filename)}`);


//   let txt = data.split(os.EOL);

//   txt.forEach((element, index) => {
//     console.log(element);
//     console.log(txt);
//     let line = index + 1;

//     let links = markdownLinkExtractor(element);
//     console.log(`###${JSON.stringify(links)}`);
//     links.forEach((link2) => {
//       console.log(link2);
//       console.log(`holi${JSON.stringify(link2.href)}`);
//       fetch(`${link2.href}`)
//         .then((response) => {
//           if (response.status < 400) {
//             validate = true;
//           } else {
//             validate = false;
//           }
//           let responseLinks = {
//             href: link2.href,
//             text: link2.text,
//             file: link2.file,
//             status: response.status + ' ' + response.statusText,
//             line: line,
//             validate: validate
//           };

//           if (validate === true) {
//             console.log(colors.green(responseLinks));
//           } else {
//             console.log(colors.red(responseLinks));
//           }

//         })
//         .catch(err => console.log((link2.href + ':ERROR ' + 'line:' + line).red));
//     });
//   });
//   // }
// };

// Funciones de los comandos

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

function show() {
  let argv2 = process.argv;
  let parametro = argv2[3];
  filename = parametro.split('=')[1];
  console.log(filename);
  readFilePromise(filename);

};

function check(filename, responseLinks) {
  readFiles(filename);
  console.log(responseLinks);
}



module.exports = {
  mdLinks: mdLinks,
  listOfInstrucions: listOfInstrucions,
  readFilePromise: readFilePromise

};