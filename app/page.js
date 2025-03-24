'use client'

import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  useEffect(()=>{
    setTimeout(() => {
        router.push('/Main')
    }, 3000);
},[])

  return (
    <div className="relative h-screen">
      <Image src='/Background25.jpg' alt='Background1' layout='fill' objectFit='cover' quality={100} />
      <NavBar />
    </div>
  );
}
