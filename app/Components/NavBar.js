'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Offcanvas } from "react-bootstrap";

export default function NavBar() {

    const [show,setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }

    function handleOpen() {
        setShow(true)
    }

    console.log(show)
    return(
        <div className="w-screen h-[4rem] flex justify-between place-content-baseline place-items-center text-white px-2">
            <Link href={'/'} className="text-2xl font-bold no-underline text-white">Zingaway</Link>
            <Button variant='outline-light' onClick={()=>{handleOpen()}}>
                <FontAwesomeIcon icon={faBars} size="2xl"/>
            </Button>
            <Offcanvas show={show} onHide={()=>{handleClose()}} placement='end'>
                <Offcanvas.Header className='bg-slate-600 text-white' closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-zinc-700'>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}