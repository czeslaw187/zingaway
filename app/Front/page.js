'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, setError } from "../lib/features/frontSlice"
import NavBar from "../Components/NavBar"
import Image from "next/image"
import CatNav from "./Components/CatNav"
import ProductItem from "./Components/ProductItem"

export default function Front() {

    const dispatch = useDispatch()
    const prods = useSelector(state=>state.front)
    const cats = [...new Set(prods.products.map(el=>el.category))]
    const filtered = prods.activePage ? prods.products.filter((el)=>{return el.category === prods.activePage}) : []

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    useEffect(()=>{
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000);
    })
    console.log(prods.cart)
    return(
        <div className="min-h-screen relative">
            <Image src='/Background11.jpg' alt='Background1' layout='fill' objectFit='cover' quality={100} />
            <NavBar />
            <div className="text-xl text-center font-bold relative">{prods.error}</div>
            <CatNav cats={cats} />
            <ul className="relative pl-0 grid grid-cols-5 justify-items-center">
                {
                    filtered && filtered.map((el,id)=>{
                        return(
                            <ProductItem key={id} el={el} />
                        )
                    })
                }
            </ul>
        </div>
    )
}