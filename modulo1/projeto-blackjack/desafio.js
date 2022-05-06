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

  while (
    (cart1User === 'A' && cart2User === 'A') ||
    (cart1Pc === 'A' && cart2Pc === 'A')
  ) {
    cart1User = comprarCarta();
    cart2User = comprarCarta();
    cart1Pc = comprarCarta();
    cart2Pc = comprarCarta();
  }

  let pontUser = cart1User.valor + cart2User.valor;
  let pontPC = cart1Pc.valor + cart2Pc.valor;
  console.log(pontUser);
  if (pontUser > 21) {
    console.log('Sua mão estourou');
  } else if (pontPC > 21) {
    console.log('A máquina estourou');
  } else {
    while (pontUser <= 21) {
      let pontUserT = comprarCarta();
      pontUser = pontUser + pontUserT.valor;
      console.log(pontUserT.valor);

      console.log(pontUser);
      let a = confirm(
        `Suas cartas são: ${cart1User.texto} ${cart2User.texto}. A carta revelada do computador é: ${cart1Pc.texto}\n Deseja comprar mais uma carta?`,
      );
      if (a === false) {
        while (pontPC <= 21) {
          let pontPcT = comprarCarta();
          pontPC = pontPC + pontPcT.valor;
          console.log(pontPcTss.valor);
          console.log(pontPC);
          alert(
            `Suas cartas são: ${cart1User.texto} ${cart2User.texto}. A carta revelada do computador é: ${cart1Pc.texto}\n Deseja comprar mais uma carta?`,
          );
        }
      }
    }
  }
}

/*(pontUser > pontPC) {
    let a = confirm(
      `Suas cartas são: ${cart1User.texto} ${cart2User.texto}. A carta revelada do computador é: ${cart1Pc.texto}\n Deseja comprar mais uma carta?`,
    );
  } else if (pontPC > pontUser) {
    confirm(
      `Suas cartas são: ${cart1User.texto} ${cart2User.texto}. A carta revelada do computador é: ${cart1Pc.texto}\n Deseja comprar mais uma carta?`,
    );
  } else {
    console.log('O jogo terminou empatado');
  }
} else {
  console.log('O jogo acabou!');
}
*/
