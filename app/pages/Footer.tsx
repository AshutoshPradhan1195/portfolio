"use client"

import gsap, { SplitText } from "gsap/all";
import { motion } from "motion/react"
import { useEffect } from "react"

import MoveYAxisOnHover from "../components/motion/MoveYAxisOnHover";


export default function Footer() {

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
    }, [])

    return (

        <>
            <div  className=" w-full z-7 h-fit flex items-center justify-center border-t border-gray-300 bg-white">
                <motion.section  className="w-full h-full flex md:flex-row flex-col justify-between items-center md:gap-2 gap-2 py-4  text-black!   xl:px-10 px-5"
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
                    <div className="text-8xl font-bold ">A.P.</div>
                    
                    <div className="flex flex-row gap-15 max-md:text-left">
                        <div className="flex flex-col ">
                            <div className="text-lg mb-2 ">Contact</div>
                            <motion.a 
                                href="https://www.linkedin.com/in/ashutosh-pradhan-61844231b/"
                                target="_blank"
                                className="hover:cursor-pointer py-1 text-gray-500" 
                                whileHover={{translateY:-2, textDecoration:"underline"}} 
                            >
                                LinkedIn
                            </motion.a>
                            <motion.a 
                                href="https://github.com/AshutoshPradhan1195"
                                target="_blank"
                                className="hover:cursor-pointer py-1 text-gray-500" whileHover={{translateY:-2, textDecoration:"underline"}} >
                                GitHub
                            </motion.a>
                            <motion.a 
                                href="mailto:aashutoshpradhan1@gmail.com"
                                target="_blank"
                                className="hover:cursor-pointer py-1 text-gray-500" 
                                whileHover={{translateY:-2, textDecoration:"underline"}} >
                                Email
                            </motion.a>
                            
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg mb-2">Links</div>
                            <motion.a 
                                href="#aboutContainer"
                                onClick={() => {
                                    gsap.to(window, {
                                        duration: 1,
                                        scrollTo: "#aboutContainer",
                                    })
                                }}                                
                                className="hover:cursor-pointer py-1 text-gray-500" 
                                whileHover={{translateY:-2, textDecoration:"underline"}} 
                            >
                                About
                            </motion.a>
                            <motion.a 
                                href="#projectContainer" 
                                onClick={() => {
                                    gsap.to(window, {
                                        duration: 1,
                                        scrollTo: "#projectContainer",
                                    })
                                }}       
                                className="hover:cursor-pointer py-1 text-gray-500" 
                                whileHover={{translateY:-2, textDecoration:"underline"}} 
                            >
                                Work
                            </motion.a>

                        </div>
                    </div>
                    
                </motion.section>
            </div>
        </>
    )
}