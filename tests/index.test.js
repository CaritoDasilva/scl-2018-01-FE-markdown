const mdLinks = require('./../src/js/index');

test('espera que sea una función', () => {
  expect(typeof mdLinks).toBe('function' || 'object');
});