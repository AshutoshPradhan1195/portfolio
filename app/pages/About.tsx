"use client"

import gsap, { SplitText } from "gsap/all";
import { motion } from "motion/react"
import { useEffect } from "react"
import MoveYAxisOnHover from "../components/motion/MoveYAxisOnHover";


export default function AboutSection({id}: {id: number}) {

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const description = new SplitText(".description", {
        type: "lines, chars",

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
    })

    return (

        <section id="aboutContainer" className=" w-full z-6 min-h-screen flex items-center justify-center  ">
            <motion.section  className="w-full h-full flex flex-col py-10 justify-center bg-[#0a0a0a] rounded-4xl! xl:px-10 px-5 overflow-hidden ">
                <div className="max-w-2xl">
                    <h1 className="md:text-6xl text-4xl font-medium font-elegant">About me</h1>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Little bit about me, my background, and how I approach building things.
                    </p>
                </div>
                <h1 className="description md:text-4xl sm:text-2xl text-xl mt-12 font-normal  text-gray-500 leading-tight ">
                    Hi! I'm Ashutosh. I'm a Software Engineer who enjoys building structured, scalable digital systems. 
                    I care about building things. 
                    I care about building things the right way, so that they last. 
                    Learning new things along the way, that's what it's all about.                         
                </h1>

                <div className="w-fit mt-10">
                    <MoveYAxisOnHover y={-4}>
                        <motion.a href="/timeline" className="w-fit p-2 md:text-2xl sm:text-xl text-lg bg-gray-100 text-black rounded-xl">
                            Check my timeline
                        </motion.a>
                    </MoveYAxisOnHover>
                </div>


                
            </motion.section>
        </section>
    )
}