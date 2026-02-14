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
            <motion.section  className="w-full h-screen container sticky! top-0 z-0">
                <AppearIn>
                    <motion.div className=" bg-red-500/20 px-100 py-50" >
                        <h1 className="text-5xl tracking-tight font-timesnewroman text-center">
                            Check out my work!
                        </h1>
                    </motion.div>
                </AppearIn>
            </motion.section>

            <Projects ref={projectsRef} />
        </>
    )
}

import { forwardRef } from "react"
import AppearIn from "../components/motion/AppearIn"

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            className="grid grid-cols-2 gap-10 place-items-center projectbg  justify-between"
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
          whileHover={{ scale: 1.03 }}

        className="flex flex-col gap-0 hover:cursor-pointer z-40">
            <Image src={image} alt="Image1" width={width} height={height} objectFit="cover" className="max-h-150 max-w-125 object-cover object-top" />
            <div className="flex flex-row justify-between">
                <span className="font-timesnewroman text-3xl">{title}</span>
            </div>

        </motion.a>
    )
}

