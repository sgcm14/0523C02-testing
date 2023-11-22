const util = require('../util.js');

describe('Clase util.js - Formulario Estudiantil', () => {
  describe('generateText', () => {
    it('Debería retornar un mensaje de registro exitoso para una edad válida (positivo)', () => {
      const result = util.generateText('John Doe', 25, 'Bachillerato');
      expect(result).toBe('Registro OK de John Doe en: Bachillerato.');
    });

    it('Debería retornar un mensaje de registro fallido para una edad mayor a 65 (negativo)', () => {
      const result = util.generateText('Jane Doe', 70, 'Licenciatura');
      expect(result).toBe('No pudimos registrar a: Jane Doe. Por favor contactá a soporte@dh.com para más información.');
    });

    it('Debería retornar un mensaje de registro fallido para una edad menor a 18 (negativo)', () => {
      const result = util.generateText('Bob Smith', 16, 'Maestría');
      expect(result).toBe('Edad ingresada no válida. Por favor intentá nuevamente.');
    });
  });

  describe('validateInput', () => {
    it('Debería retornar true para un texto no vacío (positivo)', () => {
      const result = util.validateInput('Some text', true);
      expect(result).toBe(true);
    });

    it('Debería retornar false para un texto vacío cuando se requiere no estar vacío (negativo)', () => {
      const result = util.validateInput('', true);
      expect(result).toBe(false);
    });

    it('Debería retornar false para un texto vacío cuando no se requiere no estar vacío (positivo)', () => {
        const result = util.validateInput('', false);
        expect(result).toBe(false);
    });      

    it('Debería retornar false para un texto nulo cuando se requiere no estar vacío (negativo)', () => {
      const result = util.validateInput(null, true);
      expect(result).toBe(false);
    });
  });
});
