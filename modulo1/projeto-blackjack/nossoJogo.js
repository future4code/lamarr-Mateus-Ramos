/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Boas vindas ao jogo BlackJack');
let iniciarJogo = confirm('Quer iniciar uma nova rodada?');
let cart1User = comprarCarta();
let cart2User = comprarCarta();
let cart1Pc = comprarCarta();
let cart2Pc = comprarCarta();

if (iniciarJogo === true) {
  console.log('LETS GO!');
  let pontUser = cart1User.valor + cart2User.valor;
  let pontPC = cart1Pc.valor + cart2Pc.valor;
  console.log(pontPC, pontUser);
  if (pontUser > 21) {
    console.log('Sua mão estourou');
  } else if (pontPC > 21) {
    console.log('A máquina estourou');
  } else if (pontUser > pontPC) {
    console.log(
      `Usuário - cartas: ${cart1User.texto} ${cart2User.texto} - pontuação ${pontUser}\n Computador - carta: ${cart1Pc.texto} ${cart2Pc.texto} pontuação ${pontPC}\n
      O Usuário ganhou!`,
    );
  } else if (pontPC > pontUser) {
    console.log(
      `Usuário - cartas: ${cart1User.texto} ${cart2User.texto} - pontuação ${pontUser}\n Computador - carta: ${cart1Pc.texto} ${cart2Pc.texto} pontuação ${pontPC}\n A máquina venceu!`,
    );
  } else {
    console.log('O jogo terminou empatado');
  }
}
