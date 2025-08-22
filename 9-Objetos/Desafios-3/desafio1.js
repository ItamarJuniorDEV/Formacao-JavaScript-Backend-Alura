const pessoa = {
  nome: "Julimar",
  notas: [7, 9, 5.5, 8.5],
  calcularMediaNotas: function(){
    let soma = 0;
    for (let nota of this.notas){
      soma += nota;
    }
    return soma / this.notas.length;
  },
  classificarDesempenho: function(){
    const media = this.calcularMediaNotas();
    if(media >= 9){
      return "Desempenho Excelente!";
    } else if (media >= 7.6 && media <= 8.9) {
      return "Bom desempenho!";
    } else if (media >= 6 && media <= 7.5){
      return "Desempenho regular!";
    } else {
      return "Desempenho insuficiente!";
    }
  }
}

console.log(pessoa.calcularMediaNotas());
console.log(pessoa.classificarDesempenho());