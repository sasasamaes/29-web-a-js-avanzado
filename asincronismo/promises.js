/*

Proceso de ejercicio en clase
1 Presiona el boton boton de comprar
2 Validando la tarjeta
3 Ver el mensaje de "gracias joven"
4 Entregaremos el paquete N dia

*/
/**
 * Bloque 4 - Solucion asincrona por promesas 
 * ( Pending, Response (resolve, reject))
 */

class Promises {
  ejecucion(){
    console.log('============== BLOQUE 4 ==============');

    const validatePaymentPromise = () => {
      return new Promise((resolve, reject) => {
        console.log('2 Validando la tarjeta');

        setTimeout(() => {
          const statusArray = [200,500,404]
          const randomResponse = statusArray[Math.floor(Math.random() * statusArray.length)]

          if(randomResponse === 200){
            //200 ok
            resolve('Tarjeta validada')
          } else if(randomResponse === 500){
            //500 error
            reject('Error en el servidor')
          } else {
            //404 not found
            reject('No se encontro')
          }
        }, 5000)

      })
    }

    console.log('1 Presiona el boton de comprar')
    
    validatePaymentPromise()
    .then((response) => {
      console.log(response)
      console.log('3 Ver el mensaje de "gracias joven"')
    }).then(() => {
      console.log('4 Entregaremos el paquete N dia')
    })
    .catch((error) => {
      console.log(error)
    })

  }

}

const promises = new Promises()
promises.ejecucion()
