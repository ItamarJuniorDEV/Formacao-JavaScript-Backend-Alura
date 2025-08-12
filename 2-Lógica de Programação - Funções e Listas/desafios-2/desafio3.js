/*
Crie uma função que converte um valor em dólar, passado como parâmetro, 
e retorna o valor equivalente em reais. 
Para isso, considere a cotação do dólar igual a R$4,80.
*/

function convertePraReal(valor){
  let dolar = 4.80;
  let reais = dolar * valor;
  return reais.toFixed(2);
}

console.log(convertePraReal(100));
