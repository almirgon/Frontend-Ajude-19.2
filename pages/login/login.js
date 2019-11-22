import LoginService from "../../services/login/loginService.js"

let Login = {
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
                <input type = "text" id = "email" placeholder="Email"> 
            </div>
            <div>
                <input type = "password" id = "password" placeholder="Senha"> 
            </div>
            <div>
                <button type="submit" id="botao-de-login">Entrar</button>
            </div>
        </form>
        </main>
        <script type="module" src="../../pages/login/login.js"> </script>
    </div>
    `, after_render: async () => {
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

    }
}

export default Login