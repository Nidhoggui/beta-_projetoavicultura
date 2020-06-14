var db = openDatabase("Meubanco", "3.0", "Mybase", 6000);
db.transaction(function(criar){
  criar.executeSql("CREATE TABLE granjas (codigo PRIMARY KEY, nome TEXT, email TEXT, cnpj TEXT)")
});

function cadastrar(){
  var codigo = document.getElementById("codigo").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var cnpj = document.getElementById("cnpj").value;

  db.transaction(function(armazenar){
    armazenar.executeSql("INSERT INTO granjas (codigo, nome, email, cnpj) VALUES (?,?,?@email.com,?)", [codigo, nome, email, cnpj]);
  });
  alert("Granja " + document.getElementById("nome").value + " Cadastrada!");
};

function voltar(){
  if(document.getElementById("voltar").text=="Inicio"){
  document.getElementById("voltar").innerHTML = "<<";
}else{
  document.getElementById("voltar").innerHTML = "Inicio";
}
};
