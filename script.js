function contar(){
  let inicio = document.getElementsById('txti');
  let fim = document.getElementsById('txtf');
  let passo = document.getElementsById('txtp');
  let res = document.getElementById('res');
  res.innerHTML = `Contando`;
  let comeco= Number(inicio.value);
  let final = Number(fim.value);
  let passando = Number(passo.value);
  var soma = comeco + final;
  res.innerHTML = `A soma é ${soma}`;
}

 