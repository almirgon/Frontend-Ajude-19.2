import CampaignService from "../../services/campaign/CampaignService.js";

let HomePage = {
    render: async () => /*html*/ `
    <main class="wrap">
       <header-menu id="header-menu"></header-menu>
       <h1>Pesquise sua campanha</h1>
       <renderCampaign id="renderCampaign"></renderCampaign>
       <h1>Rankear campanhas por:</h1>
       <select name="rank" id="ranking">
          <option value="meta">meta</option>
          <option value="vencimento">data de vencimento</option>
          <option value="likes">likes</option>
       </select>
       <section id="campaignsHome"></section>
    </main>
    `, after_render: async() => {
        const $campaignsHome = document.getElementById("campaignsHome");

        let $rank = document.getElementById("rank");
        let chosen = $rank.options[$rank.selectedIndex].innerHTML;

        let list = CampaignService.getAllCampaings();
        let sortable;

        if(chosen == 'meta'){
            sortable = Object.keys(list).sort(function(a,b){return list[a.goal]-list[b.goal]});
        } else if (chosen == 'likes') {
            sortable = Object.keys(list).sort(function(a,b){return list[a.numberLikes]-list[b.numberLikes]});
        } else {
            sortable = Object.keys(list).sort(function(a,b){return list[a.date]-list[b.date]});
        }

        let chosens = [];

        for (i = 0; (i < 5) && (sortable.length > 0); i++) {
            chosens[i] = sortable[i];
          }

          for (let campaign in chosens) {
            const campaignCard = document.createElement('div')
            const paragraph = document.createElement("p")
            const anchor = document.createElement("a")
            anchor.setAttribute("href", `/#/campaign/${campaign.url}`)
            paragraph.innerHTML = campaign.name + " | Faltam: R$ " + (campaign.goal - campaign.raisedAmount) + " | Likes: " +campaign.numberLikes
            anchor.appendChild(paragraph)
            campaignCard.appendChild(anchor)
            $campaignsHome.appendChild(campaignCard)
         }



        

    }
}

export default HomePage;