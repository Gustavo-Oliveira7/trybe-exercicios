let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0


for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
    soma += numbers[index]
}

console.log("A soma de todos os numeros da lista é :", soma)
console.log("A media aritmetica dos elementos é:", soma / numbers.length)

let media = soma / numbers.length
if (media > 20) {
    console.log("Valor maior que 20")

}else{
    console.log("Valor menor que 20")
}

let maior = 0
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior){
        maior = numbers[index]
    }
}
console.log("O maior numero da lista é :",maior)

let qntimpar = 0
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 != 0){
        qntimpar += 1
    }
}
console.log("o total de numeros impares da lista é:", qntimpar)

let menor = 7000**7000
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menor){
        menor = numbers[index]
    }
}
console.log("O menor numero da lista é :", menor)

newlist = []
for(let index = 1; index <= 25; index +=1){
    newlist.push(index)
}
console.log(newlist)

for(let index = 0; index < newlist.length; index +=1){
    console.log(newlist[index],"/ 2 = ",newlist[index]/2)
}
