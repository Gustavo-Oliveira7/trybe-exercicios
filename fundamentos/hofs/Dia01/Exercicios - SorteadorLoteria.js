const verificaAposta = (numero) => {
    const numeroCerto = numeroSorteado();
    if (numero === numeroCerto){
        return 'Parabéns, você ganhou'
    } return 'Tente novamente';
};

const numeroSorteado = () => {
    return Math.floor(Math.random() * 5) + 1;
};

console.log(verificaAposta(2));