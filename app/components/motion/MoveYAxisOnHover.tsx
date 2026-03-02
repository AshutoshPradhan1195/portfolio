import {HTMLMotionProps, motion} from "motion/react"
import React, { JSX } from "react"

export default function MoveYAxisOnHover({y, children, ...props}:{y:number, children:React.ReactNode, props?:HTMLMotionProps<"div">}){
    return (
        <motion.div className="hover:cursor-pointer h-full py-2" whileHover={{translateY:y}} {...props}>
            {children}
        </motion.div>
    )
}

