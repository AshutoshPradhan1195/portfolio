"use client"
import { ScrollTrigger } from "gsap/all"
import AppearIn from "../components/motion/AppearIn"
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useEffect, useRef } from "react"

export default function Timeline({id}: {id: number}) {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: `#timeline-head`,
            start: "top top",
            pin: true,            
            end: "+=8000px",
        })
    })
    return (
        <>
            <motion.div id="timeline-head" className=" w-full h-screen border-t border-gray-700 bg-[#0a0a0a] z-1 px-5 flex justify-center items-center">
                <motion.div className="  md:p-40 md:py-40 p-30 px-20 z-1 text-center justify-center items-center flex flex-col self-center" >
                   <AppearIn>
                        <motion.div className="checkitoutbg  md:p-40 md:py-40 p-30  z-50 text-center justify-center items-center flex flex-col self-center" >
                            <h1 className="text-6xl tracking-tight font-elegant text-center justify-center items-center flex flex-col">
                                See My Timeline
                            </h1>
                        </motion.div>
                    </AppearIn> 
                </motion.div>
            </motion.div>
            <Parallax/>
        </>
    )
}


function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ title, date, description }: { title:string, date:string, description:string }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 150)

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={`/photos/cityscape/${date}.jpg`}
                    alt="A London skyscraper"
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#${date}`}</motion.h2>
        </section>
    )
}

function Parallax() {

    return (
        <div className="grid md:grid-cols-2  z-1 projectbg w-full  ">
            {events.map((item, ind) => {
  
                return ind%2 === 0 ? (
                    <Image key={item.date}  title={item.title} description={item.description} date={item.date} />
                ) : (
                    <Image key={item.date} title={item.title} description={item.description} date={item.date} />
                )
                
            })}

            <StyleSheet />
        </div>
    )
}


function StyleSheet() {
    return (
        <style>{`

        .img-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            scroll-snap-align: start;

            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

    `}</style>
    )
}




const events = [
  {
    title: "Office Inauguration Function",
    date: "Oct 01 2020",
    description: "Started journey with new office",
  },
  {
    title: "Reached New Record",
    date: "Sept 16 2020",
    description: "Life time accreditation from IAO",
  },
  {
    title: "Design Meetup",
    date: "Sept 12 2020",
    description: "A creative design gathering event.",
  },
  {
    title: "New People Joined",
    date: "Aug 20 2020",
    description: "Welcomed new team members.",
  },
]



