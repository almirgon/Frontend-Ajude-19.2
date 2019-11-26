import ProfileService from "../../services/profile/ProfileService.js"
import Utils from "../../utils.js"

let profile

let Profile = {
    render: async () => {
    const request = Utils.parseRequestURL()
    profile = await ProfileService.profile(request.id)
    const pageHTML = /*html*/ `
    <main class="wrap">
            <h1>Perfil</h1>
            <p class="pProfile"> Nome: ${profile.user.firstName} ${profile.user.lastName} </p>
            <p class="pProfile"> Email: ${profile.user.email} </p>
            <h3>Campanhas criadas</h3>
            <ul> ${profile.campaigns.map(campaign => /*html*/`<p class="campaignsUser"><a class="anchorCampaignsUser" href="#/campaign/${campaign.url}">${campaign.name}</a></p>`
            ).join('\n ')} </ul>
            <h3> Fez doações para </h3>
            <ul> ${profile.donations.map(donation => /*html*/ `<p class="donationsUser"><a class="anchorDonationsUser" href="#/campaign/${donation.url}">${donation.name}</a></p>`
            ).join('\n')} </ul>

    </main>`
    return pageHTML
    }
    , after_render: async () => {
        
        }


    }
    


export default Profile