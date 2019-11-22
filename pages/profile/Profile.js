import ProfileService from "../../services/profile/ProfileService.js"
import Utils from "../../utils.js"

import '../../components/campaign-card/campaignCard.js'

let profile

let Profile = {
    render: async () => {
    const request = Utils.parseRequestURL()
    profile = await ProfileService.profile(request.id)
    const pageHTML = /*html*/ `
    <main class="wrap">
            <div>
                <a href="colocar aqui o pag inicial">X</a>
            </div>
            <h1>Perfil</h1>
            <p> Nome: ${profile.user.firstName} ${profile.user.lastName} </p>
            <p> Email: ${profile.user.email} </p>
            <div id="campaigns">
            </div>
    </main>`
    return pageHTML
    }
    , after_render: async () => {
        const $campaigns = document.getElementById("campaigns")
        profile.campaigns.forEach(subject => {
            let $subject = document.createElement('campaign-card')
            $subject.setAttribute('name', subject.name);
            $subject.setAttribute('likes', subject.numberLikes);
            $subject.setAttribute('url', subject.url);
            $subject.setAttribute('status', subject.status);

            $campaigns.appendChild($subject)
        })
    }
    
}

export default Profile