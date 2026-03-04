"use client"

import { motion } from "motion/react"
import Image, { StaticImageData } from "next/image"
import gsap, { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"

const projects = [
    {
        title: "Heroeshive",
        image: "heroeshive.png",
        url: "https://heroeshive.com/",
        description: "Heroeshive is a full-scale creative service platform built to help startups and growing brands establish powerful digital identities. It combines strategic branding, scalable design systems, and high-performance web engineering to deliver cohesive, conversion-focused experiences. From visual identity creation to frontend architecture and backend system design, the platform emphasizes clean UI, optimized performance, and long-term maintainability."
    },
    {
        title: "KaKhani",
        image: "kakhani.png",
        url: "https://kakhani.netlify.app/",
        description: "KaKhani is an intelligent restaurant discovery and review platform that enhances user feedback through automated NLP-based sentiment analysis. Instead of relying solely on manual ratings, the system processes written reviews, evaluates tone and context, and generates dynamic scoring based on language patterns. Built with a focus on data-driven insights and user engagement, the platform merges social interaction with machine learning to provide more accurate and meaningful restaurant evaluations."
    },
    {
        title: "AnyAni",
        image: "anyani.png",
        url: "https://anyani.netlify.app/",
        description: "AnyAni is an AI-powered animated image generation system built on a ResNet-18 neural network architecture. It leverages deep learning techniques to transform static visual inputs into stylized animated outputs, demonstrating the integration of computer vision and generative modeling. The project explores neural feature extraction, training pipelines, and inference optimization, showcasing how lightweight convolutional architectures can be adapted for creative AI applications."
    }
]

function ProjectCard({
    title,
    image,
    description,
    url,
}: {
    title: string
    image: string
    description: string
    url: string
}) {
    return (
        <a
            href={url}
            target="_blank"
            id={title}
            className="group relative md:w-[70vw] w-[90vh] h-[70vh]  cursor-pointer border rounded-xl"
        >
            <div className="relative w-full h-full perspective">

                <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden  text-white flex flex-col">
                        <div className="relative w-full flex-1">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>

                    </div>

                    <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl bg-[#0a0a0a] text-white  p-10 flex flex-col justify-center">
                        <h2 className="font-elegant text-4xl font-bold mb-6">
                            {title}
                        </h2>

                        <p className="text-sm leading-relaxed">
                            {description}
                        </p>

                        <span className="mt-8 text-sm uppercase tracking-widest hover:underline">
                            Visit Project →
                        </span>
                    </div>

                </div>
            </div>
        </a>
    )
}
export default function ProjectSection({id}: {id: number}) {
    useEffect(() => {

        const cards = gsap.utils.toArray<HTMLElement>("[data-project]")

        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top top",
                end: index === 0 ? "+=320%" : index === 1 ? "+=200%" : "+=100%"  ,
                pin: true,
                pinSpacing: false,
                scrub: true,
                
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    

    return (

        <section id="projectContainer" className="w-full z-4 h-full  flex items-center justify-center ">

            <motion.section  className=" w-full h-full items-center rounded-4xl justify-center xl:px-10 px-5  overflow-hidden bg-white text-black!  "
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

                {/* HEADER */}
                <div className="text-left py-10   flex flex-col justify-center items-left">
                    <div className="max-w-2xl">
                        <h1 className="font-elegant md:text-6xl text-4xl mb-2 font-bold">
                            Selected Work
                        </h1>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Designing and engineering scalable digital systems —
                            from high-performance frontends to intelligent backend
                            architectures powered by data and AI.
                        </p>
                    </div>
                </div>

                {/* PROJECTS */}
                <div className="flex flex-col h-full! w-full   gap-25">

                    {projects.map((project, index) => (
                    <div
                        key={index}
                        data-project
                        className="h-screen w-full flex items-center justify-center md:px-5 "
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
            </motion.section>
        </section>

    )
}