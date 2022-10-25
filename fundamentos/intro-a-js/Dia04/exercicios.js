let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: 'O último MacPatinhas',
    
  };

// console.log('Bem-vinda, ' + info.personagem);
info['recorrente'] = 'Sim'
info2['recorrente'] = 'Sim'
// console.log(info);

// for (const key in info){
//     console.log(key);
// }

// for (const key in info){
//     console.log(info[key]);
// }

for (const key in info && info2){
    if (info[key] == info2[key]) {
        console.log('Ambos recorrentes');
        
    }else{
        console.log(info[key]+' e '+info2[key] );
    }
}
