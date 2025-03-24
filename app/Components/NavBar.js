'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Offcanvas } from "react-bootstrap";
import { Henny_Penny } from "next/font/google";

const henpen = Henny_Penny({
    subsets:['latin'],
    weight: '400'
})

export default function NavBar() {

    const [show,setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }

    function handleOpen() {
        setShow(true)
    }

    return(
        <div className="w-screen h-[4rem] flex justify-between place-content-baseline place-items-center px-2 relative">
            <Link href={'/Main'} className={`text-5xl font-bold text-amber-600 ${henpen.className}`}>Zingaway</Link>
            <Button variant='outline-dark' onClick={()=>{handleOpen()}}>
                <FontAwesomeIcon icon={faBars} size="2xl"/>
            </Button>
            <Offcanvas show={show} onHide={()=>{handleClose()}} placement='end'>
                <Offcanvas.Header className='bg-slate-600 text-white' closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-gradient-to-bl from-sky-100 to-cyan-50'>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}