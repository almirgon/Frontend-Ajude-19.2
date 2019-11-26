import CampaignService from "../../services/campaign/CampaignService.js";

let Home = {
    render:async () => 
        /*html*/ `<div id="buscar">
        <h1 style="margin-left:2%">Buscar Campanhas</h1>
        </div>

        <div style="margin-left:7%">
        <form id="searchthis" style="display:inline;">
            <input id="search-box" name="q" type="text" placeholder="ex: arrecadação "/>
            <input id="search-btn" value="Pesquisar"/>
        </form>
        </div>

        <div id="campaigns">

        </div>
        `
        ,after_render: async() =>{

            document.getElementById('search-btn').addEventListener('click',async() => {
                const campaigns = document.getElementById("campaigns")
                while (campaigns.firstChild) {
                     campaigns.removeChild(campaigns.firstChild);
                }
                const searchText = document.getElementById("search-box").value
                const newCampaigns = await CampaignService.getBySubstring(searchText)

                newCampaigns.forEach(campaign => {
                    const campaignCard = document.createElement('div')
                    const paragraph = document.createElement("p")
                    const anchor = document.createElement("a")
                    anchor.setAttribute("href", `/#/campaign/${campaign.url}`)
                    paragraph.innerHTML = campaign.name + " | Faltam: R$ " + (campaign.goal - campaign.raisedAmount) + " | Likes: " +campaign.numberLikes
                    anchor.appendChild(paragraph)
                    campaignCard.appendChild(anchor)
                    campaigns.appendChild(campaignCard)
                });
            })


        }
}

export default Home