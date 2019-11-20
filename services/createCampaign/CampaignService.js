import { API } from "../../const.js"

const url = API + "/v1/campaign"

class CampaignService{
    
    static async createCampaign(campaign){
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(campaign),
            headers : {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        if(response.ok){
            const body = await response.json()
            const token = body.token
            localStorage.setItem("token", token)
        }
        return response
    }
}

export default CampaignService