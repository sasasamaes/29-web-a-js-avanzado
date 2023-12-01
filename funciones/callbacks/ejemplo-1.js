// ES UN COMPORTAMIENTO ESPERADO, QUE OCURRE CUANDO TENEMOS UNA FUNCION DE ORDEN MAYOR QUE EJECUTA LA FUNCION QUE PIDIO COMO PARAMETRO

// TAMBIEN EL CALLBACK/LLAMADO DE VUELTA SE DA CUANDO UNA FUCION EJECUTA
// OTRA FUNCION. EN UN MOMENTO DADO, LA FUNCION "A", MANDA A LLAMAR A LA FUNCION "B" Y ESTA ULTIMA LE CONTESTA CON SU EJECUCION

// function otraFuncion() {
//   // ejecuta un codigo
// }

// function ordenMayor(otraFuncion) {
//   otraFuncion()
// }

const calculadora = (num1, num2, operacionMatematica) => operacionMatematica(num1, num2)

const multiplicar = (a, b) => a * b
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const dividir = (a, b) => a / b

console.log("Multiplicacion: ", calculadora(89, 11, multiplicar));
console.log("Suma: ", calculadora(89, 11, sumar));
console.log("Resta: ", calculadora(89, 11, restar));
console.log("Division: ", calculadora(89, 11, dividir));

// SOLUCION COMPAÑERO ADRIAN
// console.log("SUMA:", calculadora(89, 11, (a, b) => a + b));
// console.log("RESTA:", calculadora(89, 11, (a, b) => a - b));
// console.log("SUMA:", calculadora(89, 11, (a, b) => a / b));