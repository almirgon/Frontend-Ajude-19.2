let homeDeslogado =  `<a class="links" href="/#/home">Home</a>
    <a class="links" href="/#/signup">Cadastrar</a>
    <a class="links" href="/#/login">Login</a>`

let homeLogado = `<a class="links" href="/#/home">Home</a>
    <a class="links" href="/#/createcampaign">Cadastrar Campanha</a>
    <a id="logout" href="/#/home" class="links">Sair</a>`

let isLogged = localStorage.getItem('token') ? true : false


let NavBar = {
    render: async () => 
        /*html*/ `
        <div id="menu">
        <div class="logo-menu">
            <img id="imagem-menu" src="../../logo.png"/>
        </div> 
        <nav>   
            ${isLogged ? homeLogado : homeDeslogado}
        </nav>
        </div>
       `
        
    ,after_render: async() => {
        const logoutButton = document.getElementById("logout")
        logoutButton && logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token')
            window.location.href = "/#/home"
            window.location.reload()
        })
    }
}


export default NavBar