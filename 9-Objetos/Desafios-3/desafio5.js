const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false, 
};

const carroNovo = {
  marca: "Chevrolet",
  modelo: "Zafira",
  ano: 2006,
  cor: "cinza",  
}

const carroMaisNovo = { ...carro, ...carroNovo };
console.log(carroMaisNovo);

carroMaisNovo.modelo = "Blazer";

console.log("\nCarro com Detalhes Modificados");
console.log(carroMaisNovo);