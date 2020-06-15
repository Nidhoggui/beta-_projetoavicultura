var db = openDatabase("Meubanco", "3.0", "Mybase", 6000);
db.transaction(function(criar){
  criar.executeSql("CREATE TABLE granjas (ID INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, cnpj TEXT)");
});

function cadastrar(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var cnpj = document.getElementById("cnpj").value;

  db.transaction(function(armazenar){
    armazenar
       .executeSql(
           "INSERT INTO granjas (nome, email, cnpj) VALUES (?,?,?)",
           [nome, email, cnpj],
           function() {
                console.log("SUCCESS");
                alert("Granja " + document.getElementById("nome").value + " Cadastrada!");
            },
           function(data, error) {
                console.log("There was an ERROR", error)
                alert("Erro tecnico! Tente novamente");
            });
  });
};

function voltar(){
  if(document.getElementById("voltar").text=="Voltar"){
  document.getElementById("voltar").innerHTML = "<<";
}else{
  document.getElementById("voltar").innerHTML = "Voltar";
}
};
