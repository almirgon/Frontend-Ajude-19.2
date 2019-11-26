import { API } from "../../const.js"

const url = API + "/auth/login"

class LoginService{
    static async login(user){
        let response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(user),
            headers : {
                'Content-Type': 'application/json',
            }
        })
        if(response.ok){
            const body = await response.json()
            const token = body.token
            localStorage.setItem("token", token)
        }

        return response
    }

    static async getUser() {
        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload);
        };

        return parseJwt(localStorage.getItem('token'))
    }
}

export default LoginService