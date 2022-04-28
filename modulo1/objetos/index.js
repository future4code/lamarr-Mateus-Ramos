//QUESTÕES DE INTEPRETAÇÃO
//QUESTÃO 1
//a)
/*O código apresenta um objeto com informações sobre um determinado filme e seu horário e canal
de exibição. Ao final, os console.log irão imprimir: Matheus Nachtergaele,Virgina Cavendish
Globo 14:00hs */

//QUESTÃO 2
//a)
/* Neste caso, o console terá as seguintes saídas:
Juca, 3, srd
Juba, 3, srd
Jubo, 3, srd/
*/
//b)
/*A sintaxe dos três pontos permite chamar e editar
elementos do objeto */

//QUESTÃO3
//a)
/*O primeiro console.log irá apresentar o seguinte:
false por que ele retornou o boleano do objeto para backender. A Segunda irá retornar undefined por que 'altura' não foi definido*/

//QUESTÕES DE ESCRITA
//QUESTÃO1 A)
const nomeApe = {
  nome: 'Mateus',
  apelidos: ['Teu', 'Tróia', 'Cabeça'],
};
function nameNick(nomeApe) {
  return `O meu nome é  ${nomeApe.nome}, mas pode me chamar de ${nomeApe.apelidos[0]}, ${nomeApe.apelidos[1]} ou ${nomeApe.apelidos[2]}.`;
}
//QUESTÃO1 B)
console.log(nameNick(nomeApe));
const newApeli = { ...nomeApe, apelidos: ['fumaça', 'arroz', 'Teco'] };
console.log(newApeli);

//QUESTÃO 2 a)
const ob1 = {
  nome: 'João',
  idade: 25,
  profissao: 'Marceneiro',
};

const ob2 = {
  nome: 'Pedro',
  idade: 45,
  profissao: 'Vendedor',
};

function retorno(ob1, ob2) {
  let dd1 = [
    ob1.nome,
    ob1.nome.length,
    ob1.idade,
    ob1.profissao,
    ob1.profissao.length,
  ];
  let dd2 = [
    ob2.nome,
    ob2.nome.length,
    ob2.idade,
    ob2.profissao,
    ob2.profissao.length,
  ];

  return [dd1, dd2];
  //let dd1 = { ...ob1 };
  //return [ob1, ob2];
}
console.log(retorno(ob1, ob2));

let carrinho = [];

const maca = {
  nome: 'Maçã',
  disp: true,
};
const melan = {
  nome: 'Melancia',
  disp: true,
};

const abac = {
  nome: 'Abacaxi',
  disp: true,
};

function carr(maca, melan, abac) {
  return [maca, melan, abac];
}
carrinho.push(carr(maca, melan, abac));
console.log(carrinho);

//DESAFIOS
//DESAFIO1
let nnome = prompt('Qual o seu nome?');
let iidade = Number(prompt('Qual a sua idade?'));
let pprofissao = prompt('Qual a sua profissão?');

const guarD = {
  nome: nnome,
  idade: iidade,
  profissao: pprofissao,
};
function dadosUser(guarD) {
  return [guarD];
}
console.log(dadosUser(guarD));
typeof guarD;

//DESAFIO2
const filme2 = {
  nome: 'Batman',
  ano: 2022,
};

const filme3 = {
  nome: 'Matrix',
  ano: 2000,
};
function dds(filme2, filme3) {
  const ret = filme2.ano <= filme3.ano;
  return ret;
}
const ress = dds(dds);
console.log(`${filme2.nome} foi lançado antes de ${filme3.nome}? ${ress}`);
console.log(
  `${filme2.nome} foi lançado no mesmo anor de ${filme3.nome}? ${ress}`,
);
