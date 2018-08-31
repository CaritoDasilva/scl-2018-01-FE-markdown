const argv = require('yargs')
  .option('validate', {
    demand: false,
    alias: 'v'
  })

  // .command('check', 'Valida los links encontrados', {
  //   filename: {
  //     demand: true,
  //     alias: 'f'
  //   },
  //   validate: {
  //     demand: true,
  //     alias: 'v'
  //   }
  // })
  .help()
  .argv;
console.log(argv);

module.exports = {
  argv: argv
};