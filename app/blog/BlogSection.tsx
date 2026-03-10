"use client"
import {motion} from "motion/react"
import { useState } from "react"

interface ArticleData{
    author?:string,
    title:string,
    shortDescription:string,
    url:string
}

const articleData:ArticleData[] = [
    {
        author:"Jason McBride",
        title:"Finding the Sublime in the Mundane Parts of Life",
        shortDescription:"You don’t need to meditate on a mountain top to find transcendence",
        url:"https://jasoncmcbride.medium.com/finding-the-sublime-in-the-mundane-parts-of-life-0e05ca4a6c31"
    },
    {
        author:"Aesha Shingala",
        title:"Spring Boot Caching with Redis",
        shortDescription:"Implementing Caching in Spring Boot Application Using Redis",
        url:"https://medium.com/simform-engineering/spring-boot-caching-with-redis-1a36f719309f"
    }
]

const myArticleData:ArticleData[] = []

export default function BlogSection(){

    const [section, setSection] = useState<"My Article" | "Recommended">("Recommended")

    return (
        <motion.section onHoverStart={() => {
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
            className="min-h-screen w-full flex flex-col mt-2 justify-start items-center  bg-white rounded-t-4xl ">                
            
            <div className="md:w-[70vw] w-full h-full pt-10 xl:px-10 px-5 gap-10">
                <div className="flex flex-row gap-2">

                    <button
                        onClick={() => setSection("Recommended")}
                        className={`px-4 py-2 text-sm rounded-full border transition 
                            ${section === "Recommended" 
                                ? "bg-black text-white" 
                                : "bg-white text-black"}`}
                        >
                            Recommended
                    </button>

                    <button
                        onClick={() => setSection("My Article")}
                        className={`px-4 py-1 text-sm rounded-full border transition 
                            ${section === "My Article" 
                                ? "bg-black text-white" 
                                : "bg-white text-black"}`}
                    >
                        My Articles
                    </button>
                </div>
                <div id="" className="flex gap-4 mt-5  h-full justify-center items-center">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5  w-full justify-center items-center ">
                        {section === "Recommended" ? 
                            <>
                                {articleData.map((article) => {
                                    return (
                                        <ArticleCard key={article.url} {...article}/>
                                    )
                                })}
                            </>
                            :

                            <>
                                <h1 className="text-4xl md:text-2xl font-elegant text-black">Articles Coming Soon!</h1>
                            </>
                            
                        }
                    </div>
                </div>
                </div>
                
            </motion.section>
    )
}


function ArticleCard({author, title, shortDescription, url}:ArticleData){
    return (
        <motion.a href={url} target="_blank" className="w-full p-5 flex flex-col gap-2 h-full border border-gray-300 rounded-xl hover:bg-gray-50 ">

            <div>
            <h1 className="md:font-4xl text-2xl text-black font-elegant">{title}</h1>
            <h1 className=" text-sm text-gray-400 ">{author}</h1>
            </div>
            <h1 className=" text-sm  text-black  ">{shortDescription}</h1>
        </motion.a>
    )
}