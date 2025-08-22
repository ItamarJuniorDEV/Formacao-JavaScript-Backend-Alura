const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante);
console.log(`O nome do estudante é: ${estudante.nome}`);
console.log(`Os três primeiros digitos do CPF são: ${estudante.cpf.substring(0, 3)}`);