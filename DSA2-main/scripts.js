var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep= document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(){
   // alert(nome.value +"clicou no botão: " + event.target.value);

    
if(cep.value.length < 8){
    alert("CEP inválido!");
    return;
    }
    //remover o traço do CEP
    cep.value = cep.value.replace('-','');
     
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
     
        fetch(url)
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(dados){
            logradouro.value = dados.logradouro;
            complemento.value = dados.complemento;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            estado.value = dados.uf;
        })
        .catch(function(e){
            alert(e.message());
        });

    saida.innerText = "Nome: " + nome.value + 
    "\n E-mail: " + email.value +
    "\n Telefone: " + telefone.value +
    "\n CEP: " + cep.value +
    "\n Logradouro: " + logradouro.value +
    "\n Número: " + numero.value +
    "\n Complemento: " + complemento.value +
    "\n Bairro: " + bairro.value +
    "\n Cidade: " + cidade.value +
    "\n Estado: " +estado.value;
}