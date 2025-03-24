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
    const [selected,setSelected] = useState(null)
    const cats = [...new Set(prods.products.map(el=>el.category))]
    const filtered = selected ? prods.products.filter((el)=>{return el.category === selected}) : []

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    useEffect(()=>{
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000);
    })
    return(
        <div className="min-h-screen relative">
            <Image src='/Background13.jpg' alt='Background1' layout='fill' objectFit='cover' quality={100} />
            <NavBar />
            <div className="text-xl text-center font-bold relative">{prods.error}</div>
            <CatNav cats={cats} setSelected={setSelected} />
            <ul className="relative">
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