const http = require('http')
const net = require('net')
const { URL } = require('url')

// Crear un servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hola Mundo')
})

// levantar un servidor
server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})

// Metodos del objeto request (solicitud)
request.path // /users
request.method // GET
request.host  // localhost:3000
request.protocol  // http


// Metodos del objeto response (respuesta)
response.write('Hola Mundo')
response.end() // finaliza la respuesta
response.setHeader('Content-Type', 'text/plain') // establecer el tipo de contenido
response.statusCode = 200 // establecer el status code
response.writeHead(200, { 'Content-Type': 'text/plain' }) // establecer el status code y el tipo de contenido
response.statusMessage = 'OK' // establecer el mensaje del status code
response.getHeader('Content-Type') // obtener el tipo de contenido