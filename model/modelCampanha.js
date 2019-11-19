import {requestPOST} from "../util/requestPOST.js";

async function cadastrarCampanha(campanha) {

    let response = await requestPOST("http://localhost:8080/api/v1/campaign", campanha);

    if (!response) {
        throw new ErrorEvent("Request null");
    }
    
    let data = await response.json();
    
    alert("Cadastro realizado!");
}

export {cadastrarCampanha};
