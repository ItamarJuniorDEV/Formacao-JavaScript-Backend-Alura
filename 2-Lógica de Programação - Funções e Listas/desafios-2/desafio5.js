/*
Crie uma função que mostre na tela a área e o perímetro de uma sala circular,
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
*/

function calcularSala(raio){
  let pi = 3.14;
  let area = pi * (raio * raio).toFixed(2);
  let perimetro = 2 * pi * raio.toFixed(2);

  console.log(`A area é ${area} e o perimetro é ${perimetro}`);
}

calcularSala(8);