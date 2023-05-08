import fakeStoreApi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/actionTypes"

export const fetchProducts = () => 

    // const response = await axios.get("/products");
    // console.log(response)
    // return {
    //     type: ActionTypes.FETCH_PRODUCTS,
    //     payload: response
    // }

    async (dispatch) => {
        const response = await fakeStoreApi.get("/products")
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data,
        })
    }

export const fetchProduct = (id) =>  async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`)
    dispatch({
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: response.data
    })
}


// export const setProducts = (products) => {
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload : products,
//     }

// }

// export const selectProducts = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCTS,
//         payload : product,
//     }

// }

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addProduct = (product) => {
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const delProduct = (product) => {
    return{
        type: ActionTypes.DEL_PRODUCT,
        payload: product
    }
}