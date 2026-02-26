"use client"

import { motion } from "motion/react"
import kakhani from "../images/kakhani.png"
import anyani from "../images/anyani.png"
import heroeshive from "../images/heroeshive.png"
import Image, { StaticImageData } from "next/image"

const projects = [
    {
        title: "Heroeshive",
        image: heroeshive,
        url: "https://heroeshive.com/",
        description: "A creative service platform delivering scalable branding, digital systems, and high-performance web experiences."
    },
    {
        title: "Ka Khani",
        image: kakhani,
        url: "https://kakhani.netlify.app/",
        description: "A restaurant review platform where user submissions are analyzed and automatically rated using NLP-driven sentiment modeling."
    },
    {
        title: "Any Ani",
        image: anyani,
        url: "https://anyani.netlify.app/",
        description: "An AI-powered animated image generator built on a ResNet-18 neural network architecture."
    }
]

function ProjectCard({
    title,
    image,
    description,
    url,
}: {
    title: string
    image: StaticImageData
    description: string
    url: string
}) {
    return (
        <motion.a
            href={url}
            target="_blank"
            whileHover={{ scale: 1.03 }}

        onHoverStart={() => {
            const circleElement = document.getElementById("circle")
            const innerCircle = document.getElementById("innercircle")

            if(circleElement){
                circleElement.style.borderColor = "#3e4ab299"
                circleElement.style.borderWidth = "4px"
            }
            if(innerCircle){
                innerCircle.style.backgroundColor = "#3e4ab299"

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

        
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-row items-center text-center gap-6 flex-row-reverse cursor-pointer"
        >
            <div className="relative w-[400px] max-w-[90vw]">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover rounded-xl   w-full h-auto"
                />
            </div>

            <div className="flex flex-col justify-end  text-left w-[250px]  tracking-tight">

                <h2 className="font-elegant text-4xl mb-2">
                    {title}
                </h2>
                <span className="text-gray-400 text-sm leading-tight">{description}</span>
            </div>
        </motion.a>
    )
}

export default function ProjectSection({id}: {id: number}) {
    return (
        <section  className="w-full z-4 bg-[#0a0a0a] text-white border-t border-gray-700">

            {/* HEADER */}
            <div className=" text-left min-h-fit pt-30 pb-20 flex flex-col justify-center items-left  px-6">
                <div className="max-w-2xl">
                    <h1 className="font-elegant text-6xl mb-2">
                        My Work
                    </h1>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Designing and engineering scalable digital systems —
                        from high-performance frontends to intelligent backend
                        architectures powered by data and AI.
                    </p>
                </div>
            </div>

            {/* PROJECTS */}
            <div className="flex flex-col  w-full pb-30  gap-25">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={index %2 === 0? "min-h-fit w-full items-center justify-center flex md:items-end md:justify-end px-6" : "min-h-fit w-full flex md:items-center md:justify-center px-6"}
                    >
                        <ProjectCard
                            description={project.description}
                            title={project.title}
                            image={project.image}
                            url={project.url}
                        />
                    </div>
                ))}

            </div>
        </section>
    )
}