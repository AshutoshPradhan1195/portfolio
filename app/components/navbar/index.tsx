"use client"
import React, { useEffect, useLayoutEffect, useState } from "react";
import MoveYAxisOnHover from "../motion/MoveYAxisOnHover";
import { motion } from "motion/react";
import gsap from "gsap/all";


function Navbar(){
    return (
        <nav className="z-40 w-full h-13 xl:px-10 px-5 pt-4 pb-4 box-border  top-0 flex flex-row justify-between items-center navbg" >
            <motion.a href={"/"} className="border p-1 px-2 hover:cursor-pointer font-timesnewroman ">
                AP
            </motion.a>  
            <QuickLinks/>
           
        </nav>
    )
}

function QuickLinks(){
    

    const [isHome, setIsHome] = useState(true)

    useLayoutEffect(() =>{
        window.location.pathname === "/" ? setIsHome(true) : setIsHome(false)
    }, [])
    
    return(
        <div className="flex flex-row items-center md:gap-5 gap-3 text-xs  ">

            {isHome ? 
                <>
                    <MoveYAxisOnHover y={-2}>
                        <motion.a onClick={() => {
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: "#projectContainer",
                                })
                            }}         
                        className="hover:cursor-pointer">
                            Projects
                        </motion.a>
                    </MoveYAxisOnHover>
                    
                    <div className="text-gray-500">;</div>
                    <MoveYAxisOnHover y={-2}>
                        <motion.a onClick={() => {
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: "#aboutContainer",
                                })
                            }}         
                        className="hover:cursor-pointer">
                            About
                        </motion.a>
                    </MoveYAxisOnHover>
                </>
                :
                <>
                    <MoveYAxisOnHover y={-2}>
                        <motion.a href="/"         
                        className="hover:cursor-pointer">
                            Home
                        </motion.a>
                    </MoveYAxisOnHover>
                </>
            }
        
            <div className="text-gray-500">;</div>
            <MoveYAxisOnHover y={-2}>
                <motion.a href="/timeline" className="hover:cursor-pointer">Timeline</motion.a>
            </MoveYAxisOnHover>

            
            <div className="text-gray-500">;</div>
            <MoveYAxisOnHover y={-2}>
                <motion.a href="/blog" className="hover:cursor-pointer">Blog</motion.a>
            </MoveYAxisOnHover>
        </div>

    )
}

export default React.memo(Navbar);