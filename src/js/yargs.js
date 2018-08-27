const argv = require('yargs')
  .command('show', 'Recibe la URL relativa o absoluta del archivo a consultar', {
    filename: {
      demand: true,
      alias: 'f'
    }
  })
  .help()
  .argv;
console.log(argv);

module.exports = {
  argv
};