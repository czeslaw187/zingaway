import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchProducts =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchProducts').then((resp)=>{
        console.log(resp.data,'actions')
        dispatch(getProducts(resp.data.data))
        dispatch(setError(resp.data.message))
    })
}