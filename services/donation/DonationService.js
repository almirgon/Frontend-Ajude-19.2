import { API } from "../../const.js"

const url = API + "v1/campaign"

class DonationService{
    static async donate(idCampaign,donation){
        let response = await fetch(url + `/${idCampaign}/donation`,{
            method: 'POST',
            body: JSON.stringify({donation}),
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
}

export default DonationService