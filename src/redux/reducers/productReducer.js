import { ActionTypes } from "../constants/actionTypes"


const initialState1 = {
    products: [],
}

const cart = [];

// const initialState2 = {
//     selectedProduct : [],
// }

export const productReducer = (state = initialState1, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        default: return state
    }

}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...action.payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: return state
    }
}

export const cartReducer = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            // Check if Product is Already Exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        case ActionTypes.DEL_PRODUCT:
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
}