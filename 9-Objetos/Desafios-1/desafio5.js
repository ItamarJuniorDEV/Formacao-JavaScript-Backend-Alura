let anoAtual = new Date().getFullYear();

const livro = {
  titulo: "As crônicas de nárnia",
  autor: "Frank",
  anoPublicacao: 2024,
  genero: "Comédia",
  idadePublicacao: function(){
    return anoAtual - this.anoPublicacao;
  },
};

livro.genero = "Aventura";

console.log(livro);