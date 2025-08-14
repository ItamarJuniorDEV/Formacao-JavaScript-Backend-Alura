/*
coloca toda a função dentro de uma variável
Esse formato não aceita que a função seja chamada antes de cria-lá
Usamos quando queremos passar outra função como parâmetro
*/

const estudanteReprovou = function (notaFinal, faltas){
  if(notaFinal < 7 && faltas > 4){
    return true;
  } else {
    return false;
  }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10,2));