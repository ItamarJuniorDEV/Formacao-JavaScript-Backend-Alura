/*
Para converter Objeto para JSON,vedemos fazer assim:
const variavel = JSON.stringify(estudante);
*/
// import estudante from './estudante.json';
const estudante = require('./estudante.json')

// console.log(estudante);
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);

