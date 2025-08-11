/*
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

function calcularTabuada(numero){
  for (let i = 1; i <=10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

calcularTabuada(6);