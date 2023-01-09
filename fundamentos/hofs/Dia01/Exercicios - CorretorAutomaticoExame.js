const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const count = () => {
    let points = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1){
        if(STUDENT_ANSWERS[index] === 'N.A'){
        } else if (STUDENT_ANSWERS[index] === RIGHT_ANSWERS[index]){
            points += 1;
        } else if (STUDENT_ANSWERS[index] !== RIGHT_ANSWERS[index]){
            points -= 0.5;
        }
    }
    return points;
};
console.log(count());