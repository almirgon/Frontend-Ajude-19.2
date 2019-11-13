(async function main() {

  let hash = location.hash;
  if ([""].includes(hash)) {
    viewInicial();
  }
}());

function viewInicial() {
  let $template = document.querySelector('#viewInicial');
  $viewer.innerHTML = $template.innerHTML;

}
