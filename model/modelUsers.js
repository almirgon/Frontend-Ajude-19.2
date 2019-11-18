import {requestPOST} from "../util/requestPOST.js";


async function authToken (login) {

    try {
        let response = await requestPOST('http://ajude.herokuapp.com/v1/auth/login', login);
        if (!response.ok) {
            throw response;
        }
        let data = await response.json();
        return {
            "email": login.email,
            "token": data.token
        };
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        let e = await error.json();
        alert(e.message);
    }
   
}

async function cadastrarUsuario(user) {

    let response = await requestPOST("http://ajude.herokuapp.com/v1/users/", user);

    if (!response) {
        throw new ErrorEvent("Request null");
    }
    
    let data = await response.json();
    
    alert("Cadastro realizado!");
}

export {authToken, cadastrarUsuario};
