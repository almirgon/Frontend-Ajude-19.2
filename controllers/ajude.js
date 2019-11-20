import {routing} from "../util/routing.js";

let templateInicial,templateLogin,templateCadastro,templateHome,templateCadastroCampanha;


(async function main() {
  let data = await Promise.all([fetch_templates()]);

  routing();
}())

async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;

  templateInicial = e.querySelector('#viewInicial');
  templateLogin = e.querySelector('#viewLogin');
  templateCadastro = e.querySelector('#viewCadastro');
  templateCadastroCampanha = e.querySelector('#viewCadastroCampanha');
  templateHome = e.querySelector('#viewHome');
}

export {templateInicial,templateLogin,templateCadastro,templateCadastroCampanha,templateHome};


