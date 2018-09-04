const argv = require('yargs')
  .option('validate', {
    demand: false,
    alias: 'v'
  })
  .help()
  .argv;


module.exports = {
  argv: argv
};