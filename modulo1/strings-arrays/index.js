//QUESTÕES DE INTERPRETAÇÃO

//Questão 1 ##ANALISANDO O CÓDIGO POR COMPLETO####

//Primeira saída: variável array não definida.
//segunda saída: b,null (aqui a variável 'array' não é, necessariamente uma 'array')
//terceira saída: c, 11 - tamanho da array
//quarta saída: d, 3 - como i=0 ele vai selecionar o primeiro elemento da array declarada anteriormente.
//Quinta saída: ele vai trocar o valor na posição 1 por 19. Neste caso, onde antes era 4 agora será 19
//sexta saída: f, 9. Pois este é o valor que se encontra na posição i+6

//Questão 2
/*Na questão 2 de intepretação o console.log apresenta os seguintes comando: escrever tudo em maísculo, trocar o A pelo I e
no final mostrar o 'tamanho' da string. Sendo assim, a saída será: 
SUBI NUM ÔNIBUS EM MIRROCOS, 27*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
const name = prompt('Digite o seu nome');
const email = prompt('Digite o seu e-mail');
let saudacoes = `O e-mail ${email} foi cadastrado com sucesso. Seja bem vindes, ${name}`;
console.log(saudacoes);

let arrayComidas = ['feijoada', 'macarronada', 'lasanha', 'açaí', 'pizza'];
console.log(arrayComidas);
console.log('Essas são minhas comidas preferidas');
console.log(arrayComidas[0]);
console.log(arrayComidas[1]);
console.log(arrayComidas[2]);
console.log(arrayComidas[3]);
console.log(arrayComidas[4]);

let userFood = prompt('Qual a sua comida favorita?');
arrayComidas[1] = userFood;
console.log(arrayComidas);

let listaDeTarefas = [];
let primeiraTarefa = prompt('Qual a primeira tarefa do dia?');
let segundaTarefa = prompt('Qual a segunda tarefa do dia?');
let terceiraTarefa = prompt('Qual a terceira tarefa do dia?');

//listaDeTarefas = [primeiraTarefa,segundaTarefa,terceiraTarefa]
listaDeTarefas.push(primeiraTarefa);
listaDeTarefas.push(segundaTarefa);
listaDeTarefas.push(terceiraTarefa);
console.log(listaDeTarefas);

let tarefasRealizadas = prompt('Escolha UM número de 1 até 3');
listaDeTarefas.splice(tarefasRealizadas - 1, 1);
console.log(listaDeTarefas);

//DESAFIOS
//Primeiro Desafio
let frase = prompt('Para você  o que significa Carpie Diem?');
let array2 = frase.split(' ');
console.log(array2);

//segundo desafio
let array = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa'];
let indAbacaxi = array.indexOf('Abacaxi');
console.log(
  `A posição da palavra Abacaxi é: ${indAbacaxi} e a matriz tem tamanho ${array.length}`,
);
