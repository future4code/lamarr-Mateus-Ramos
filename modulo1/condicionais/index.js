//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGOS
//QUESTÃO 1
//a)
/*Primeiro, o programa cria um constante que vai receber um número do usúario,
em seguida, ele cria outra constante e converte a entrada do usúario para um tipo
Number. Por fim, ele faz um teste usando condicionais. Neste cas oaso, se o resto da divisão
desse número por 2 for 0, o código vai retornar que número passou no teste, se não, ele retorna 
que o número não passou no no teste. Eu outras palavras, o código está testando se o número é 
par ou ímpar. */
//b)
// Somente números pares passarão no teste.
// Somente os números ímpares não passarão no teste.

//QUESTÃO2
//a)
/*O programa cria uma variável fruta que receberá a entrada do usuário e uma variável vazia chamada preço. No switch, o código vai verificar qual o valor que fruta recebeu e comparar 
com os case do switch. Quando ele encontrar o valor da variável fruta, ele vai retornar o seu nome e seu preço e em seguida parar o cógido. Logo, a saída será o nome da fruta e o seu preço.*/
//c)
/*Ao retirar o break o código vai retornar o valor do Default para Pêra, que no caso é R$5,00*/

//QUESTÃO3
//a)A primeira linha retornar a entrada do usuário convertida para um tipo Number
/*b)Para o número 10 a mensagem é: Esse número passou no teste. Se for -10 a saída será um erro
porque não existe uma condição para o caso do número ser menor que 0. O mesmo aconteceria para um número 0*/
/*c) No console será apresentado um erro retornando que 'mensagem' não está definida. Isso ocorre porque ela realmente não foi definida fora do escopo if e, além disso, não existe condições para numero < 0 ou mesmo numero =0. A solução para isso seria o uso do else.*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//QUESTÃO1

const idade = Number(prompt('Qual a sua idade?'));
if (idade >= 18) {
  console.log('VOCÊ PODE DIRIGIR!');
} else {
  console.log('VOCÊ NÃO PODE DIRIGIR');
}
//QUESTÃO2
const turno = prompt(
  'Digite o seu turno de aulas: M - para matutino, V - para vespertino e N para noturno',
);
if (turno === 'M') {
  console.log('BOM DIA!');
} else if (turno === 'V') {
  console.log('BOA TARDE!');
} else {
  console.log('BOA NOITE!');
}
//QUESTÃO3
const turno2 = prompt(
  'Digite o seu turno de aulas: M - para matutino, V - para vespertino e N para noturno',
);
switch (turno2) {
  case 'M':
    saudacao = 'BOM DIA!';
    break;
  case 'V':
    saudacao = 'BOA TARDE';
    break;
  case 'N':
    saudacao = 'BOA NOITE';
    break;
  default:
    saudacao = 'ESCOLHA UM TURNO';
}
console.log(saudacao);

//QUESTÃO4
const genero = prompt(
  'Qual o gênero do filme que pretende assistir com seu amigo?',
).toLocaleLowerCase();
const ingresso = Number(prompt('Qual o valor do ingresso?'));

if (genero == 'fantasia' && ingresso < 15) {
  console.log('BOM FILME!');
} else {
  console.log('Escolha outro filme');
}

//DESAFIOS
//Primeiro desafio

const genero2 = prompt(
  'Qual o gênero do filme que pretende assistir com seu amigo?',
).toLocaleLowerCase();
const ingresso2 = Number(prompt('Qual o valor do ingresso?'));
const lanche = prompt('Qual lanchinho você vai querer?');

if (genero2 == 'fantasia' && ingresso2 < 15) {
  console.log(`BOM FILME! Aproveite o seu/sua ${lanche}`);
} else {
  console.log('Escolha outro filme');
}
//segundoDesafio
const nameCli = prompt('Digite o seu nome completo');
const tJogo = prompt(
  'Qual o tipo de jogo? (Digite IN para interncaional e DO para doméstico)',
).toLocaleLowerCase();
const etJogo = prompt(
  'Digite a etapa do jogo: SF para semi-final; DT para decisão de terceiro lugar ou FI para final',
).toLowerCase();
const categoria = Number(
  prompt('Qual a categoria? (escolha entre 1, 2, 3 e 4)'),
);
const qingressos = Number(prompt('Digite a quantidade de ingressos.'));

let dolar = 4.1;
let valor;
let etapa;
let valorTot;
if (tjogo === 'do') {
  switch (tJogo) {
    case 'do':
      switch (etJogo) {
        case 'sf':
          switch (categoria) {
            case 1:
              valor = 1320;
              etapa = 'semifinal';
              valorTot = qingressos * valor;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
              );
              break;
            case 2:
              valor = 880;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
              );
              break;
            case 3:
              valor = 550;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
              );
              break;
            case 4:
              valor = 220;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
              );
            //CASE dt
            case 'dt':
              switch (categoria) {
                case 1:
                  valor = 660;
                  etapa = 'Decisão do 3º lugar';
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                  );
                  break;
                case 2:
                  valor = 440;
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                  );
                  break;
                case 3:
                  valor = 330;
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                  );
                  break;
                case 4:
                  valor = 170;

                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                  );

                //CASE fL
                case 'fl':
                  switch (categoria) {
                    case 1:
                      valor = 1980;
                      etapa = 'Final';
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                      );
                      break;
                    case 2:
                      valor = 1320;
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                      );
                      break;
                    case 3:
                      valor = 880;
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                      );
                      break;
                    case 4:
                      valor = 330;

                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: ${valor}\n valor total R$ ${valorTot}`,
                      );
                  }
              }
          }
      }
  }
} else {
  switch (tJogo) {
    case 'in':
      switch (etJogo) {
        case 'sf':
          switch (categoria) {
            case 1:
              valor = 1320 * dolar;
              etapa = 'semifinal';
              valorTot = qingressos * valor * dolar;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
              );
              break;
            case 2:
              valor = 880;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
              );
              break;
            case 3:
              valor = 550;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
              );
              break;
            case 4:
              valor = 220;
              console.log(
                `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
              );
            //CASE dt
            case 'dt':
              switch (categoria) {
                case 1:
                  valor = 660;
                  etapa = 'Decisão do 3º lugar';
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                  );
                  break;
                case 2:
                  valor = 440;
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: U$${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                  );
                  break;
                case 3:
                  valor = 330;
                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                  );
                  break;
                case 4:
                  valor = 170;

                  console.log(
                    `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                  );

                //CASE fL
                case 'fl':
                  switch (categoria) {
                    case 1:
                      valor = 1980;
                      etapa = 'Final';
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                      );
                      break;
                    case 2:
                      valor = 1320;
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                      );
                      break;
                    case 3:
                      valor = 880;
                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                      );
                      break;
                    case 4:
                      valor = 330;

                      console.log(
                        `---Dados da compra--- \n Nome do cliente: ${nameCli} \n Tipo do Jogo: Nacional \n Etapa do jogo: ${etapa} \n categoria: ${categoria} \n quantidade de ingressos: ${qingressos}\n ----Valores---\n Valor do ingresso: U$$ ${valor}\n valor total U$$ ${valorTot}`,
                      );
                  }
              }
          }
      }
  }
}
