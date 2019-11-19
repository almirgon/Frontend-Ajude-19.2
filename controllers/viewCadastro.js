import {viewInicial} from "../controllers/viewInicial.js";
import {templateCadastro} from "../controllers/ajude.js";
import {cadastrarUsuario} from "../model/modelUsers.js";


function viewCadastro() {
  parent.location.hash = "cadastro";

  let $viewer = document.querySelector('#viewer');
  let $template = templateCadastro;
  $viewer.innerHTML = $template.innerHTML;
  
  let $X = document.querySelector('#X');
  $X.addEventListener("click", viewInicial);

  let $mensagemCadastro = document.querySelector('#mensagemCadastro');
  $mensagemCadastro.innerText = "Cadastro";
  
  let $enter = document.querySelector('#enter');
  $enter.addEventListener("click", function () {
    let newUser = {
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "card": document.getElementById("card").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    };

    cadastrarUsuario(newUser);
    
    });


}

export {viewCadastro};
