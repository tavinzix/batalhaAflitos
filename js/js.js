function verifica(){
  if (checarEmail() && checarNome() && checarMensagem()){
    return true;
  }
  else{
    return false;
  }
}
       
function checarEmail(){
  if( document.forms[0].email.value=="" 
    || document.forms[0].email.value.indexOf('@')==-1 
    || document.forms[0].email.value.indexOf('.')==-1 )
  {
  alert( "Por favor, informe um E-MAIL válido!" );
    return false;
}
  else{
    return true;
  }
}

function checarNome(){
  if( document.forms[0].nome.value==""){
    alert( "Por favor, informe um NOME válido!" );
    return false;
  }
   
  else{
    return true;
  }
}
  
function checarMensagem(){
  if( document.forms[0].mensagem.value==""){
    alert( "Por favor, informe uma mensagem válida!" );
      return false;
  }
   
  else{
    return true;
  }
}

function calcular(operacao) {
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  
  let resultado;
  
  switch(operacao) {
      case 'soma':
          resultado = valor1 + valor2;
          break;
      case 'subtracao':
          resultado = valor1 - valor2;
          break;
      case 'multiplicacao':
          resultado = valor1 * valor2;
          break;
      case 'divisao':
          if (valor2 == 0) {
              resultado = 'Não é possível dividir por zero';
          } else {
              resultado = valor1 / valor2;
          }
          break;
      default:
          resultado = 'Operação inválida';
  }
  alert(`Resultado: ${resultado}`);
};
