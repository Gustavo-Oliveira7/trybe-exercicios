const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

const elementP = document.createElement('p');
elementP.innerText = 'Algum texto qualquer';
elementSection.appendChild(elementP);

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionLeft);

const elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementMain.appendChild(elementSectionRight);

const image = document.createElement('img');
image.src = ('https://picsum.photos/200');
image.className = 'small-image';
elementSectionLeft.appendChild(image);

const elementUl = document.createElement('ul');
elementSectionRight.appendChild(elementUl);
const list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let num in list) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = list[num];
    elementUl.appendChild(elementLi);
}

for (let index = 1; index <= 3; index +=1){
    const elementH3 = document.createElement('h3');
    elementH3.innerText = 'h3 index: '+ index;
    elementMain.appendChild(elementH3);
}