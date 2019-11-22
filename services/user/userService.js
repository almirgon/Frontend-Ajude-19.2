import { API } from "../../const.js"

const url = API + "/v1/users"
class userService{

    static async createUser(user) {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response
    }

}

export default userService