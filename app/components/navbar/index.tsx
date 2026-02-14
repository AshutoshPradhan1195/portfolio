"use client"
import React from "react";
import MoveYAxisOnHover from "../motion/MoveYAxisOnHover";


function Navbar(){
    return (
        <nav className="z-40 w-full h-13 px-5 pt-4 box-border sticky top-0 flex flex-row justify-between items-center navbg">
            <div className="border p-1 px-2 hover:cursor-pointer font-timesnewroman ">
                AP
            </div>  
            <QuickLinks/>
           
        </nav>
    )
}

function QuickLinks(){
    return(
        <div className="flex flex-row items-center md:gap-5 gap-3 text-xs">
            <MoveYAxisOnHover y={-2}>Projects</MoveYAxisOnHover>
            <div className="text-gray-500">;</div>
            <MoveYAxisOnHover y={-2}>About</MoveYAxisOnHover>
            <div className="text-gray-500">;</div>
            <MoveYAxisOnHover y={-2}>Timeline</MoveYAxisOnHover>
        </div>

    )
}

export default React.memo(Navbar);