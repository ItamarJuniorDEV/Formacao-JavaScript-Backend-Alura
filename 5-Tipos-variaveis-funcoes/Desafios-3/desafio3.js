/*
Considere uma situação em que você está verificando
se um usuário está logado e tem permissão de administrador 
para acessar determinada funcionalidade. 
Utilize variáveis booleanas para simular essas condições 
e use o operador AND para verificar se ambas são verdadeiras.
*/

let usuario = false;
let permissaoAdm = true;

if(usuario === true && permissaoAdm){
  console.log('O usuário está logado e com permissão de admnistrador');
} else {
  console.log('O usuário não está logado ou não tem permissão de admnistrador');
}