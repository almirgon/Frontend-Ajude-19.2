import {viewInicial} from "../controllers/viewInicial.js";
import {templateLogin} from "../controllers/ajude.js";
import {authToken} from '../model/modelUsers.js';


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
  $enter.addEventListener("click", function() {
    let login = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    logar(login);
    
    });
    

}

async function logar(login) {
    let data = await authToken(login);
   
    if (data) {
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('token', data.token);
        
        let object = {value: true, timestamp: new Date().getMilliseconds};
        sessionStorage.setItem("logado", object);
    }
};

export {viewLogin};
