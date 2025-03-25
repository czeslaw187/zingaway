import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    cart: [],
    orders: [],
    activePage: '',
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
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            let arr = state.cart.filter((el)=>{return el.id !== action.payload})
            state.cart = arr
        },
        getOrders: (state, action) => {
            state.orders = action.payload
        },
        setPage: (state, action) => {
            state.activePage = action.payload
        }

    }
})

export const {getProducts, getCart, setError, addToCart, removeFromCart, setPage} = frontSlice.actions
export default frontSlice.reducer

export const fetchProducts =()=> async dispatch => {
    dispatch(setError('Fetching items...'))
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchProducts').then((resp)=>{
        console.log(resp.data,'actions')
        dispatch(getProducts(resp.data.data))
        dispatch(setError(resp.data.message))
    })
}

export const fetchOrders =()=> async dispatch => {
    dispatch(setError('Fetchin orders...'))
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchOrders').then((resp)=>{
        dispatch(getOrders(resp.data.data))
        dispatch(setError(resp.data.message))
    })
}