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

module.exports = {
  argv
};