function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos operandos deben ser números');
    }
    return a + b;
}

function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos operandos deben ser números');
    }
    return a - b;
}

function multiplicar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos operandos deben ser números');
    }
    return a * b;
}

function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos operandos deben ser números');
    }
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

function calcular(a, b, operacion) {
    switch (operacion) {
        case 'suma':
            return sumar(a, b);
        case 'resta':
            return restar(a, b);
        case 'multiplicacion':
            return multiplicar(a, b);
        case 'division':
            return dividir(a, b);
        default:
            throw new Error('Operación no válida');
    }
}


try {
    let operacionSuma = calcular(2, 3, 'suma');
    console.log('Suma:', operacionSuma);

    let operacionResta = calcular(5, 2, 'resta');
    console.log('Resta:', operacionResta);

    let operacionMultiplicacion = calcular(5, 2.3, 'multiplicacion');
    console.log('Multiplicación:', operacionMultiplicacion);

    let operacionDivision = calcular(20, 4, 'division');
    console.log('División:', operacionDivision);

    // Error: Ambos operandos deben ser números
    let operacionSumaError = calcular(2, null, 'suma');  
    console.log('operacionSumaError', operacionSumaError);

    // Error: Ambos operandos deben ser números
    let operacionRestaError = calcular('a', 3, 'resta'); 
    console.log('operacionRestaError', operacionRestaError);

    let operacionMultiplicacionError = calcular(5, 2.3, 'multiplicacion'); 
    console.log('operacionMultiplicacionError', operacionMultiplicacionError);

    // Error: No se puede dividir por cero
    let operacionDivisionError = calcular(20, 0, 'division');  
    console.log('operacionDivisionError', operacionDivisionError);

    // Error: Operación no válida
    let operacionSinDatos = calcular(); 
    console.log('operacionSinDatos', operacionSinDatos);

} catch (error) {
    console.error('Error:', error.message);
}
