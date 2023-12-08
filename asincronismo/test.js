//Angel Santiago
 // Define una función llamada `sumaAsincrona` que tome dos números y un callback.
// La función debe simular una operación asincrónica y llamar al callback con el resultado después de un breve tiempo.

const sumaAsincrona = (num1,num2,callback) => setTimeout(() => {
    const resultado = callback(num1, num2);
    console.log(resultado);
}, 1000);


const suma = (num1, num2) => {
  const resultado = Number(num1) + Number(num2);
  return resultado;
}
    

sumaAsincrona(2,5,suma);