alert('Boas vindas ao jogo do número secreto');
let numMax = prompt("Defina o número máximo a ser sorteado!");
if (numMax <= 0){
  alert("O número precisa ser maior que 0");
}
let numeroSecreto = parseInt(Math.random() * numMax + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {

  chute = prompt(`Escolha um número entre 1 e ${numMax}`);
  if (chute == numeroSecreto) {
  } else {
    if(chute > numeroSecreto  ){
        alert(`O número secreto é menor que ${chute}`);
      } else {
        alert( `O número secreto é maior que ${chute}`);
      };
      tentativas++;
    };
  };

  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
  // if(tentativas > 1){
  //   alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);   
  // } else {
  //   alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);   
  // }


