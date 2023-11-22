// Import
// const nombrePaquete = require('archivoAImportar.js')


// exports.funcionA = function (){
//   console.log('Hola')
// }

// exports.variableAexportarB = function (){
//   console.log('Hola B')
// }

const funcionA = function (){
  console.log('Hola funcionA')
}

const funcionB = function (){
  console.log('Hola funcionB')
}


module.exports = {
  funcionA,
  funcionB
}

// Export
// module.exports = funcionA