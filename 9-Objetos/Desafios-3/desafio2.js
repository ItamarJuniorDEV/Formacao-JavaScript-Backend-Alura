const carro = {
  marca: "Citroen",
  modelo: "C4",
  ano: 2023,
  cor: "preto",
  portas: 4,
  tetoSolar: false 
}

for(let chave in carro){
  console.log(`O nome da propriedade é ${chave} e do seu valor é ${carro[chave]}`);
}

