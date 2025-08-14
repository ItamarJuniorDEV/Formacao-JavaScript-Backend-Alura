/*
Função encurtada usada quando queremos criar e já retornar com uma operação
*/

const estudanteReprovou = (notaFinal, faltas) => {
  if(notaFinal < 7 && faltas > 4){
    return true;
  } else {
    return false;
  }
}

// Esse formato é muito usado para usar funções dentro de funções
const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10,2));
console.log(exibeNome('Itamar'));