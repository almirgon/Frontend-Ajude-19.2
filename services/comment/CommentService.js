import { API } from "../../const.js"

const url = API + "/v1/campaign"

class CommentService{

    static async createComment({text, idCampaign}){
        let response = await fetch(url +`/${idCampaign}/comment`, {
            method: 'POST',
            body: JSON.stringify({text}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }

        })
        return response.json()
    }

    static async reply({text, idComment, idCampaign}){
        let response = await fetch(url +`/${idCampaign}/comment/${idComment}`, {
            method: 'POST',
            body: JSON.stringify({text}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json()
    }

    static async delete({idComment,idCampaign}){
        console.log("ta pegando")
        let response = await fetch(url +`/${idCampaign}/comment/${idComment}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        return response.json()
    }
}

export default CommentService