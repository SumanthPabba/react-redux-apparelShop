import { ActionTypes } from "../constants/actionTypes"

const initialState1 = {
    products : [],
}

// const initialState2 = {
//     selectedProduct : [],
// }

export const productReducer = (state = initialState1, action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload};
        
        default: return state
    }

}

export const selectedProductReducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: return state
    }
}