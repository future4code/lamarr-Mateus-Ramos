//QUESTÃO 1

/* A questão apresentada no problema 1 mostra que a primeira saída será 10. 
    Para console.log(a,b) a saída será 10,5*/
    
    //Programa analisado
    
   /* let a = 10
    let b =10 
    console.log(b)
    b = 10
    console.log(a,b)*/
    
/*Para o problema 2. A as saídas serão: 10,10,10 pois 
 as variáveis estão mudando a medida que computador 
 percorre o código*/

/*Para o problema 3. Minhas sugestões de nomes seriam: 
 horasTrabalhadas e valorDia */

 //QUESTÃO2

let pNome  =  null
let pIdade =  null

typeof nome
console.log(typeof pNome) 
console.log(typeof pIdade)
// O uso de null para criar um variável vazia indica que ele é um objeto pois eu não determinei o tipo. 
pNome  = prompt('Qual é o seu nome?')
pIdade = prompt('Qual é a sua idade?') 
console.log(typeof pNome)
console.log(typeof pIdade)
/*A partir do momento que inserir dados nas variáveis vazias elas passaram a se de um tipo especifico, neste caso 
os JS recebe as variáveis como strings.*/
console.log('Olá, '+pNome+ 'você tem: '+pIdade+ ' anos')

//QUESTÃO3
let cachorro     = prompt('Você tem cachorros? sim/não')
let escolaridade = prompt('Você tem nível superior? sim/não')
let gostoMusical = prompt('Você gosta de samba? sim/não')

let vcachorro = cachorro
let vescolaridade = escolaridade
let vGostoMusical = gostoMusical
console.log('Você tem cachorro? ' +vcachorro)
console.log('Você tem nível superior? '+vescolaridade)
console.log('Você gosta de samba? '+vGostoMusical)

//QUESTÃO 3

let aValor = 10
let bValor = 25
let cValor = null
cValor=bValor
bValor=aValor
aValor=cValor

console.log(aValor,bValor)
console.log('O novo valor de a é '+aValor)
console.log('O novo valor de b é: '+bValor)

//DESAFIO

let primeiroN = prompt('Digite um número')
let segundoN  = prompt('Digite outro número')

let pprimeiro = Number(primeiroN)
let ssegundo  = Number(segundoN)

let resultSoma =  pprimeiro+ssegundo
let resultMulti = pprimeiro*ssegundo

console.log("O primeiro número somado ao segundo número é: "+resultSoma)
console.log("O primeiro número multiplicado pelo segundo número é: "+resultMulti)

