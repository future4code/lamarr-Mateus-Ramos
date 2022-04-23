//ATIVIDADE DE INTERPRETAÇÃO DE CÓDIGO
//QUESTÃO 1
//a)
/*Neste caso, o valor da variável é dada no console.Log. Sendo assim, o o primeiro retorno 
10 e a segunda saída será 50*/

//b)
/* Caso os console.log fossem retirados e substituídos somente por minhafuncao(2) e minhaFuncao(10)
o código não teria problema em rodar, entretanto o valores não apareceriam no console.*/
//QUESTÃO 2
//a)
/*O código recebe um texto digitado pelo usuário. A função tem o objetivo de colocar todo texto em minuscula e verificar se a palavra cenoura está inclusa. No fim, ele cria uma constante que recebe o texto do usuário com alterações e em seguida devolve a resposta no console  que será o texto do usuário seguido de um true ou false devido a verifição da existência da palavra cenoura*/
//b)
// i) eu gosto de cenoura true
// ii) cenoura é bom para vista true
/*iii)cenouras crescem na terra true (neste caso, precisei rodar o programa e entendi que o includes não diferencia singular de plural)*/
//ATIVIDADE DE ESCRITA DE CÓDIGO
//QUESTÃO 1:
function sobremMim() {
  let sobMim = 'Eu sou Mateus, tenho 29 anos e sou estudante';
  return sobMim;
}
console.log(sobremMim());

function aboutOther(names, age, city, prof) {
  return `Eu sou ${names}, tenho ${age} anos, moro em ${city} e sou ${prof}`;
}

console.log(aboutOther('Mateus', 29, 'Itapetinga', 'professor'));

//QUESTÃO 2
function soma(number1, number2) {
  return number1 + number2;
}
console.log(soma(45, 20));

function verification(number3, number4) {
  return number3 >= number4;
}
console.log(verification(7, 8));
function imparPar(number5) {
  let nPar = number5 % 2;
  return nPar == 0;
}
console.log(imparPar(8));

function modeString(string) {
  return `Em maíuscula: ${string.toUpperCase()} e o tamanho é: ${
    string.length
  }`;
}
console.log(modeString('Barril'));

let number0 = Number(prompt('Digite um número'));
let number1 = Number(prompt('Digite outro Número'));
console.log(`Os números inseridos são: ${number0} e ${number1}`);

const somm = function (number10, number11) {
  return `Soma: ${number10 + number11}`;
};
let resposta = somm(number0, number1);
console.log(resposta);

const dife = function (number10, number11) {
  return `A diferença é: ${number10 - number11}`;
};
resposta = dife(number0, number1);
console.log(resposta);

const multi = function (number10, number11) {
  return `Multiplicação: ${number10 * number11}`;
};
resposta = multi(number0, number1);
console.log(resposta);

const divs = function (number10, number11) {
  return `Divisão: ${number10 / number11}`;
};
resposta = divs(number0, number1);
console.log(resposta);

//DESAFIOS
