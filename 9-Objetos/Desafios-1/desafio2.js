let anoAtual = new Date().getFullYear();

const livro = {
  titulo: "As crônicas de nárnia",
  autor: "Frank",
  anoPublicacao: 2024,
  genero: "Comédia"
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `
Titulo: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade de Publicação: ${livro.idadePublicacao} anos;
`
console.log(mostrarDetalhes);
