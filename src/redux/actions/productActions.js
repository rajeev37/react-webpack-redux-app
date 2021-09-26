import { ActionTypes } from "../constants/actionTypes";
import productApi from "../../apis/productsApi";

export const fetchProductsApi = () => {
    return async function(dispatch, getState) {
        const response = await productApi.get("/products")
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
    }
}
export const fetchProductDetailsApi = (productId) => {
    return async function(dispatch, getState) {
        const response = await productApi.get(`/products/${productId}`)
        dispatch({type: ActionTypes.FETCH_PRODUCT_DETAILS, payload: response.data})
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}