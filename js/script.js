document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&         document.getElementById("email").value != "" &&
      document.getElementById("telefone").value != ""){
      alert("Prontinho! Você receberá as mensagens por email")
  }else{
      alert("Por favor, preencha os campos do formulário com os seus dados!")
  }
}