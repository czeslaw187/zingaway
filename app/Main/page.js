import Link from "next/link";
import NavBar from "../Components/NavBar";
import { Rubik_Mono_One, Luckiest_Guy, Bangers } from "next/font/google";

const grupo = Bangers({
    subsets:['latin'],
    weight:'400'
})

export default function Main() {

    return(
        <div className='relative'>
            <NavBar />
            <ul className={`w-screen pl-0 grid grid-cols-1 md:grid-cols-2 mt-32 justify-around place-items-center ${grupo.className}`}> 
                <li className='w-[22rem] h-[22rem] flex place-items-center justify-center text-black text-5xl font-bold shadow-xl shadow-black transition duration-300 ease-out hover:scale-110 active:animate-ping'>
                    <Link href={'#'} className="no-underline text-inherit text-center">
                        Front of House
                    </Link>
                </li>
                <li className='w-[22rem] h-[22rem] flex place-items-center justify-center text-black text-5xl font-bold shadow-xl shadow-black transition duration-300 ease-out hover:scale-110 active:animate-ping'>
                    <Link href={'#'} className="no-underline text-inherit text-center">
                        Back of House
                    </Link>
                </li>
            </ul>
        </div>
    )
} 