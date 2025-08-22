const pessoa = {
  nome: "Itamar",
  idade: 28,
  solteiro: true,
  hobbies: ['jogar bola', 'estudar', 'trabalhar']
}

function mostrarInfoPessoa(pessoa){
  console.log(`${pessoa.nome} (tipo: ${typeof pessoa.nome})`);
  console.log(`${pessoa.idade} (tipo: ${typeof pessoa.idade})`);
  console.log(`${pessoa.solteiro} (tipo: ${typeof pessoa.solteiro})`);
  console.log(`${pessoa.hobbies.join(', ')} (tipo: ${typeof pessoa.hobbies.join(', ')})`);
}

mostrarInfoPessoa(pessoa);