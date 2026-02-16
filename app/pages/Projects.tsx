"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image, { StaticImageData } from "next/image"
import imageas from "../../public/HA_A6HIWAAEoqDs.jpg"
import kakhani from "../images/kakhanii.png"
import anyani from "../images/anyani.png"



const data = [
    {
        title:"Ka Khani",
        image:kakhani,
        width:500,
        height:500,
        url:"https://kakhani.netlify.app/"
    },
    {
        title:"Any Ani",
        image:anyani,
        width:600,
        height:600,
        url:"https://anyani.netlify.app/"
    },
    // {
    //     title:"Heroeshive",
    //     image:anyani,
    //     width:600,
    //     height:600,
    //     url:"https://anyani.netlify.app/"
    // },
]

export default function ProjectsSection({ id }: { id: number }) {
    const projectsRef = useRef(null)
    return (
        <>  
            <motion.section  className="w-full  border-t border-gray-700 max-w-7xl h-screen! container place-items-center justify-center self-center items-center sticky! top-0 z-0">

                <AppearIn>
                    <motion.div className="checkitoutbg  md:p-40 md:py-40 p-30 px-20 z-50 text-center justify-center items-center flex flex-col self-center" >
                        <h1 className="text-5xl tracking-tight font-timesnewroman text-center justify-center items-center flex flex-col">
                            Check out my work!
                        </h1>
                    </motion.div>
                </AppearIn>
            </motion.section>
            <Projects ref={projectsRef}/>
        </>
    )
}

import { forwardRef } from "react"
import AppearIn from "../components/motion/AppearIn"

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            className="grid py-40  md:grid-cols-2 grid-cols-1 w-full gap-5 px-5  projectbg  md:justify-center  justify-center items-center place-items-center"
        >
            {data.map((project, ind) => {
                return <ProjectCard key={ind} id={ind} title={project.title} height={project.height} width={project.width} image={project.image} url={project.url}/>
            })}

        </div>
    )
})


function ProjectCard({id,title, image, url, width, height}:{id:number,title:string, image:StaticImageData, url:string, width:number, height:number }){
    return (
    <motion.a
        href={url}
        key={id}
        onHoverStart={() => {
            const circleElement = document.getElementById("circle")
            const innerCircle = document.getElementById("innercircle")

            if(circleElement){
                circleElement.style.borderColor = "black"
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
            }
            if(innerCircle){
                innerCircle.style.backgroundColor = "white"
            }
        }}

        className="flex flex-col gap-0 hover:cursor-pointer z-40">
            <Image src={image} alt="Image1" width={width} height={height} objectFit="cover" className="rounded-2xl max-h-120 max-w-120  object-cover object-top" />
            <div className="flex flex-row justify-between">
                <span className="font-timesnewroman text-3xl">{title}</span>
            </div>

        </motion.a>
    )
}

