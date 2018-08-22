const mdLinks = require('./../src/js/index');

test('espera que se una función', () => {
  expect(typeof mdLinks).toBe('function');
});