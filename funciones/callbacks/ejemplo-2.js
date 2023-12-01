function soyCien() {
  return 100
}
function soyDoscientos() {
  return 10000
}

function sumaDosFunciones(unaFuncion, otraFuncion) {
  const sumaResultante = unaFuncion() + otraFuncion()
  return sumaResultante
}

console.log(sumaDosFunciones(soyCien, soyDoscientos));
