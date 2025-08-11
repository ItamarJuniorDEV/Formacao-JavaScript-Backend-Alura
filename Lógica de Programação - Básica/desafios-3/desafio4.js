/*
Crie um programa de contagem progressiva. 
Peça um número e conte de 0 até esse número, 
usando um loop while no console do navegador.
*/

numero = Number(prompt("Digite um número"));
let contador = 0;

while(contador <= numero){
  alert(contador);
  contador++;
}