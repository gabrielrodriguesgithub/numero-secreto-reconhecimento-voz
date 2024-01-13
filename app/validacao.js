function verificarChuteValido(chute) {
    const numero = +chute

    if(ChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
    }
    
    if(numeroMaiorMenorPermitido(numero)) {
       elementoChute.innerHTML += ` <div>Valor invalido: O numero esta entre ${menorValor} e ${maiorValor}</div>`
    }
    
    if(numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Parabéns!</h2>
        <h3 class="mensagem-acerto">Você acertou!</h3>
        <h4>O numero secreto era ${numeroAleatorio}</h4>
        <button id="jogar-novamente" class="btn-jogar-novamente"> Jogar novamente </button>
        `
    } else if(numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>` 
    } else if(numero < numeroAleatorio) {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>` 
    }
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenorPermitido(numero){
    return numero > maiorValor  || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})