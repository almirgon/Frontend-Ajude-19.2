import { API } from "../../const.js"

const url = API + "/auth/login"

class LoginService{
    static async login(user){
        let response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(user),
            headers : {
                'Content-Type': 'application/json',
                //'Authorization': localStorage.getItem('token')
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

export default LoginService