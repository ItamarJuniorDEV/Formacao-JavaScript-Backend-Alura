/* 
Verifique se um número digitado pelo usuário é positivo ou negativo.
Mostre um alerta informando.
*/

let condicao = Number(prompt("Digite um número"));

if(condicao >= 0) {
  alert("O número é positivo");
} else {
  alert("O número é negativo");
}