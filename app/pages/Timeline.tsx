"use client"

import gsap, { SplitText } from "gsap/all";
import { motion } from "motion/react"
import { useEffect } from "react"
import MoveYAxisOnHover from "../components/motion/MoveYAxisOnHover";


export default function TimelineSection({id}: {id: number}) {

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
            <div  className=" w-full z-6 h-full flex items-center justify-center bg-[#0a0a0a] rounded-4xl!  ">
                <motion.section  className="w-full h-full flex flex-col  py-10   justify-center  px-5 overflow-hidden ">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl font-medium font-elegant">About me</h1>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Little bit about me, my background, and how I approach building things.
                        </p>
                    </div>

                    <h1 className="description text-3xl mt-12  text-gray-500 leading-tight ">
                        I’m a Software Engineer who enjoys building structured, scalable digital systems. 
                        I focus on creating products that are not only functional, but thoughtfully designed and engineered for long-term reliability.

                        <br/><br/> 
                        My work spans frontend experiences, backend architecture, and intelligent systems — always with an emphasis on clarity, performance, and maintainability. 
                        I’m drawn to complex problems that require both technical depth and careful system design. Whether improving workflows, designing distributed platforms, or integrating intelligent features, 
                        I aim to build solutions that feel seamless and purposeful. 
                        
                        <br/><br/> 
                        I care about building things. 
                        I care about building things the right way, so that they last. 
                        Learning new things along the way, that's what it's all about.                         
                    </h1>

                    <div className="w-fit mt-10">
                        <MoveYAxisOnHover y={-10}>
                            <div className="w-fit p-2 text-2xl bg-gray-100 text-black rounded-xl">
                                Check my resume
                            </div>
                        </MoveYAxisOnHover>
                    </div>


                    
                </motion.section>
            </div>
        </>
    )
}