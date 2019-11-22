class NavBar extends HTMLElement{

    login() {
        return localStorage.hasOwnProperty("token");
      }
    
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        if(this.login()) this.renderLogged();
        else this.renderGuest();
    }

    renderLogged() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/navbar.css">
            <nav>
            <ul>
            <li><a class="main" href="colocar aqui o pag inicial">Home</a></li>
            <li><a class="second" id="createCampaign" href="./pages/createCampaign/index.html">Cadastrar campanha</a></li>
            <li><a class="second" id="logout" href="colocar aqui o index para deslogar">Logout</a></li>
            <li><a class="second" id="profile" href="./pages/profile/index.html">Profile</a></li>
            </ul>
            </nav>`;
    }

    renderGuest() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/navbar.css">
            <nav>
            <ul>
            <li><a class="main" href="colocar aqui o pag inicial">Home</a></li>
            <li><a class="second" id="user" href="./pages/signUp/index.html">Signup</a></li>
            <li><a class="second" id="login" href="./pages/login/index.html">Login</a></li>
            </ul>
            </nav>`;
    }
}

window.customElements.define('nav-bar', NavBar)
