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
        return response
    }

    static async reply({text, idComment, idCampaign}){
        let response = await fetch(`${url}/${idCampaign}/comment/${idComment}`, {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        return response
    }

    static async delete({idComment,idCampaign}){
        let response = await fetch(`${url}/${idCampaign}/comment/${idComment}`, {
            method: 'DELETE',
            body: JSON.stringify({idComment}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        return response
    }
}

export default CommentService