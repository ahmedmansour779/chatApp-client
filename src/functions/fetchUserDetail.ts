import axios from "axios"
import { api } from "../api"

export const fetchUserDetails = async () => {

    try {
        const URL = `${api}/api/user-details`
        const response = await axios({
            url: URL,
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log("error", error)
    }
}