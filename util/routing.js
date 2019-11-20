import {viewInicial} from "../controllers/viewInicial.js";
import {viewLogin} from "../controllers/viewLogin.js";
import {viewCadastro} from "../controllers/viewCadastro.js";
import {viewHome} from "../controllers/viewHome.js";
import {logado} from "../util/logado.js";

function routing(){
  let hash = location.hash;
  if ([""].includes(hash)) {
	  if (false) {
		  viewHome();
	  } else {
		  viewInicial();
	  }
  } else if (["#login"].includes(hash)) {
    viewLogin();
  } else if (["#cadastro-usuario"].includes(hash)) {
	viewCadastro();  
  }
	
}

export {routing};
