const calculadora = {
  soma(a,b){
    return a + b;
  },

  subtracao(a,b){
    return a - b;
  },

  multiplicacao(a,b){
    return a * b;
  },

  divisao(a,b){
    if(b === 0){
    return "Erro: divisão por zero não é permitida";
  }

  return a / b;
  },

  calcularMedia(numeros){
    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
      soma += numeros[i];
    }
    let mediaAritmetica = soma / numeros.length;
    return mediaAritmetica;
  }
}
  console.log(calculadora.soma(5, 6));
  console.log(calculadora.subtracao(9, 6));
  console.log(calculadora.multiplicacao(3, 6));
  console.log(calculadora.divisao(18, 6));
  console.log(calculadora.calcularMedia([5, 7, 9, 10, 4]));

