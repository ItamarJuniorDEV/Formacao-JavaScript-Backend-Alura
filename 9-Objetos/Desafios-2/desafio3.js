
// 1️⃣ ARRAY DE OBJETOS: LISTA DE PESSOAS
const pessoas = [
{
  nome: "Itamar",
  idade: 28,
  cidade: "Santa Maria",
},
{ nome: "Reginaldo",
  idade: 55,
  cidade: "Caçapava"
},
{ nome: "Carla",
  idade: 25,
  cidade: "Pelotas"
},
{ nome: "Leandro",
  idade: 75,
  cidade: "Cacequi"
},
];

// 2️⃣ ARRAY DE OBJETOS: ADICIONANDO PESSOAS
pessoas.push(
{ nome: "Cleuza",
  idade: 95,
  cidade: "Salvador"
});
pessoas.push(
{ nome: "Geralda",
  idade: 92,
  cidade: "Salvador"
});


// 3️⃣ FUNÇÃO: MOSTRAR QUALQUER LISTA DE PESSOAS
function mostrarListaPessoas(pessoas){
  console.log("Lista de Pessoas:");
  pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, ${pessoa.cidade}`);
  });
}

// 4️⃣ FUNÇÃO: FILTRA PESSOAS PELA CIDADE
function filtrarPorCidade(pessoas, cidade){
  return pessoas.filter(pessoa => pessoa.cidade == cidade);
}

// CHAMA FUNÇÃO: MOSTRA TODAS AS PESSOAS
mostrarListaPessoas(pessoas);

const pessoasSalvador = filtrarPorCidade(pessoas, "Salvador");
console.log("Pessoas em Salvador");

// CHAMA FUNÇÃO: MOSTRA PESSOAS QUE MORAM EM SALVADOR 
mostrarListaPessoas(pessoasSalvador);





