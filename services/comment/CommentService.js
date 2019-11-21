import { API } from "../../const.js"

const url = API + "/v1/campaign"

class CommentService{

    static async createComment(comment, idCampaign){
        let response = await fetch(url +`/${idCampaign}/comment`, {
            method: 'POST',
            body: JSON.stringify({comment},{idCampaign}),
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

    static async reply(comment, idComment){
        let response = await fetch(url + `/${idComment}`, {
            method: 'POST',
            body: JSON.stringify({comment}),
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

    static async delete(idComment){
        let response = await fetch(url + `/${idComment}`, {
            method: 'DELETE',
            body: JSON.stringify({idComment}),
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

export default CommentService