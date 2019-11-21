import CommentService from "../../services/comment/CommentService.js"

const commentButton = document.getElementById("botao-de-criar-comentario")

commentButton.addEventListener('click', createComment)

async function createComment(event){
    event.preventDefault()
    const text = document.getElementById("text").value
    const idCampaign = document.getElementById("idCampaign").value

    const commentData = {text, idCampaign}

    const response = await CommentService.createComment(commentData)

    if(response.ok){
        window.alert("Comentário feito com sucesso")
    }else{
        window.alert("Dados incorretos")
    }
}

