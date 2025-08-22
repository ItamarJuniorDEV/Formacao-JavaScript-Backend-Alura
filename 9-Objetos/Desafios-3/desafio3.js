const carro = {
  marca: "Citroen",
  modelo: "C4",
  ano: 2023,
  cor: "preto",
  ligado: false,

  ligar: function(){
    if (this.ligado){
    console.log("O carro já está ligado");
  } else {
    this.ligado = true;
    console.log("O carro foi ligado");
  }
},

  desligar: function(){
    if(!this.ligado){
      console.log("O carro já está desligado!");
    } else {
      this.ligado = false;
      console.log("O carro foi desligado");
    }
  },

  obterDetalhes: function(){
    const estado = this.ligado ? "Ligado" : "Desligado";
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Estado: ${estado}`;
  }
}

carro.ligar();
carro.desligar();

console.log(carro.obterDetalhes());