function contar() {
  let comeco = document.getElementById('inicio')
  let final = document.getElementById('fim')
  let passada = document.getElementById('passo')
  let res = document.getElementById('res')

  if (comeco.value.length == 0 || final.value.length == 0 || passada.value.length == 0) {
    res.innerHTML = 'Impossivel contar'
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(comeco.value)
    let f = Number(final.value)
    let p = Number(passada.value)
    if (p <= 0) {
      window.alert('Passo invalido, considerando Passo 1')
      p = 1
    }
    if (i < f) {
      // Contagem crescente
      for (let cont = i; cont <= f; cont += p) {
        res.innerHTML += ` ${cont} \u{1F680}`
      }
    } else {
      //Contagem descrecente
      for (let cont = i; cont >= f; cont -= p) {
        res.innerHTML += ` ${cont} \u{1F680}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}