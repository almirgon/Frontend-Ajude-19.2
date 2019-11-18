import {viewInicial} from "../controllers/viewInicial.js";
import {templateCadastro} from "../controllers/ajude.js";


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


}

export {viewCadastro};
