"use client"
import TimelineComponent from "./Timeline";
import {motion} from "motion/react"

export default function Timeline() {
  return (
    <motion.main
      onHoverStart={() => {
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
      className="min-h-screen h-fit w-full flex flex-col justify-start items-center pt-10 pb-10 bg-white rounded-t-4xl mt-2"
    >
        <TimelineComponent/>
    </motion.main>
  )
}