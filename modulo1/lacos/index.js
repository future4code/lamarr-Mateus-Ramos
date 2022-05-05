//EXERCÍCIOS DE INTERPRETAÇÃO
//QUESTÃO 1
//Inicialmente o código cria a variável valor. Antes do loop começar seu valor é definido por i=0. Dentro do for, além do i, é definida a condição para o Loop, neste caso, ele vai ocorrer enquanto i for menor que 5. Neste caso, se essa condição devolver um true, o loop vai continuar. Em seguida, o i++ incrementa o valor cada que que o loop é executado. Por fim, no console.log, ele retornar o valor final de 'valor' após o loop, que neste caso será 10.

//QUESTÃO 2
//a)
//A lógica do código indica que a saída será um conjunto com todos os números maiores que 18.
//b) Sim é possível. Para isso, basta usar o array.length no código (ver aula).
//QUESTÃO
//O código pede ao usuário um valor de entrada constante e cria uma variável igual vazia. Em seguida ele cria um laço com while que tem como condição o fato de que enquanto a quantidadeTotal (entrada do usuário) for menor que quantidadeAtual (variável do código), ele vai criar uma linha com uma string vazia. Em seguida, o laço for cria uma variável asterisco igual a 0 com a condição de que enquanto asteriscos for menor que quantidadeAtual +1, asteriscos vai incrementar 1. Por fim, a variável linha é chamada novamente e preenchida com asteriscos. Dessa forma, a saída do programa será o número selecionado pelo usuário convertido em asteriscos de forma crescente.

//QUESTÕES DE EXERCÍCIOS DE ESCRITA DE CÓDIGO
//QUESTÃO1

let quantiBichinhos = Number(
  prompt('Quantos bichinhos de estimação você tem?'),
);
let arrayNamesB = [];
if (quantiBichinhos === 0) {
  console.log('Que pena! Você pode adotar um pet!');
} else {
  for (let i = 0; i <= quantiBichinhos - 1; i++) {
    const nameUserBichos = prompt('Digite o nome do de um bichino: ');
    arrayNamesB.push(nameUserBichos);
  }
}
console.log(arrayNamesB);
//QUESTÃO2
//a)
let arrayOriginal = [3, 5, 10, 45, 66, 89, 50];
let arrayCopy = 0;

const inArr = (arrayOr) => {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]);
  }
};
console.log(inArr(arrayOriginal));
//b)
const arrayDivisao = (array) => {
  for (numero of arrayOriginal) {
    console.log(numero / 10);
  }
};
console.log(arrayDivisao(arrayOriginal));
//c)
const arPar = (array) => {};
let arrayPar = [];
let nArray = arrayOriginal.length;

const arrayParr = (array) => {};
for (let i = 0; i < nArray; i++) {
  if (arrayOriginal[i] % 2 === 0) {
    arrayPar.push(arrayOriginal[i]);
  }
}
console.log(arrayPar);

//d)
const arrayIndex = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    indice = array.indexOf();
    console.log(`O elemento do index ${indice} é ${array[i]}`);
  }
};
console.log(arrayIndex(arrayOriginal));

//e)
const maiorEMenor = (array) => {
  for (number of array) {
    console.log(
      ` O maior número é ${Math.max(array)} e o menor número é ${Math.min(
        array,
      )}`,
    );
  }
};
console.log(maiorEMenor(arrayOriginal));

//DESAFIOS
