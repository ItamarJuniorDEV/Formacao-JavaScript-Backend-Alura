let anoAtual = new Date().getFullYear();

const livro = {
  titulo: "As crônicas de nárnia",
  autor: "Frank",
  anoPublicacao: 2024,
  genero: "Comédia",
  idadePublicacao: function(){
    return anoAtual - this.anoPublicacao;
  },
  avaliacao: null
};

let novaAvaliacao = 9;

if(livro.avaliacao === null){
  livro.avaliacao = novaAvaliacao;
} else {
  console.log(`O livro ${livro.titulo} já possui uma avaliação!`);
}


console.log(livro);