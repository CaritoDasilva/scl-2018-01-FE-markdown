const argv = require('yargs')
  .command('show', 'Recibe la URL relativa o absoluta del archivo a consultar', {
    filename: {
      demand: true,
      alias: 'f'
    }
  })
  .command('check', 'Valida los links encontrados', {
    filename: {
      demand: true,
      alias: 'f'
    },
    validate: {
      demand: true,
      alias: 'v'
    }
  })
  .help()
  .argv;
console.log(argv);

module.exports = {
  argv
};