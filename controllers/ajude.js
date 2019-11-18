import {viewInicial} from "../controllers/viewInicial.js";
import {viewLogin} from "../controllers/viewLogin.js";
import {viewCadastro} from "../controllers/viewCadastro.js";
import {viewHome} from "../controllers/viewHome.js";
import {logado} from "../util/logado.js";

let templateInicial,templateLogin,templateCadastro,templateHome;


(async function main() {
  let data = await Promise.all([fetch_templates()]);

  let hash = location.hash;
  if ([""].includes(hash)) {
	  if (logado()) {
		  viewHome();
	  } else {
		  viewInicial();
	  }
  } else if (["#login"].includes(hash)) {
    viewLogin();
  } else if (["#cadastro"].includes(hash)) {
	viewCadastro();  
  }
}())

async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;

  templateInicial = e.querySelector('#viewInicial');
  templateLogin = e.querySelector('#viewLogin');
  templateCadastro = e.querySelector('#viewCadastro');
  templateHome = e.querySelector('#viewHome');
}

export {templateInicial,templateLogin,templateCadastro};


