function verificar(){
  var prim = document.getElementsByName('first')
  var primeiro= prim.value;
  var ult = document.getElementsByName('last')
  var ultimo = ult.value;
  var pulando = document.getElementsByName('pulando')
  var res = document.getElementById('res')
  var soma = primeiro+ultimo;
  res.innerHTML = `A soma é ${soma}`
}