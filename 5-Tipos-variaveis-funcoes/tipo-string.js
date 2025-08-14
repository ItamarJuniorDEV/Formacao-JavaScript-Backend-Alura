/*
Funções prontas para alterações de string (mais usadas):
toLowerCase() / toUpperCase(): tudo maiúsculo ou minúsculo
includes("JavaScript"): Verifica se tem texto dentro de outro texto
replace("String antiga","String atual"): substitui parte de uma string
split(lista.split(",")): transforma a string em array
trim(): remove espaços extras no começo e fim
*/

const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log(`A estudante se chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);