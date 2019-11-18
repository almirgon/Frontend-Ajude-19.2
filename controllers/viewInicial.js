import {viewLogin} from "../controllers/viewLogin.js";
import {viewCadastro} from "../controllers/viewCadastro.js";
import {templateInicial} from "../controllers/ajude.js";


function viewInicial() {
 parent.location.hash = "";	
	
  let $viewer = document.querySelector('#viewer');
  let $template = templateInicial;
  $viewer.innerHTML = $template.innerHTML;

  let $mensagemInicial = document.querySelector('#mensagemInicial');
  $mensagemInicial.innerText = "Bem vindo";
  
  let $home = document.querySelector('#home');
  $home.addEventListener("click", viewInicial);
  
  let $ranking = document.querySelector('#ranking');
  $ranking.addEventListener("click", viewInicial);

  let $login = document.querySelector('#login');
  $login.addEventListener("click", viewLogin);

  let $cadastro = document.querySelector('#cadastro');
  $cadastro.addEventListener("click", viewCadastro);
  
  let $mensagemPesquise = document.querySelector('#mensagemPesquise');
  $mensagemPesquise.innerText = "Pesquise sua campanha";


}

export {viewInicial};
