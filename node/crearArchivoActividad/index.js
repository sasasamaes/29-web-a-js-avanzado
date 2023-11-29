// Crear un pequeno script que cree un archivo con el nombre de la actividad que le indique

const fs = require('fs')

const path = './'
const fileName = 'archivoActividad.txt'
const contentFile = 'Archivo creado por el script'
const destination = `${path}${fileName}`

fs.writeFile(destination, contentFile, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`El archivo ${fileName} se ha creado correctamente`)
  }
})