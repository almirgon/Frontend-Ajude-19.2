import CampaignService from "../../services/campaign/CampaignService.js"

let CreateCampaign = {
    render: async () => /*html*/ `
    <main class="wrap">
            <h1>Cadastrar Campanha</h1>
            <form>
                <div>
                    <input class="inputForm" type = "text" id = "name" placeholder="Nome"> 
                </div>
                <div>
                    <input class="inputForm" type = "date" id ="date" placeholder="Data de validade"> 
                </div>
                <div>
                    <input class="inputForm" type = "text" id = "description" placeholder="Descrição"> 
                </div>
                <div>
                    <input class="inputForm" type = "number" id = "goal" placeholder="Meta"> 
                </div>
                <div>
                    <button class="allButtons" type="submit" id="botao-de-cadastrar-campaign">Cadastrar</button>
                </div>
            </form>
    </main>
    `, after_render: async() => {
        const createCampaignButton = document.getElementById("botao-de-cadastrar-campaign")

        createCampaignButton.addEventListener("click",createCampaign)

        async function createCampaign(event) {
            event.preventDefault()
            const name = document.getElementById("name").value
            const description = document.getElementById("description").value
            const date = document.getElementById("date").value
            const goal = document.getElementById("goal").value

            console.log(date)

            const campaginData = {name,description,date,goal}

            const response = await CampaignService.createCampaign(campaginData)

            if(response.ok){
                window.alert("Campanha criada com sucesso")
            }else{
                window.alert("Dados incorretos")
            }

        }

    }
}

export default CreateCampaign