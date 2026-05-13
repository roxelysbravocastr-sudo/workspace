// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
  suma = a + b;
  return suma;
}

// Función resta
function restar(a, b) {
  resta = a - b;
  return resta;
}

// Función multiplicación
function multiplicar(a, b) {
  multiplicacion = a * b;
  return multiplicacion;
}

// Función división
function dividir(a, b) {

  if (b === 0) {
    return "No se puede dividir por cero.";
  }

  division = a / b;
  return division;
}

// Función potencia
function potencia(a, b) {
  potencia = Math.pow(a, b);
  return potencia;
}

// Función mayor
function mayor(a, b) {
  return a > b ? a : b;
}

// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 5));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 5));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 5));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 5));

console.log("----------------");

console.log("Resultado potencia:");
console.log(potencia(2, 3));

console.log("----------------");

console.log("Número mayor:");
console.log(mayor(10, 5));

console.log("----------------");

console.log("División por cero:");
console.log(dividir(10, 0));