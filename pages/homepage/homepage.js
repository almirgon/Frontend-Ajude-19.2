import CampaignService from "../../services/campaign/CampaignService.js";

let HomePage = {
    render: async () => /*html*/ `
    <main class="wrap">
       <nav-bar id="nav-bar"></nav-bar>
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
        let $rank = document.getElementById("rank");
        let chosen = $rank.options[$rank.selectedIndex].innerHTML;

        let campaings = CampaignService.getAllCampaings();
        

    }
}

export default HomePage;