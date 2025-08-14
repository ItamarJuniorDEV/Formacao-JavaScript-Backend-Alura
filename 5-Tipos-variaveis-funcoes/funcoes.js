/*
Parâmetros: pode receber de 0 até vários
Retorno: usada quando queremos guardar e processar dados
Esse formato aceita que a função seja chamada antes de cria-lá
Usar esse formato deixa a função disponível em qualquer lugar do código
*/

function exibirInfosEstudante(nome, nota){
  return (`O nome é ${nome} e a nota ${nota}`);
}

console.log(exibirInfosEstudante('Itamar', 10));
console.log(exibirInfosEstudante('Ana', 7));

// hoisting: só pode ser chamada depois que for lida

