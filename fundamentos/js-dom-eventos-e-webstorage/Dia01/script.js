
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function changeText() {
    let text = document.getElementById('paragrafo');
    text.innerHTML = 'Daqui a dois anos eu me vejo lalala lalala lalala lalalalalala lalala' ;
}
changeText()

function changeToGreen() {
    let square = document.getElementsByClassName('main-content')[0];
    square.style.backgroundColor = 'rgb(76,164,109)';
}
changeToGreen()

function changeToRed() {
    let midSquare = document.getElementsByClassName('center-content')[0];
    midSquare.style.backgroundColor = 'white';
}
changeToRed()

function changeH1() {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = 'Exercício - JavaScript';
}
changeH1()

function pUppercase(){
    let p = document.getElementsByTagName('p')[0];
    p.style.textTransform = 'uppercase';
}
pUppercase()

function consoleP(){
    console.log(document.getElementsByTagName('p'));
}
consoleP()