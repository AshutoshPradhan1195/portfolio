import {motion} from "motion/react"
import kakhani from "../images/kakhani.png"
import anyani from "../images/anyani.png"
import heroeshive from "../images/heroeshive.png"
import Image, { StaticImageData } from "next/image"

const projects = [
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
    {
        title:"Heroeshive",
        image:heroeshive,
        width:600,
        height:500,
        url:"https://heroeshive.com/"
    },
]


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

        className="flex flex-col gap-0 hover:cursor-pointer z-40 ">
            <Image src={image} alt="Image1"   className="aspect-auto  object-cover object-center" />
            <div className="flex flex-row justify-between">
                <span className="font-timesnewroman text-3xl bg-[#0a0a0a] px-1 w-full">{title}</span>
            </div>

        </motion.a>
    )
}


export default function ProjectSection({ id }: { id: number }) {
    return (
        <section className="relative w-full bg-[#0a0a0a] border-t border-gray-700 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="sticky top-0 h-screen flex items-center px-10">
                    <div className="max-w-md">
                        <h1 className="font-timesnewroman text-5xl mb-5">
                            Some Of My Work
                        </h1>

                        <p className="text-gray-400 leading-relaxed">
                            Designing and engineering scalable digital systems —
                            from high-performance frontends to intelligent backend
                            architectures powered by data and AI.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="sticky top-0 h-screen! flex items-center justify-center px-10"
                            style={{ zIndex: index }}

                            viewport={{ amount: 0.7 }}
                            transition={{ duration: 0.6 }}
                        >

                                <ProjectCard key={index} id={index} title={project.title} height={project.height} width={project.width} image={project.image} url={project.url}/>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

