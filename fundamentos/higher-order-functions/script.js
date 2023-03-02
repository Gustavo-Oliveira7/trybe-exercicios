const emailGenerator = (name) => {
    const padronizando = name.toLowerCase().replace(' ','_')
    return { name, email: `${padronizando}@trybe.com`};
};

const newEmployees = (emailGenerator) => {
    
    const employees = {
      id1: emailGenerator('Pedro Guerra'),
      id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(emailGenerator));