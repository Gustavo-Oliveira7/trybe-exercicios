// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
//     nota: 'O último MacPatinhas',
    
//   };

// console.log('Bem-vinda, ' + info.personagem);
// info['recorrente'] = 'Sim'
// info2['recorrente'] = 'Sim'
// console.log(info);

// for (const key in info){
//     console.log(key);
// }

// for (const key in info){
//     console.log(info[key]);
// }

// for (const key in info && info2){
//     if (info[key] == info2[key]) {
//         console.log('Ambos recorrentes');
        
//     }else{
//         console.log(info[key]+' e '+info2[key] );
//     }
// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
// console.log(leitor.livrosFavoritos);
// console.log(leitor);
let novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
leitor.livrosFavoritos.push(novoLivro)
console.log('O livro favorito de ' + leitor.nome + ' ' + 
leitor.sobrenome + ' se chama '+ leitor.livrosFavoritos[0].titulo);
console.log('Julia tem '+ leitor.livrosFavoritos.length +' livros favoritos');