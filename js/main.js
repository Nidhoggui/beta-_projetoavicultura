var db = openDatabase("Meubanco", "3.0", "Mybase", 6000);
db.transaction(function(criar){
  criar.executeSql("CREATE TABLE granjas (codigo PRIMARY KEY, nome TEXT, email TEXT, cnpj TEXT)")
});

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
