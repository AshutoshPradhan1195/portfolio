import { useScroll } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useParallax } from "../util"


const titles = [
  "Developer!",
  "Designer!",
  "Ashutosh!"
]


export function GreetingSection({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    const blob1Ref = useRef<HTMLDivElement>(null)
    const blob2Ref = useRef<HTMLDivElement>(null)
    const blob3Ref = useRef<HTMLDivElement>(null)
    const blob4Ref = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const mouse = { x: 0, y: 0 }
        const blob1Pos = { x: 0, y: 0 }
        const blob2Pos = { x: 0, y: 0 }
        const blob3Pos = { x: 0, y: 0 }
        const blob4Pos = { x: 0, y: 0 }

        let animationFrameId: number

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener("mousemove", handleMouseMove)

        const tick = () => {
            blob1Pos.x += (mouse.x - blob1Pos.x) * 0.2
            blob1Pos.y += (mouse.y - blob1Pos.y) * 0.2

            blob2Pos.x += (-mouse.x - blob2Pos.x) * 0.2
            blob2Pos.y += (-mouse.y - blob2Pos.y) * 0.2

            blob3Pos.x += (-mouse.x - blob3Pos.x) * 0.2
            blob3Pos.y += (mouse.y - blob3Pos.y) * 0.2

            blob4Pos.x += (mouse.x - blob4Pos.x) * 0.2
            blob4Pos.y += (-mouse.y - blob4Pos.y) * 0.2

            if (blob1Ref.current)
                blob1Ref.current.style.transform =
                    `translate(${blob1Pos.x * 0.3}px, ${blob1Pos.y * 0.3}px)`

            if (blob2Ref.current)
                blob2Ref.current.style.transform =
                    `translate(${blob2Pos.x * 0.3}px, ${blob2Pos.y * 0.3}px)`

            if (blob3Ref.current)
                blob3Ref.current.style.transform =
                    `translate(${blob3Pos.x * 0.3}px, ${blob3Pos.y * 0.3}px)`

            if (blob4Ref.current)
                blob4Ref.current.style.transform =
                    `translate(${blob4Pos.x * 0.3}px, ${blob4Pos.y * 0.3}px)`

            animationFrameId = requestAnimationFrame(tick)
        }

        tick()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])



    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = titles[index]
        const speed = isDeleting? 50: 100

        const timeout = setTimeout(() => {
        if (!isDeleting) {
            setText(current.substring(0, text.length + 1))
            if (text === current) {
            setTimeout(() => setIsDeleting(true), 2000) // pause before deleting
            }
        } else {
            setText(current.substring(0, text.length - 1))
            if (text === "") {
            setIsDeleting(false)
            setIndex((prev) => (prev + 1) % titles.length)
            }
        }
        }, speed)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, index])


    return (
        <section className="z-1 overflow-hidden  h-screen w-full">
            <div ref={blob1Ref} className="blob1 absolute left-[200px] top-0 -z-10" />
            <div ref={blob2Ref} className="blob2 absolute right-[100px] bottom-0 -z-10" />
            <div ref={blob3Ref} className="blob3 absolute right-[200px] top-0 -z-10" />
            <div ref={blob4Ref} className="blob4 absolute left-[100px] bottom-0 -z-10" />


            <div ref={ref} className=" w-full px-5  h-full flex flex-col justify-center select-none ">

                <div className="text-3xl! mb-5 impact">
                    Hey, I am
                </div>

                <h1 className=" text-9xl wrapper h-[10px]!  ">
                    <div className="typing-demo ">
                       {text}
                    </div>
                </h1>

                
            </div>
        </section>
        
    )
}

