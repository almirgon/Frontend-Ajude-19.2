import DonationService from "../../services/donation/DonationService.js"

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