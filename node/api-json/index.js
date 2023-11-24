const http = require('http');
const url = require('url');

const server = http.createServer((request,response) => {
  // Paso 1: obtener la path del request
  const urlObject = url.parse(request.url) // { path: '/users', method: 'GET', host: 'localhost:3000', protocol: 'http' }
  const path = urlObject.path
  console.log('Path solicitada: ',path)

  // Paso 2: Definimos las variables que le vamos a setae a la respuesta
  let status = 0
  let responseObj = {}
  let mimeType = { 'Content-Type': 'application/json' }

  // Paso 3: Controller: Manejamos las peticiones
  if (path === '/') {
    status = 200
    responseObj = { message: 'Hola Mundo' }
  } else if (path === '/users') {
    status = 200
    responseObj = { message: 'Lista de usuarios' }
  }

  //Paso 4: Convertir el objeto de salida en un string
  const responseString = JSON.stringify(responseObj)

  //Paso 5: Regrasamos la respuesta al cliente
  response.writeHead(status,mimeType)
  response.write(responseString)
  response.end()

})

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})