/*
Ao fazer uma operação de float e string, devemos adicionar Number.parseInt(valor)
'5' != 5;
Para conver

NaN = retorno mal formatado (operação com números e caracteres)
*/

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('a média é ' + total.toFixed(2));

