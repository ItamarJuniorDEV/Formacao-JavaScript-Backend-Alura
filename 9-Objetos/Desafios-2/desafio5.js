const contaBancaria = {
  titular: "Itamar",
  saldo: 1000,
  depositar: function(valor){
    this.saldo += valor;
    },
  sacar: function(valor){
  if(valor <= this.saldo){
    this.saldo -= valor;
  } else {
    console.log("Saldo insuficiente para saque");
    }
  }
};

const cliente = {
  nome: "Junior",
  conta: contaBancaria
};

function mostrarSaldo(cliente){
  console.log(`Nome do cliente: ${cliente.nome}`);
  console.log(`saldo da conta: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(300);
cliente.conta.sacar(400);

mostrarSaldo(cliente);