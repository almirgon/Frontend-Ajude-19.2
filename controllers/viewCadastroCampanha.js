import {viewInicial} from "../controllers/viewInicial.js";
import {templateCadastroCampanha} from "../controllers/ajude.js";
import {cadastrarCampanha} from "../model/modelCampanha.js";
import {criarURLCampanha} from "../util/criarURLCampanha.js";


function viewCadastroCampanha() {
  parent.location.hash = "cadastro-campanha";

  let $viewer = document.querySelector('#viewer');
  let $template = templateCadastroCampanha;
  $viewer.innerHTML = $template.innerHTML;
  
  let $X = document.querySelector('#X');
  $X.addEventListener("click", viewInicial);

  let $mensagemCadastro = document.querySelector('#mensagemCadastroCampanha');
  $mensagemCadastro.innerText = "Cadastre uma campanha";
  
  let $enter = document.querySelector('#enter');
  $enter.addEventListener("click", function () {
    let newCampanha = {
        "name": document.getElementById("name").value,
        "descricao": document.getElementById("lastName").value,
        "deadline": document.getElementById("card").value,
        "meta": document.getElementById("email").value,
    };

    cadastrarCampanha(newCampanha);
    
    });


}

export {viewCadastroCampanha};
