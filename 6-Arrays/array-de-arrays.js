const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// [], []
const lista = [alunos, medias];

// No primeiro [] pega de alunos e no segundo [] a nota
console.log(
  `A aluna da posição 1 da lista é: ${lista[0][1]} e a nota dessa aluna é: ${lista[1][1]}`
);

// Pega tudo
console.log(lista[0]);