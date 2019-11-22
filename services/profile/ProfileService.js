import { API } from "../../const.js"

const url = API + "/v1/profile"

class ProfileService{
    static async profile(email){
        let response = await fetch(`${url}/${email}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        return response.json()
    }

}

export default ProfileService