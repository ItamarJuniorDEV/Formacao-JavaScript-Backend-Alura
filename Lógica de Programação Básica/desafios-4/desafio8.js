/*
Crie uma variável "numero" e peça um valor com prompt 
verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem.
*/

let numero = Number(prompt("Digite um número"));

if(numero >= 0) {
  console.log(`O número ${numero} é positivo`)
} else {
  console.log(`O número ${numero} é negativo`);
}