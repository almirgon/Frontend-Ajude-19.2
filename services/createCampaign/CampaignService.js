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

    static async getByUrl(url){
        let response = await fetch(url + `/buscar/${url}`,{
            method: 'GET',
            body: JSON.stringify(url),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response
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
        
        if(response.ok){
            const body = await response.json()
            const token = body.token
            localStorage.setItem("token", token)
        }
        return response

    }

    static async getBySubstring(campaign){
        let response = await fetch(url + `/search/${campaign}`,{
            method: 'GET',
            body: JSON.stringify(campaign),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response

    }

    static async getAllCampaings(campaign){
        let response = await fetch(url, {
            method: 'GET',
            body: JSON.stringify(campaign),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response
    }

}

export default CampaignService