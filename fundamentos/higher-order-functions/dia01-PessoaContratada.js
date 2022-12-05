const emailGenerator = (name) => {
    const padronizando = name.toLowerCase().replace(' ','_')
    return { name, email: `${padronizando}@trybe.com`};
};

const newEmployees = (emailGenerator) => {
    
    const employees = {
      id1: emailGenerator('Pedro Guerra'),
      id2: emailGenerator('Luiza Drumond'), 
      id3: emailGenerator('Carla Paiva'), 
    }
    return employees;
  };

console.log(newEmployees(emailGenerator));