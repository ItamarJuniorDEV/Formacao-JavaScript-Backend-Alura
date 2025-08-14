/*
false: o próprio valor booleano falso
0: número zero
-0: zero negativo (raro, mas existe)
" ": string vazia
null: ausência de valor
undefined: não definido
NaN: “Not a Number”

null + typeof = object
*/


// undefined, pois foi declada sem valor
let nomeEstudante;
console.log(nomeEstudante);
console.log(typeof nomeEstudante);

// null, quando tem o campo mas não tem o valor
let telefoneEstudante = null;
// retorna 3
console.log(telefoneEstudante + 3);
// retorna NaN (soma de valor indefinido)
console.log(nomeEstudante + 3);