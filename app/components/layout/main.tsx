"use client"
import { useEffect } from "react";
import Navbar from "../navbar";
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    //smooth scroll 
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,      
        })
    }, [])

    return (
        
            <div id="smooth-wrapper" className="flex flex-col justify-center max-w-7xl w-full! select-none  h-full! items-center">
            <Navbar/>
            <div id="smooth-content" className="w-full! h-full!">
                {children}
            </div>
            </div>
    )
}   