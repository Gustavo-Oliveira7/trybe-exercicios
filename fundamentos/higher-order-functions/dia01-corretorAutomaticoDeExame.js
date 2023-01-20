const respostaCorreta = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compResposta = (respostaCorreta, STUDENT_ANSWERS) => {
        if (respostaCorreta == STUDENT_ANSWERS){
            return 1;
        } else if (STUDENT_ANSWERS == 'N.A'){
            return 0;
        } 
        return -0.5;
};

const resultadoFinal = (respostaCorreta, STUDENT_ANSWERS, compResposta) => {
    let pontos = 0;
    for(let index = 0; index < respostaCorreta.length; index +=1){
        const retorno = compResposta(respostaCorreta[index],STUDENT_ANSWERS[index])
        pontos += retorno;
    }
    return `pontuação foi de ${pontos}`
}

console.log(resultadoFinal(respostaCorreta,STUDENT_ANSWERS,compResposta));