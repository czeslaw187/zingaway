import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    error: ''
}

export const frontSlice = createSlice({
    name: 'front',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getCart: (state, action) => {
            state.cart = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {getProducts, getCart, setError} = frontSlice.actions
export default frontSlice.reducer