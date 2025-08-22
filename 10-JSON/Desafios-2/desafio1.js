const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(id){
  const livro = biblioteca.find(l => l.id === id);
  return livro || null;
}

let resultado = encontrarLivroPorId(1);
if (resultado) {
  console.log("Livro encontrado:", resultado);
} else {
  console.log("Livro não encontrado");
}

resultado = encontrarLivroPorId(10);
if (resultado) {
  console.log("Livro encontrado:", resultado);
} else {
  console.log("Livro não encontrado");
}