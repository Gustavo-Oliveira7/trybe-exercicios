const numSorteado = () => {
    numero = Math.floor(Math.random() * 5) + 1;
    return numero;
}

const loteria = (bilhete, numSorteado) => {
    if (bilhete === numSorteado){
        return 'Parabéns, você ganhou!'
    } else {
        return 'Tente novamente'
    }
}

console.log(loteria(2,numSorteado()));