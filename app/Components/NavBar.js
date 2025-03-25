'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";
import { Henny_Penny, Emblema_One } from "next/font/google";
import { useSelector } from "react-redux";
import CartList from "./CartList";

const henpen = Henny_Penny({
    subsets:['latin'],
    weight: '400'
})

const emblema = Emblema_One({
    subsets:['latin'],
    weight: '400'
})

export default function NavBar() {

    const [show,setShow] = useState(false)
    const prods = useSelector(state=>state.front)
    const total = prods.cart.length > 0 ? prods.cart.map(el=>el.price).reduce((a,b)=>{return a + b}) : 0

    function handleClose() {
        setShow(false)
    }

    function handleOpen() {
        setShow(true)
    }

    function sendOrder() {
        console.log(prods.acivePage)
    }

    return(
        <div className="w-screen h-[4rem] flex justify-between place-content-baseline place-items-center pl-2 pr-4 pt-2 relative">
            <Link href={'/Main'} className={`text-5xl font-bold text-amber-600 ${henpen.className}`}>Zingaway</Link>
            <div className="flex place-items-baseline">
                <div className="md:mr-10">
                    <FontAwesomeIcon icon={faShoppingCart} size="2xl" />
                    <sub className="text-2xl font-bold mr-1">{prods?.cart.length}</sub>
                </div>
                <button className="w-[5rem] h-[4rem] border-3 border-black rounded-md transition duration-200 ease-out hover:text-white hover:bg-black" 
                        onClick={()=>{handleOpen()}}>
                    <FontAwesomeIcon icon={faBars} size="2xl"/>
                </button>
            </div>
            
            <Offcanvas show={show} onHide={()=>{handleClose()}} placement='end'>
                <Offcanvas.Header className='bg-slate-600 text-white' closeButton>
                    <Offcanvas.Title>Summary</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-gradient-to-bl from-sky-100 to-cyan-50'>
                    <CartList />
                    <div className="text-right tex-xl font-bold">Total £{total}</div>
                    <div className="text-center">
                        <button className={`w-[50%] p-3 mx-auto border-1 border-sky-300 text-2xl font-bold rounded-md hover:bg-sky-500 active:bg-sky-300 ${emblema.className}`}
                                onClick={()=>{sendOrder()}}>
                            Send
                        </button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
//  hidden={prods?.cart.length > 0 ? false : true }