import {motion} from "motion/react"
import AppearIn from "../components/motion/AppearIn"

export default function SkillsSection({ id }: { id: number }){
    return(
        <motion.section className="w-full w-screen h-screen container bg-black mt-[20%]   ">

            <AppearIn props={{
                viewport:{ 
                once: false,
                amount: 0.9
                },
                className:"font-timesnewroman text-5xl"
            }} >
                Some Areas of Expertise.
            </AppearIn>
            
        </motion.section>

    )
}