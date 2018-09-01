const argv = require('yargs')
  .option('validate', {
    demand: false,
    alias: 'v'
  })
  .help()
  .argv;
// console.log(argv);

module.exports = {
  argv: argv
};