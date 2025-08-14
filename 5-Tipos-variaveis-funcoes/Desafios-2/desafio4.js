/*
Crie uma variável numérica e uma string. 
Faça a conversão da variável numérica para string 
e da string para número. Exiba os tipos de dados resultantes no console.
*/

let numero = 10;
let palavra = 'string';

let numericaPraString = numero.toString();
let stringPraNumerica = Number(palavra);

console.log(typeof numericaPraString);
console.log(typeof stringPraNumerica);