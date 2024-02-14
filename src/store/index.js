import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import counterReducer from "./slices/counterSlice"

const store = configureStore({
    reducer: {
        productReducer,
        counterReducer
    }
})

export default store