/**
 * async-await
 *  es una forma de trabajar con promesas de una manera mas sencilla
 *
 *
 */

async function miFuncionAsincrona() {
  try {
    const miPromesa = await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('funcion asincrona terminada')
        resolve()
      }, 1000)
    })
  } catch (error) {
    console.log(error)
  }
}
