var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var CEP = document.getElementById("CEP");
var logr = document.getElementById("logr");
var num = document.getElementById("num");
var comp = document.getElementById("comp");
var bair = document.getElementById("bair");
var cit = document.getElementById("cit");
var est = document.getElementById("est");

function alertar(){
   // alert(nome.value +"clicou no botão: " + event.target.value);
    saida.innerText = "Nome: " + nome.value + 
    "\n E-mail: " + email.value +
    "\n Telefone: " + tel.value +
    "\n CEP: " + CEP.value +
    "\n Logradouro: " + logr.value +
    "\n Número: " + num.value +
    "\n Complemento: " + comp.value +
    "\n Bairro: " + bair.value +
    "\n Cidade: " + cit.value +
    "\n Estado: " +est.value;
}