const { suma, resta, multiplicacion, division } = require('../calc.js');

// Test para la función suma
test('Suma de dos números', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Suma de texto y número', () => {
  expect(suma('2', 3)).toBe(0);
});

// Test para la función resta
test('Resta de dos números', () => {
  expect(resta(5, 3)).toBe(2);
});

test('Resta de texto y número', () => {
  expect(resta('5', 3)).toBe(0);
});

// Test para la función multiplicacion
test('Multiplicación de dos números', () => {
  expect(multiplicacion(2, 3)).toBe(6);
});

test('Multiplicación de texto y número', () => {
  expect(multiplicacion('2', 3)).toBe(0);
});

// Test para la función division
test('División de dos números', () => {
  expect(division(6, 2)).toBe(3);
});

test('División de texto y número', () => {
  expect(division('6', 2)).toBe(0);
});

test('División por cero', () => {
  expect(() => division(6, 0)).toThrow('No se puede dividir por cero');
});
