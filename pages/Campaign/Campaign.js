import CommentService from "../../services/comment/CommentService.js"
import Utils from "../../utils.js"
import CampaignService from "../../services/campaign/CampaignService.js"

let campaign
let Campaign = {
    render: async () => { 
    const request = Utils.parseRequestURL()
    campaign = await CampaignService.getByUrl(request.id)
    const pageHTML = /*html*/ `
    <main class = "wrap">
        <h1> ${campaign.name} </h1>
        <a href="#/profile/${campaign.user.email}"> Criada por: ${campaign.user.firstName} ${campaign.user.lastName} </a>
        <p> Status: ${campaign.status} </p>
        <p> Data de validade: ${campaign.date} </p>
        <p> Meta: R$ ${campaign.goal} </p>
        <p> Arrecadado: R$ ${campaign.raisedAmount} </p>
        <div align="justify"> 
        <p> Descrição:  ${campaign.description} </p>
        </div>
        <div>
            <h3>Comentários</h3>
            <form>
                <div>
                    <textarea id="text" spellcheck="false" required></textarea>
                </div>
                <button type="submit" id="botao-de-criar-comentario">Adicionar Comentário</button>
            </form>
        </div>
    </main>`

    return pageHTML
    }, after_render : async () => {
        const commentButton = document.getElementById("botao-de-criar-comentario")

        commentButton.addEventListener('click', createComment)

        async function createComment(event){
            event.preventDefault()
            const text = document.getElementById("text").value
            const idCampaign = campaign.id
            const commentData = {text, idCampaign}

            const response = await CommentService.createComment(commentData)

            if(response.ok){
                window.alert("Comentário feito com sucesso")
            }else{
                window.alert("Dados incorretos")
            }
        }
    }
}

export default Campaign

