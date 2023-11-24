const http = require('http');

const server = http.createServer((request,response) => {
  const status = 200
  const mymeType = {'Content-Type': 'text/plain'}
  response.writeHead(status,mymeType)
  response.write('Hola Mundo desde nodeJs')
  response.end()
})

server.listen(3000)
console.log('Servidor corriendo en el puerto 3000')