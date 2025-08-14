/*
Escopo é o que define onde as variáveis e funções são acessíveis.

Escopo Global: variável acessível de qualquer lugar do código
Escopo de Função: variável criada em uma função e só pode ser usada lá
Escopo de Bloco: variável só existe dentro do {} 
*/

// Uma variável criada fora do bloco pode ser alterada dentro do bloco

if (1 > 0) {
  let estudante = 'Itamar';
  console.log(estudante);
}
// Agora temos 2 variáveis ana, pois uma está fora do escopo
estudante = 'Ana';
console.log(estudante);

