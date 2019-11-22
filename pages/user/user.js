import userService from "../../services/user/userService.js"

let User = {
    render: async () => /*html*/`
    <div class="logo">
        <img alt="AJuDE" src="../../logo.png"/>
    </div>
    <div class="pageContainer">
        <main class="wrap">
            <form>
                <div>
                    <a href="colocar aqui o pag inicial">X</a>
                </div>
                <div>
                    <input type="text" id="firstName" placeholder="Primerio nome"/>
                </div>
                <div>
                    <input type="text" id="lastName" placeholder="Último nome"/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <input type="card" id="card" placeholder="Cartão de crédito" />
                </div>
                <div>
                    <input type="password" id="password" placeholder="Senha" />
                </div>
                <div>
                    <button type="submit" id="botao-de-cadastro">Cadastre-se</button>
                </div>
            </form>
        </main>
    </div>
    `, after_render: async () => {
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

    }
}

export default User
