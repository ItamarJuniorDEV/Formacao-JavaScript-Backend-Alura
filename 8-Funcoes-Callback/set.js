/*
O Set é usado para remover elementos repetidos e retorna objeto
*/
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];
console.log(listaNomesAtualizados);