# MARKDOWN Links Extractor

## Introduction

> Nuestra librería te ofrece un extractor que analizará los links del README de tu proyecto y te permitirá ir revisando si hay algún link que ya no se encuentre funcionando para que puedas actualizar y así, los seguidores de tus proyectos puedan tener acceso a toda la documentación que ofreces.

## Code Samples

>  if (response.status < 400) {
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

## Installation

> Para instalarlo debes clonar desde nuestro repositorio el proyecto y guardarlo en la carpeta de tu proyecto. Una vez guardado el usuario lo debe abrir desde la terminal. Para realizar la revisión de los links se debe realizar lo siguiente:

En la terminal:

markdown --validate=nombreArchivoMd

Posteriormente se imprimirá en consola un objeto con los detalles de los links como se muestra a continuación: 

{ href: 'http://www.google.cl',
  text: 'www.google.cl',
  file: 'file2.md',
  status: '200 OK',
  line: 3,
  validate: true }
{ href: 'https://www.wikipedia.org/kjhkjhkjh',
  text: 'https://www.wikipedia.org/kjhkjhkjh',
  file: 'file2.md',
  status: '404 Not Found',
  line: 8,
  validate: false }
