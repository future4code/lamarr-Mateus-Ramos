//EXERCICIOS FUNÇÕES ARRAYS
//EXERCICIOS DE INTERPRETAÇÃO
//QUESTÃO 1
//a)A saída será o item, o index e a própria array. Ao rodar o código, percebi que ele vai além e mostra o item, index e a array para cada item.

//Questão 2
//a)
//A nova array vai conter apenas os nomes da array original.

//Questão 3
//a)
//A função com filter vai filtrar a array original e retornar apenas itens que tiverem apelidos diferentes de Chijo

//QUESTÕES DE ESCRITA DE CÓDIGO
//Questão 1

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' },
];

//a)
const apenasNomes = pets.map((valorAtual, inidice, array) => {
  return valorAtual.nome;
});
console.log(apenasNomes);

//b)
const apenasRaca = pets.filter((item, index, array) => {
  return item.raca === 'Salsicha';
});
console.log(apenasRaca);
//c)

const racaDesconto = pets.map((item, indicie, array) => {
  if (item.raca === 'Poodle') {
    console.log(
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`,
    );
  }
});

//Questão 2
const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
];

//a)
const ApenasNomesMercado = produtos.map((item, index, array) => {
  return item.nome;
});
console.log(ApenasNomesMercado);

//b)
const itemDesconto = produtos.map((item, index, arrray) => {
  item.nome;
  let valor1 = item.preco * 5;
  let valor2 = valor1 / 100;
  let valorDesconto = item.preco - valor2;
  valorDesconto = valorDesconto.toFixed(2);
  return `nome: ${item.nome}  preço: ${valorDesconto}`;
});

console.log(itemDesconto);
//c)
const apenasBebidas = produtos.filter((item, indez, array) => {
  return item.categoria === 'Bebidas';
});
console.log(apenasBebidas);

//d)
const apenasYpe = produtos.filter((item, index, array) => {
  if (item.nome.includes('Ypê')) {
    return item.nome;
  }
});
console.log(apenasYpe);

//e)

const apenas = produtos
  .filter((item, index, array) => {
    return item.nome.includes('Ypê');
  })
  .map((item) => {
    return ` Compre ${item.nome} por ${item.preco}`;
  });
console.log(apenas);

//DESAFIOS
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama' },
  { nome: 'Bellsprout', tipo: 'grama' },
  { nome: 'Charmander', tipo: 'fogo' },
  { nome: 'Vulpix', tipo: 'fogo' },
  { nome: 'Squirtle', tipo: 'água' },
  { nome: 'Psyduck', tipo: 'água' },
];

//a)
let arrayNames = [];
const nameOrdem = pokemons.map((valor) => {
  return arrayNames.push(valor.nome);
});
arrayNames = arrayNames.sort();
console.log(arrayNames);

//b)
let tiposArry = [];
const tiposArray = pokemons.map((valor) => {
  return tiposArry.push(valor.tipo);
});

const novatiposArry = tiposArry.filter((este, i) => {
  return tiposArry.indexOf(este) === i;
});
console.log(novatiposArry);
