// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let ordemArr = array.sort(function (a, b) {
    return a - b;
  });
  return ordemArr;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let nPares = (array) => {
    return array % 2 === 0;
  };
  return array.filter(nPares);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let nParEl = [];
  for (item of array) {
    if (item % 2 === 0) {
      nParEl.push(item ** 2);
    }
  }
  return nParEl;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if (num1 > num2) {
    let obData = {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num1 % num2 === 0,
      diferenca: num1 - num2,
    };
    return obData;
  } else if (num2 > num1) {
    let obData = {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1,
    };
    return obData;
  } else {
    let obData = {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1,
    };
    return obData;
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let nparr = [];
  for (let i = 0; i <= n + 1; i++) {
    if (i % 2 === 0) {
      nparr.push(i);
      nparr = nparr.slice(0, n);
    }
  }
  return nparr;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return `Equilátero`;
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    return `Isósceles`;
  } else if (ladoA !== ladoB && ladoB !== ladoA && ladoA !== ladoC) {
    return `Escaleno`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arraDup = [];
  let arrOrdemC = array.sort(function (a, b) {
    return a - b;
  });
  arraDup.push(arrOrdemC[1]);
  let arrOrdemD = arrOrdemC.reverse();
  arraDup.push(arrOrdemD[1]);
  console.log(arraDup.reverse());
  return arraDup;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pesAno = { ...pessoa, nome: 'ANÔNIMO' };
  return pesAno;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasA = [];
  for (item of pessoas) {
    if (item.altura >= 1.5 && item.idade > 14 && item.idade <= 60) {
      pessoasA.push(item);
    }
  }
  return pessoasA;
}

//XERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = [];
  for (item of pessoas) {
    if (item.altura < 1.5 || item.idade <= 14 || item.idade > 60) {
      pessoasNaoAutorizadas.push(item);
    }
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (item of contas) {
    let dividaTotal = 0;
    for (devedor of item.compras) {
      dividaTotal += devedor;
    }
    item.saldoTotal -= dividaTotal;
    item.compras = [];
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
