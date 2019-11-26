import { API } from "../../const.js"

const url = API + "/v1/campaign"

class DonationService{
    static async donate(idCampaign,value){
        let response = await fetch(url + `/${idCampaign}/donation`,{
            method: 'POST',
            body: JSON.stringify({value}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        
        return response
    }
}

export default DonationService