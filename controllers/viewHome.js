import {templateInicial} from "../controllers/ajude.js";

function viewHome() {
  parent.location.hash = "";	
	
  let $viewer = document.querySelector('#viewer');
  let $template = templateInicial;
  $viewer.innerHTML = $template.innerHTML;

  let $mensagemInicial = document.querySelector('#mensagemInicial');
  $mensagemInicial.innerText = "Bem vindo";
  
  let $home = document.querySelector('#home');
  $home.addEventListener("click", viewHome);
  
  let $ranking = document.querySelector('#ranking');
  $ranking.addEventListener("click", viewHome);

  let $logout = document.querySelector('#logout');
  $login.addEventListener("click", logoutTotal);
  
  let $mensagemPesquise = document.querySelector('#mensagemPesquise');
  $mensagemPesquise.innerText = "Pesquise sua campanha";
}

function logoutTotal() {
	logout();
	viewInicial();
}

function logout() {
	let object = {value: false, timestamp: new Date().getMilliseconds};
	sessionStorage.setItem("logado", object);
}

export {viewHome};

