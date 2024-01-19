import { BASE_URL, GET_CATEGORIES, GET_PRODUCTS } from "./constants";

export const fetcher = async (url) => {
    let responseObj = { errorMsg: '', data: [] }
    try {
        const response = await fetch(BASE_URL + url)
        responseObj.errorMsg = '';
        responseObj.data = await response.json();

    } catch (error) {
        responseObj.errorMsg = error.message;
    }
    return responseObj;
}

export const getCategories = () => {
    return fetcher(GET_CATEGORIES);
}

export const getProducts = (id) => {
    return fetcher(GET_PRODUCTS(id));
}