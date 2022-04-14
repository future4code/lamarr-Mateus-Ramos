//EXERCICIO DE INTERPRETAÇÃO
//QUESTÃO 1

/*A constantes foram definas com valores boleanos
sendo assim: a primeira mensagem é: a. false. A segunda 
mensagem é: b. false
A terceira mensagem será: c. true
por fim, a quarta mensagem será: d. boolean*/

//QUESTÃO 2
/*Quando ele usa o prompt para entrada de dados por um usuário, o java recebe 
 um string. Neste caso ele quer usar uma função soma, para isso, os seus valores
 de entrada devem ser um NUMBER. Logo, o que ocorre quando ele roda o código sem 
 converter os valore de entrada para Number é uma concatenação. O promgrama não 
 soma os valores de entrada. Ele apenas concatena. Por exemplo, para este programa, 
 se as variáveis forem 1 e 2, o resultado da 'soma' será 12 */
//QUESTÃO 3
/*A minha sugestão é a criação de mais duas variáveis, onde ele vai guardar o valor 
 recebido na primeira variável, porém, neste caso, ele deverá converter o valor para 
 uma Number. Ex: A variável nPrimeiroNumero = Number(primeiroNumero)*/


//ATIVIDADE  ESCRITA DE CÓDIGO
//Exercicio 1 

let idadeUser = prompt('Digite a sua idade')
let idadeBest = prompt('Digite a idade d@ seu/sua melhor amig@')
let didade    = idadeUser > idadeBest
let dfidade   = idadeUser - idadeBest
console.log("Sua idade é maior que a do seu melhor amigo? "+didade)
console.log(dfidade)

//Exercicio 2
let npar  = prompt('Por favor, nsira um número par!')
let nnpar = Number(npar)
let renu  = nnpar%2
console.log("O resto da divisão é: "+renu)
/*O padrão observado é que o resto sempre vai ser dois. Inclusive é uma dos formas 
de se definir um número par. Se o resto da divisão por 2 for 0, logo esse número é 
par*/
/*No caso de um número ímpar, o resultado será diferente de 0. */

//Exercicio 3
let idadeUs    = prompt('digite a sua idade!')
let nIdadeUs   = Number(idadeUs)
let idadeMeses = nIdadeUs*12
let idadeDias  = nIdadeUs*365
let idadeHoras = nIdadeUs*8760

console.log('A sua idade em meses é: '+idadeMeses)
console.log('A sua idade em dias é: '+idadeDias)
console.log('A sua idade em horas é: '+idadeHoras)

//Exercicio 3
let pnumero = prompt('Digite um número: ')
let snumero = prompt('Digite um número: ')

let veri1 = pnumero > snumero
let veri2 = pnumero == snumero
let veri3 = (pnumero%snumero == 0)
let veri4 = (snumero%pnumero == 0)

console.log('O primeiro número é maior que o segundo? '+veri1 )
console.log('O primeiro número é igual ao segundo? '+veri2)
console.log('O primeiro número é divisível pelo segundo?'+veri3)
console.log('O segundo número é divisível pelo primeiro?'+veri4)

//DESAFIO
//PrimeiroDesafio
let temp = 77
kelvin = ((temp-32)*(5/9))+273.15
console.log('O valor da temperatura em Kelvin é: '+kelvin+ 'ºK')
temp=80
fahrenheit = ((temp)*(9/5))+32
console.log('O valor da temperatura em celcius é: '+fahrenheit+ 'ºF')
temp = 30
kelvin = ((temp-32)*(5/9))+273.15
fahrenheit = ((temp)*(9/5))+32
console.log('O valor da temperatura em Kelvin é: '+kelvin+ ' Em fahrenheit: '+fahrenheit)


let vTemperatura  = prompt('Insira o valor em graus celsius para conversão')
let nVTemperatura = Number(vTemperatura)
fahrenheit = ((nVTemperatura)*(9/5))+32
kelvin = ((fahrenheit-32)*(5/9))+273.15

console.log('O valor da temperatura em Kelvin é: '+kelvin+ ' Em fahrenheit: '+fahrenheit)

//Desafio 2 
const quiloWattHora = 0.05
const wattConsumido  = 280
const valorConta    = quiloWattHora*wattConsumido
contaDesconto = ((valorConta*15)/100)
valorContaDesconto = valorConta-contaDesconto
console.log('O valor a ser pago sem descondto será: '+valorConta)
console.log('O valor a ser pago com desconto será: '+valorContaDesconto)

//Desafio 3
//Para esse problema, é importante saber a relaçõ que existe entre as unidades. 
//Dessa forma, será possível fazer o programa rapidamente. 
//A relação entre libra(lb) e quilograma (kg) é: 1lb = 0.453592 kg
//a)
const valorLibra = 20
valorConvertidoKg = valorLibra*0.453592
console.log('20lb equivalem a '+valorConvertidoKg+' kg')
//b)
//A relação entre onça (oz) e quilograma (kg) é: 1oz = 0.0283495kg
const valorOnca     = 10.5
valorConvertidoOnKg = valorOnca*0.0283495
console.log('10.5oz equivalem a '+valorConvertidoOnKg+' kg')
//c)
//A relação entre milha e metro é: 1 mi=  1609.34m
const valorMi = 100
valorConvertidoMiM = valorMi*1609.34
console.log('100mi equivalem a '+valorConvertidoMiM+' mi')
//d)
//A relação entre pés e metros é dada por: 1pé=0,3048
const valorPe = 50
valorConvertidoPeM = valorPe*0.3048
console.log('50 ft equivalem a '+valorConvertidoPeM+' m')
//e)
//A relação entre xícara e litros é: 1xc = 0.24l
const valorXic = 450
valorConvertidoXL = valorXic*0.24
console.log('450 xic equivalem a '+valorConvertidoXL+' l')
//f)
//Para letra f, irei escolher a conversão de libras para kg. 
let valorEntradaLb = prompt('Digite o valor da sua medida em libras')
let fatorConversao = 0.453592
valorEmKg = valorEntradaLb*fatorConversao
console.log('O valor '+valorEntradaLb+ 'lb em quilogramas é '+valorEmKg+' kg')
