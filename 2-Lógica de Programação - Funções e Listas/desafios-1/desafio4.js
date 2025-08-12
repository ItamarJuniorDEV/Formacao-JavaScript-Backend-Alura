/*
Criar uma função que recebe três números como parâmetros 
e retorna a média deles.
*/

function calcularMedia(num1, num2, num3){
  let media = (num1 + num2 + num3) / 3;
  return media;
}

console.log(calcularMedia(8, 7.5, 9));