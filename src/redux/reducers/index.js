import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    // selectedProduct: selectedProductReducer,
    product:selectedProductReducer,
})

export default reducers