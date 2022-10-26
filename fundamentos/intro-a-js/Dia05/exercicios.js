//🚀 Crie uma função que ligue e desligue um motor de um carro.
// 🚀Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
// 🚀Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// 🚀Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// 🚀Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
// 🚀Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

    // let status = 'desligado';

    // const ligarDesligar = () => (status === 'desligado' ? status = 'ligado' : status = 'desligado')
    // console.log(`O motor está ${ligarDesligar()}`); 
    // console.log(`O motor está ${ligarDesligar()}`); 
    // console.log(`O motor está ${ligarDesligar()}`); 

// 🚀 Crie uma função que calcule a área de um círculo.
// 🚀Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// 🚀Com base nessa informação:
// 🚀Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// 🚀Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
// 🚀Crie a lógica para retornar a área do círculo;
// 🚀Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

    // const pi = 3.14
    // const circleArea = (raio) => pi * (raio) ** 2
    // console.log(`Éssa é a area do círculo: ${circleArea(5)}`);

// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'

// const longestWord = (frase) => {for(let word of frase.split(' ')) (word.length > maior.length) ? maior = word : maior = maior}

// console.log(longestWord(frase));
let maior = ''
function longestWord(frase) {
    for(let word of frase.split(' ')) 
        if (word.length > maior.length){
            maior = word
        }
    console.log(maior);
}
        
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
