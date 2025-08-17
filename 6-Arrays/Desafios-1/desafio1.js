function receberArrays(lista1, lista2){
  let dadosJuntos = lista1.concat(lista2);
  console.log(dadosJuntos);
}

let jogadores = ['jogador1', 'jogador2', 'jogador3'];
let correu = [true, false, true];

receberArrays(jogadores, correu);