import CampaignService from "../../services/campaign/CampaignService.js";

class RenderCampaign extends HTMLElement{
   constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.base();
        let $canvas = document.getElementById('campaigns');

        let $busca = document.getElementById("busca");
        $busca.addEventListener("input", () => {
          if($busca.value != ""){
            if (document.getElementById("all").value == 'on') {
                $canvas.innerText = "";
                this.renderAll($busca.value);
            } else {
                $canvas.innerText = "";
                this.renderFew($busca.value);
            }
          } else {
            $canvas.innerText = "";
          }
        }); 

    }

    base() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/renderCampaign.css">
            <div>
              <input type = "text" id = "busca" placeholder="Digite sua busca"></input> 
              <input type="checkbox" id="all">Deseja ver todas as campanhas?</input>
              <section id="campaigns"></section>
            </div>`;
    }

    renderAll(busca) {
        let $canvas = document.getElementById('campaigns');

        let campaign = busca;
        let campaigns = await CampaignService.getBySubstring(campaign);

        for (item of campaigns) {
            let $d = document.createElement("ul", { is: "campaign-card" });
            $d.is.setAttribute("likes", item.likes);
            $d.is.setAttribute("name", item.name);
            $d.is.setAttribute("status", item.status);
            $d.is.setAttribute("url", item.url);
    
            $canvas.appendChild($d);
        }


    }

    renderFew(busca) {
      let $canvas = document.getElementById('campaigns');

      let campaign = busca;
      let campaigns = await CampaignService.getBySubstring(campaign);

      for (item of campaigns) {
        if (item.status == "Ativa")
          let $d = document.createElement("ul", { is: "campaign-card" });
          $d.is.setAttribute("likes", item.likes);
          $d.is.setAttribute("name", item.name);
          $d.is.setAttribute("status", item.status);
          $d.is.setAttribute("url", item.url);
  
          $canvas.appendChild($d);
      }
  }
}

window.customElements.define('renderCampaign', CampaignService);