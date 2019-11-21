import ProfileService from "../../services/profile/ProfileService.js"

async function getProfile(email){
    event.preventDefault()

    const response = await ProfileService.profile(email)

    if(response.ok){
        window.alert("Comentário feito com sucesso")
    }
}