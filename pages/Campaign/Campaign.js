import CommentService from "../../services/comment/CommentService.js"
import Utils from "../../utils.js"
import CampaignService from "../../services/campaign/CampaignService.js"
import DonationService from "../../services/donation/DonationService.js"
import LoginService from "../../services/login/loginService.js"

/*Função para apagar comentário*/

const deleteComment = async event => {
    const idComment = event.target.id.split("-")[2]
    const idCampaign = campaign.id;
    await CommentService.delete({idCampaign, idComment})
    window.location.reload()
}

const commentHTML = (comment) => { 
    const html = /*html*/`
    <div>
        <div>
            <p> ${comment.text} </p>
            <p>Por: ${comment.user.firstName} ${comment.user.lastName} </p>
            ${comment.user.email === loggedUser ? `<button class="apagar-comentario" id="apagar-comentario-${comment.id}"> Apagar Comentario </button>` : ""}
        <div>
    </div>
`
    return html
}

/*Campanha*/

let campaign
let loggedUser
let Campaign = {
    render: async () => {
    loggedUser = (await LoginService.getUser()).sub
    const request = Utils.parseRequestURL()
    campaign = await CampaignService.getByUrl(request.id)
    const pageHTML = /*html*/ `
    <main class = "wrap">
        <h1> ${campaign.name} </h1>
        <a class="userEmail" href="#/profile/${campaign.user.email}"> Criada por: ${campaign.user.firstName} ${campaign.user.lastName} </a>
        <p> Likes: ${campaign.numberLikes} <button class="openModalButton" id="modal-de-like"> Dar like </button> </p> 
        <p> Status: ${campaign.status} </p>
        <p> Data de validade: ${campaign.date} </p>
        <p> Meta: R$ ${campaign.goal} </p>
        <p >Arrecadado: R$ ${campaign.raisedAmount} </p>
        <div align="justify"> 
        <p> Descrição:  ${campaign.description} </p>
        </div>
        <dialog id="dialog">
            <h1>Doação</h1>
            <form>
                <div>
                    <input type="number" id="donation" placeholder="Insira um valor"> 
                </div>
                <div>
                    <button id="botao-de-doacao">Doar</button>
                    <button id="botao-de-cancelar">Cancelar</button>
                </div>
                </form>
        </dialog>
        <button class="openModalButton" id="modal-de-doar"> Doar </button>
        
        <div>
            <h3>Comentários</h3>
            <div id="comments">
                ${campaign.comments.map(comment => commentHTML(comment)).join("\n")}
            </div>
            <form>
                <div>
                    <textarea id="text" spellcheck="false" required></textarea>
                </div>
                <button class="commentButton" type="submit" id="botao-de-criar-comentario">Adicionar Comentário</button>
            </form>
        </div>
    </main>`

    return pageHTML
    }, after_render : async () => {
        const commentButton = document.getElementById("botao-de-criar-comentario")

        const openModalButton = document.getElementById("modal-de-doar")

        const cancelButton = document.getElementById('botao-de-cancelar')

        const donateButton = document.getElementById('botao-de-doacao')

        const likeButton = document.getElementById("modal-de-like")

        /* Dar Like na campanha */
        likeButton.addEventListener('click', async() => {
            campaign = await CampaignService.toLike(campaign.id)

            window.location.reload();
        })

        /* Doar para uma campanha */
        cancelButton.addEventListener('click', async() => {
            let dialog = document.getElementById("dialog")
            dialog.removeAttribute('open')
        })

        donateButton.addEventListener('click', async() => {
            let dialog = document.getElementById("dialog")
            let value = document.getElementById('donation').value
            campaign = await DonationService.donate(campaign.id,value)

            window.location.reload();
        })

        openModalButton.addEventListener('click', async() => {
            let dialog = document.getElementById("dialog")
            dialog.setAttribute('open', true)
            
        })

        /* Comentar uma campanha */
        commentButton.addEventListener('click', createComment)

        async function createComment(event){
            event.preventDefault()
            const text = document.getElementById("text").value
            const idCampaign = campaign.id
            const commentData = {text, idCampaign}

            const response = await CommentService.createComment(commentData)

            if(response){
                window.location.reload()
            }else{
                window.alert("Dados incorretos")
            }
        }

        const comments = document.getElementsByClassName("apagar-comentario")
        for (let renderedCommentButton of comments) {
            renderedCommentButton.addEventListener('click', deleteComment)
        }
    }
}

export default Campaign

