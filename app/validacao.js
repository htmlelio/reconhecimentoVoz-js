function verificaSeOChutePossuiUmValorValido(chute)
{
    const numero = + chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if (numeroForMaiorQueOValorPermitido){
        elementoChute.innerHTML += `
    <div>valor inválido: o número secreto precisa estar enter ${menorValor} e ${maiorValor}</div>
    `
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `

    }
    }
};

    

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOValorPermitido(numero){

    return numero > maiorValor || numero < menorValor
}