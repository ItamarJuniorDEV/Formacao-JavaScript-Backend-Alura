const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false, 
    placa: "ABC1234", 
};

// Torna a propriedade "placa" enumerável
Object.defineProperty(carro, "placa", { enumerable: false});

console.log("Propriedades Enumeráveis do Carro:");
// Percorre apenas propriedades enumeráveis 
for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Retorna somente as propriedades enumeráveis
const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);
