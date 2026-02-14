import {HTMLMotionProps, motion} from "motion/react"

export default function AppearIn({children, props}:{children:React.ReactNode, props?:HTMLMotionProps<"div">}){
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        
        viewport={{ 
          once: false,
          amount: 0.3
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
        {...props}
      >
        {children}
      </motion.div>
    )
}