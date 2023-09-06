const botao = document.getElementById('botao')
const inputNumero = document.getElementById('numero')
const seletorBaseAtual = document.querySelector('#base-atual')
const seletorBaseFinal = document.querySelector('#base-final')
const divResultado = document.getElementById('resultado')

const converterBase = (numero, baseAtual, baseFinal) => {
  if (baseAtual === baseFinal){
      return numero;
  } else if (baseAtual === 10){
      return numero.toString(baseFinal);
  } else {
      const numberConvertido = Number.parseInt(numero, baseAtual)
      return numberConvertido.toString(baseFinal);
  }
}

botao.addEventListener('click', ()=>{
    // let numeroFinal;
    const numeroAtual = Number.parseFloat(inputNumero.value);
    console.log(typeof numeroAtual)
    const baseAtual = Number.parseInt(seletorBaseAtual.value);
    const baseFinal = Number.parseInt(seletorBaseFinal.value);

    const numeroFinal = converterBase(numeroAtual,baseAtual,baseFinal);

    divResultado.classList.remove('invisivel')
    divResultado.innerHTML = `${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal.toUpperCase()}<sub>${baseFinal}</sub>`
})