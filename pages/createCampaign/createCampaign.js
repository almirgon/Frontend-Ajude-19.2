import CampaignService from "../../services/createCampaign/CampaignService.js"

const createCampaignButton = document.getElementById("botao-de-cadastrar-campaign")

createCampaignButton.addEventListener("click",createCampaign)

async function createCampaign(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const date = document.getElementById("date").value
    const goal = document.getElementById("goal").value

    const campaginData = {name,description,date,goal}

    const response = await CampaignService.createCampaign(campaginData)

    if(response.ok){
        window.alert("Campanha criada com sucesso")
    }else{
        window.alert("Dados incorretos")
    }

}