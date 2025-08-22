const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones:['5511999999998','5511999999993'],
  endereco: [{
    rua: 'Rua Tabatiano',
    numero: '120',
    complemento: 'apto 20'
  }]
}

estudante.endereco.push({
    rua: 'Rua imembui',
    numero: '83',
    complemento: null
})

// console.log(estudante.endereco);
// console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(listaEnderecosComComplemento);
