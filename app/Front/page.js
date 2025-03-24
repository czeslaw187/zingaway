'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../lib/features/frontSlice"
import NavBar from "../Components/NavBar"
import Image from "next/image"

export default function Front() {

    const dispatch = useDispatch()
    const prods = useSelector(state=>state.front)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    console.log(prods)

    return(
        <div className="h-screen relative">
            <Image src='/Background13.jpg' alt='Background1' layout='fill' objectFit='cover' quality={100} />
            <NavBar />
            <div className="text-xl text-center font-bold relative">{prods.error}</div>
        </div>
    )
}