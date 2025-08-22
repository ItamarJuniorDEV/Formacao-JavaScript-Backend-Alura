const pessoa = {
  nome: "Itamar",
  idade: 28,
  solteiro: true,
  hobbies: ['jogar bola', 'estudar', 'trabalhar'],
  endereco: {             
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP"
  }
};


function mostrarInfoPessoa(pessoa){
  console.log(`${pessoa.nome} (tipo: ${typeof pessoa.nome})`);
  console.log(`${pessoa.idade} (tipo: ${typeof pessoa.idade})`);
  console.log(`${pessoa.solteiro} (tipo: ${typeof pessoa.solteiro})`);
  console.log(`${pessoa.hobbies.join(', ')} (tipo: ${typeof pessoa.hobbies.join(', ')})`);
  console.log(`${JSON.stringify(pessoa.endereco)} (tipo: ${typeof pessoa.endereco})`);
}

mostrarInfoPessoa(pessoa);