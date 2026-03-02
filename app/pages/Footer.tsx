"use client"

import gsap, { SplitText } from "gsap/all";
import { motion } from "motion/react"
import { useEffect } from "react"
import MoveYAxisOnHover from "../components/motion/MoveYAxisOnHover";


export default function Footer({id}: {id: number}) {

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const description = new SplitText(".description", {
        type: "lines, chars",
        mask: "lines"
        });

        description.lines.forEach((line, index) => {
        const chars = new SplitText(line, { type: "chars" }).chars;

        gsap
            .timeline({
            scrollTrigger: {
                trigger: line,
                start: "top center",
                end: "bottom bottom",
                scrub: 0.3,
                markers: true
            }
            })
            .set(
            chars,
            {
                color: "#fff",
                stagger: 0.2,
                ease: "none"
            },
            0.1
            );
        });
    })

    return (

        <>
            <div  className=" w-full z-7 h-fit flex items-center justify-center   ">
                <motion.section  className="w-full h-full  flex flex-row justify-between items-center py-4   text-black! bg-white  px-5"
                    onHoverStart={() => {
                    const circleElement = document.getElementById("circle")
                    const innerCircle = document.getElementById("innercircle")

                    if(circleElement){
                        circleElement.style.borderColor = "black"
                        circleElement.style.borderWidth = "2px"
                    }
                    if(innerCircle){
                        innerCircle.style.backgroundColor = "black"

                    }
                    }}
                    onHoverEnd={() => {
                        const circleElement = document.getElementById("circle")
                        const innerCircle = document.getElementById("innercircle")

                        if(circleElement){
                            circleElement.style.borderColor = "white"
                            circleElement.style.borderWidth = "2px"

                        }
                        if(innerCircle){
                            innerCircle.style.backgroundColor = "white"
                        }
                    }}
                >
                    <div className="text-6xl font-bold">A.P</div>
                    
                    <div className="flex flex-row gap-15">
                        <div className="flex flex-col ">
                            <div className="text-lg mb-2">Contact</div>
                            <div className="text-gray-500 ">LinkedIn</div>
                            <div className="text-gray-500">GitHub</div>
                            <div className="text-gray-500">Email</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg mb-2">Links</div>
                            <div className="text-gray-500">About</div>
                            <div className="text-gray-500">Work</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg mb-2">Credits</div>
                            <div className="text-gray-500">© Ashutosh  {new Date().getFullYear()}</div>
                        </div>
                    </div>
                    
                </motion.section>
            </div>
        </>
    )
}