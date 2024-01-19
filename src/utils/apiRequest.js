import { BASE_URL } from "./constants";

export const fetcher = async (url) =>{
    const response = await fetch(BASE_URL + url)
    return response.json()
}