import DonationService from "../../services/donation/DonationService.js"

let Donation = {
    render: async () => /*html*/ `
    <main class="wrap">
        <div>
            <a href="colocar aqui o pag inicial">X</a>
        </div>
        <h1>Doação</h1>
        <form>
            <div>
                <input type = "number" id = "donation" placeholder="Insira um valor"> 
            </div>
            <div>
                <button type="submit" id="botao-de-doacao">Doar</button>
            </div>
            </form>
    </main>
    `, after_render: async () => {
        const donateButton = document.getElementById("botao-de-doacao")

        donateButton.addEventListener("click", donateForCampaign)

        async function donateForCampaign(event){
            event.preventDefault()
            const valueDonate = document.getElementById("botao-de-doacao").value

            const donationData = {valueDonate}

            const response = await DonationService.donate(donationData)

            if(response.ok){
                window.alert("Doação realizada com sucesso")
            }else{
                window.alert("Dados incorretos")
            }
        }
    }
}

export default Donation