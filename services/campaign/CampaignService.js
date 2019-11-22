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

        return response
    }

    static async getByUrl(id){
        let response = await fetch(url + `/buscar/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.json()
    }

    static async toLike(idCampaign){
        let response = await fetch(url + `/${idCampaign}/like`,{
            method: 'POST',
            body: JSON.stringify(idCampaign),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        
        return response

    }

    static async getBySubstring(campaign){
        let response = await fetch(`${url}/search/${campaign}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response

    }

    static async getAllCampaings(campaign){
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response
    }

}

export default CampaignService