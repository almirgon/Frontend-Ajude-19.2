class CampaignCard extends HTMLElement{
    constructor(){
        super();
        this.$shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAtributes(){
        return ['name', 'likes', 'status', 'url']
    }

    connectCallBack() {
        this.likes = eval(this.getAttribute('likes'))
        this.name = eval(this.getAttribute('name'))
        this.status = eval(this.getAttribute('status'))
        this.url = eval(this.getAttribute('url'))

        this.render()
    }

    render(){
        this.innerHTML = `
        ${this.getStyle()}
            <div> 
                <h1> ${this.name} </h1>
                <p> ${this.likes} </p>
                <p> ${this.status} </p>
            </div>
        `
    }

    getStyle() {
        return ` 
            <style> 
                div {
                    background-color: #ffffff;
                    border-radius: 25px;
                    box-shadow: 0 8px 16px 0 rgba(229, 233, 242, 3.0);
                    padding: 10px;
                    width: 100px;
                    height: 100px;
                }
            </style>
        `
    }
}

window.customElements.define('campaign-card', CampaignCard);