import { API } from "../../const.js"

const url = API + "v1/profile"

class ProfileService{
    static async profile(email){
        let response = await fetch(url + `/${email}`,{
            method: 'GET',
            body: JSON.stringify(userProfile),
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

export default ProfileService