"use client"
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all"
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



        if (document.getElementById("portfolio")) {
        const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper");

        horizontalSections.forEach(function (sec, i) {
            const pinWrap = sec.querySelector(".horiz-gallery-strip");

            let pinWrapWidth;
            let horizontalScrollLength;


            function refresh() {
                pinWrapWidth = pinWrap.scrollWidth + innerWidth/5 ;
                horizontalScrollLength = pinWrapWidth - innerWidth ;
            }

            refresh();
            // Pinning and horizontal scr olling
            gsap.to(pinWrap, {
            scrollTrigger: {
                scrub: true,
                trigger: sec,
                pin: sec,
                start: "center center",
                end: () => `+=${pinWrapWidth }`,
                invalidateOnRefresh: true
            },
            x: () => -horizontalScrollLength ,
            ease: "none"
            });

            ScrollTrigger.addEventListener("refreshInit", refresh);
        });
        }

    })
    return (
        <div className="flex flex-col w-full ">
            <motion.div  className="w-full h-screen border-t border-gray-700 bg-[#0a0a0a] z-1 px-5 flex justify-center items-center">
                <motion.div id="timeline-head" className=" w-full!  md:p-40 md:py-40 p-30 px-20 z-1 text-center justify-center items-center flex flex-col self-center" >
                   <AppearIn>
                        <motion.div className="checkitoutbg  md:p-40 md:py-40 p-30  z-50 text-center justify-center items-center flex flex-col self-center" >
                            <h1 className="text-6xl tracking-tight font-elegant text-center justify-center items-center flex flex-col">
                                See My Timeline
                            </h1>
                        </motion.div>
                    </AppearIn> 
                </motion.div>
            
            </motion.div>

            <section id="portfolio" >
                <div className="container-fluid">
                    <div className="horiz-gallery-wrapper">
                    <div className="horiz-gallery-strip">
                        <HorizontalTimeline />
                    </div>
                    </div>

                </div>
            </section>

            <StyleSheet />

        </div>
    )
}


function StyleSheet(){
    return (
        <style>
            {`
            .container-fluid {
                width: 100%;
                padding-right: 0;
                padding-left: 0;
                margin-right: auto;
                margin-left: auto;
            }

            .horiz-gallery-strip,
            .horiz-gallery-wrapper {
                display: flex;
                width: 100%;
                flex-wrap: nowrap;
                will-change: transform;
                position: relative;
            }


        }`}
            
        </style>
    )
}

function TimelineCard({
    title,
    date,
    description,
}: {
    title: string
    date: string
    description: string
}) {
    return (
        <div className=" w-[400px] h-[200px] aspect-square  rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 flex flex-col justify-between hover:border-white/30">

            <div className="text-sm text-gray-400 tracking-widest uppercase">
                {date}
            </div>

            <div>
                <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
                    {title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
    )
}



function HorizontalTimeline() {

    return (
            <div
                className="flex items-center w-fit  project-wrap bg-[#0a0a0a] h-fit gap-10  pb-20"
            >
                {events.map((event) => (
                    <TimelineCard key={event.date} {...event} />
                ))}
            </div>
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
    {
    title: "Office Inauguration Function",
    date: "Oct 01 2029",
    description: "Started journey with new office",
  },
  {
    title: "Reached New Record",
    date: "Sept 16 2027",
    description: "Life time accreditation from IAO",
  },
  {
    title: "Design Meetup",
    date: "Sept 12 2026",
    description: "A creative design gathering event.",
  },
  {
    title: "New People Joined",
    date: "Aug 20 20221",
    description: "Welcomed new team members.",
  }
]



