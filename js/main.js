
function cadastrar(){
  //var nome = cadastro.html.getElementById('nome');
  //alert("Granja " + "nome" + " Cadastrada!");
  document.getElementById("nome").innerHTML = "Cocoricó";
  alert("Granja" + document.getElementById("nome") + " Cadastrada!");
};

function voltar(){
  if(document.getElementById("voltar").text=="Inicio"){
  document.getElementById("voltar").innerHTML = "<<";
}else{
  document.getElementById("voltar").innerHTML = "Inicio";
}
};
