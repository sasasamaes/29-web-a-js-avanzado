// FUNCIONES ANONIMAS AUTOEJECUTABLES || IIFE(IMMEDIATLY INVOKED FUNCTION EXPRESSION). ESTAS FUNCIONES SIEMPRE LLEVAN ;
(function () {
  // AQUI PODRIAMOS COLOCAR LA LOGICA PARA LLAMAR A UN RECURSO EXTERNO DE FORMA INMEDIATA
  return console.log("Soy una funcion anonima autoejecutable");
})();

(() => {
  return console.log("Soy una funcion anonima autoejecutable, pero ... version flecha");
})();

// CREAR UNA FUNCION IIFE QUE PIDA COMO PARAMETROS, DOS NUMEROS ENTEROS Y REGRESE LA SUMA DE ESTOS. EN VERSION DE FUNCION CLASICA Y ARROW

console.log((function (num1, num2) {
  return num1 + num2;
})(18, 8));

console.log(((num1, num2) => num1 + num2)(8, 15));