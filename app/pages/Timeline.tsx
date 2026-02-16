import { motion } from "motion/react"

export default function Timeline({id}: {id: number}) {
    return (
        <motion.div className="w-full h-screen border-t border-gray-700 bg-[#0a0a0a] z-30 sticky top-0 px-5 flex justify-center items-center">
            <h1 className="text-5xl font-timesnewroman">Take a look at what I've been up to</h1>
        </motion.div>
    )
}