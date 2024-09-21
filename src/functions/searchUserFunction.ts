import axios, { AxiosResponse } from "axios"
import { toast } from "react-toastify"
import { api } from "../api"
import { responseSearchInterface } from "../types/requestTypes"

interface handleSearchUserProps {
    searchValue: string,
}

export const handleSearchUser = async ({ searchValue }: handleSearchUserProps) => {
    const URL = `${api}/api/search-user`
    try {
        const response: AxiosResponse<responseSearchInterface> = await axios.post(URL, {
            search: searchValue
        })

        return response

    } catch (error) {
        toast.error("not found")
    }
}