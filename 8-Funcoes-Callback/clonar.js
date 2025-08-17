/*
O spread operator é usado para clonar um array e quando mudar um array, não alterar o outro
*/
const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

// spread operator (...)
//novaListaNotas.push(10);


// let nota = 9.75;
// let novaNota = nota;
// nota = 10;

console.log(notas);
console.log(novaListaNotas);

