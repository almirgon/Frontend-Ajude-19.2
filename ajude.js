(async function main() {
  let data = await Promise.all([fetch_templates()]);

  let hash = location.hash;
  if ([""].includes(hash)) {
    viewInicial();
  }
}());

let templateInicial,templateLogin;
async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;

  templateInicial = e.querySelector('#viewInicial');
  templateLogin = e.querySelector('#viewLogin');
}

function viewInicial() {
  let $viewer = document.querySelector('#viewer');
  let $template = templateInicial;
  $viewer.innerHTML = $template.innerHTML;

  let $mensagemInicial = document.querySelector('#mensagemInicial');
  $mensagemInicial.innerText = "Bem vindo";

  let $login = document.querySelector('#login');
  $mensagemInicial.innerText = "Bem vindo";


}

function viewLogin() {
  let $viewer = document.querySelector('#viewer');
  let $template = templateLogin;;
  $viewer.innerHTML = $template.innerHTML;



}
