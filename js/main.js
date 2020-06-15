var db = openDatabase("Meubanco", "3.0", "Mybase", 6000);
db.transaction(function(criar){
  criar.executeSql("CREATE TABLE granjas (ID INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, cnpj TEXT)");
});

const addButton = document.querySelector('.addButton');
var iputValue = document.querySelector('.input');
const countainer = document.querySelector('.countainer');

class granja{
  counstructor(nome, email, cnpj){
    this.createDiv(nome);
    this.createDiv(email);
    this.createDiv(cnpj);
  }

  createDiv(nome){
    let input = document.createElement('input');
    input.value = nome;
    input.disabled = true;
    input.classList.add('')
  }
}
function cadastrar(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value + '@email.com';
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
                alert("There was a technical error. Try again.");
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
