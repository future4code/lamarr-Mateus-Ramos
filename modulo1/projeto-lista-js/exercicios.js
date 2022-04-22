// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alt = Number(prompt('Digite a altura do retangulo'));
  let lar = Number(prompt('Digite a largura do retangulo'));
  let result = alt * lar;
  console.log(result);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual'));
  let anoNascimento = Number(prompt('Digite o ano do seu nascimento'));
  idade = anoAtual - anoNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let name = prompt('Qual é o seu nome?');
  let idade = prompt('Digite a sua idade');
  let email = prompt('Digite o seu e-mail');
  console.log(
    'Meu nome é ' +
      name +
      ', tenho ' +
      idade +
      ' anos, e o meu email é ' +
      email +
      '.',
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let mvazia = [];
  let core1 = prompt('Digite a sua primeira cor favorita');
  let core2 = prompt('Digite a sua segunda cor favorita');
  let core3 = prompt('Digite a sua terceira cor favorita');
  mvazia = [core1, core2, core3];
  console.log(mvazia);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
  console.log(string.toUpperCase);
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let m1 = string1.length;
  let m2 = string2.length;
  let resul = m1 == m2;
  return resul;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let number1 = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = number1;

  return array;
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aquir
  let m1 = string1.toUpperCase();
  let m2 = string2.toUpperCase();
  return m1 == m2;

  //return string1.toUpperCase().length === string1.toUpperCase(), length;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Qual o ano atual?'));
  let anoNascimento = Number(prompt('Qual o seu ano de nascimento?'));
  let anoEmissao = Number(prompt('Qual o ano de emissão da sua carteira?'));

  let vidade = anoAtual - anoNascimento;
  let vemissao = anoAtual - anoEmissao;

  let renoJovem = vidade <= 20 && vemissao <= 5;
  let renoAdulto = vidade > 20 && vidade < 50 && vemissao >= 10;
  //let renoIdoso = (anoAtual-anoNascimento>50 && anoAtual-anoAtual>=15)

  console.log(renoJovem);
  console.log(renoAdulto);
  // console.log(renoIdoso)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
