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
        <section className="container z-1 ">
            <div ref={ref} className=" w-full max-w-7xl px-5  h-full flex flex-col justify-center select-none ">

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

