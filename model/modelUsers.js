import {requestPOST} from "../util/requestPOST.js";


async function authToken (login) {

    try {
        let response = await requestPOST('http://localhost:8080/api/auth/login', login);
        var authorization = response.headers('Authorization');
        if (!response.ok) {
            throw response;
        }
        let data = await response.json();
        return {
            "email": login.email,
            "token": authorization
        };
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
    }
   
}

async function cadastrarUsuario(user) {

    let response = await requestPOST("http://localhost:8080/api/v1/users", user);

    if (!response) {
        throw new ErrorEvent("Request null");
    }
    
    let data = await response.json();
    
    alert("Cadastro realizado!");
}

export {authToken, cadastrarUsuario};
