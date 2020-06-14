var db = openDatabase("Meubanco", "3.0", "Mybase", 6000);
db.transaction(function(criar){
  criar.executeSql("CREATE TABLE granjas (ID INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, cnpj TEXT)");
});

function cadastrar(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var cnpj = document.getElementById("cnpj").value;

  db.transaction(function(armazenar){
    armazenar.executeSql("INSERT INTO granjas (nome, email, cnpj) VALUES (?,?@email.com,?)", [nome, email, cnpj]);
  });
  alert("Granja " + document.getElementById("nome").value + " Cadastrada!");
};

function voltar(){
  if(document.getElementById("voltar").text=="Voltar"){
  document.getElementById("voltar").innerHTML = "<<";
}else{
  document.getElementById("voltar").innerHTML = "Voltar";
}
};
