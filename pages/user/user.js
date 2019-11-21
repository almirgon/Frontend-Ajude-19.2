import SignUpService from "../../services/user/userService.js"

const signUpButton = document.getElementById('botao-de-cadastro')

signUpButton.addEventListener("click", addUser)

async function addUser(event){
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const card = document.getElementById("card").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const newUser = {firstName, lastName, card, email, password}

    const response = await userService.createUser(newUser)
    
    if(response.ok){
        window.alert("Cadastro realizado")
    }else{
        window.alert("Erro ao cadastrar usuário: " + response.json())
    }
}