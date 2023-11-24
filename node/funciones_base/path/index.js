const path = require('path')

//metodos de tratamiento de rutas o path
console.log(path.basename(__filename)) //nombre del archivo
console.log(path.dirname(__filename)) //ruta del archivo
console.log(path.extname(__filename)) //extension del archivo
console.log(path.parse(__filename)) //objeto con la informacion del archivo
console.log(path.join(__dirname,'test','hello.html')) //concatena las rutas
console.log(path.resolve(__dirname,'test','hello.html')) //concatena las rutas y resuelve las rutas absolutas

