
function cadastrar(){
  alert("Granja " + document.getElementById("nome").value + " Cadastrada!");
};

function voltar(){
  if(document.getElementById("voltar").text=="Inicio"){
  document.getElementById("voltar").innerHTML = "<<";
}else{
  document.getElementById("voltar").innerHTML = "Inicio";
}
};
