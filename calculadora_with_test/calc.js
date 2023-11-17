function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }
  return a + b;
}

function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }
  return a - b;
}

function multiplicacion(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }
  return a * b;
}

function division(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

module.exports = { suma, resta, multiplicacion, division };
