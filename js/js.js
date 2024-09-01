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

function sendPhp(){
  alert( document.forms[0].nome.value);
    var data = {
      nome:  document.forms[0].nome.value,
    	email: document.forms[0].email.value,
    	mensagem:  document.forms[0].mensagem.value
    };

  $.post('enviarEmail.php', data);
}


document.addEventListener('DOMContentLoaded', () => {
    const check = document.getElementById('check');
    const icone = document.getElementById('icone');
    const icone1 = document.getElementById('icone1');

    // Toggle menu visibility
    icone.addEventListener('click', () => {
        check.checked = !check.checked;
    });

    icone1.addEventListener('click', () => {
        check.checked = !check.checked;
    });
});


