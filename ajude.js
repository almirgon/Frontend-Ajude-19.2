(async function main() {
  let data = await Promise.all([fetch_templates()]);

  let hash = location.hash;
  if ([""].includes(hash)) {
    viewInicial();
  }
}());

let templateInicial;
async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;
  templateInicial = e.querySelector('#viewInicial');
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
