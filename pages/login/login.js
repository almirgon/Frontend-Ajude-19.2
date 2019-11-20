import LoginService from "../../services/login/loginService.js"

const loginButton = document.getElementById("botao-de-login")

loginButton.addEventListener("click", login)

async function login(event) {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const userData = {email, password}

    const response = await LoginService.login(userData)

    if(response.ok){
        window.alert("Bem vindo")
    }else{
        window.alert("Email ou senha incorreta")
    }

}