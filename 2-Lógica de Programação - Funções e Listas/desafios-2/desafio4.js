/*
Crie uma função que mostre na tela a área e o 
perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.
*/

function calcularSala(altura, largura){
  let area = altura * largura;
  let perimetro = (altura + largura) * 2;

  console.log(`A area é ${area} e o perímetro ${perimetro}`);
}

calcularSala(5, 7);
