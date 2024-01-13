
const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const numeroAleatorio = gerarNumeroAleatorio()
const numeroNaTela = document.querySelector('.box')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1 )

}

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor


console.log(numeroAleatorio)