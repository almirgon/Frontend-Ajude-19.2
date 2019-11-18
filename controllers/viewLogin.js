import {viewInicial} from "../controllers/viewInicial.js";
import {templateLogin} from "../controllers/ajude.js";


function viewLogin() {
  parent.location.hash = "login";

  let $viewer = document.querySelector('#viewer');
  let $template = templateLogin;
  $viewer.innerHTML = $template.innerHTML;
  
  let $X = document.querySelector('#X');
  $X.addEventListener("click", viewInicial);

  let $mensagemLogin = document.querySelector('#mensagemLogin');
  $mensagemLogin.innerText = "Login";
  
  let $enter = document.querySelector('#enter');


}

export {viewLogin};
