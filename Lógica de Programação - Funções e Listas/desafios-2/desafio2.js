/*
Crie uma função que calcule o valor do fatorial de um número 
passado como parâmetro.
*/

function calculaFatorial(numero){
  let resultado = 1;
  for (let i = 2; i <= numero; i++){
    resultado *= i;
  }
  return resultado;
}

console.log(calculaFatorial(4));