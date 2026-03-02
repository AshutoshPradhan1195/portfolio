"use client"
import { useEffect } from "react"
import { GreetingSection } from "./pages/Greeting"
import ProjectsSection from "./pages/Projects"
import AboutSection from "./pages/About"


export default function Home() {

    //cursor effect
    useEffect((
    ) => {
      const circleElement = document.getElementById("circle");
      const innercircleElement = document.getElementById("innercircle");

      const mouse = {x:0, y:0}
      const circle = {x:0, y:0}
      const innercircle = {x:0, y:0}

  
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      })

      const tick = () => {

        circle.x += (mouse.x - circle.x) * 0.15;
        circle.y += (mouse.y- circle.y) * 0.15;
        innercircle.x+= (mouse.x - innercircle.x) * 0.5;
        innercircle.y+= (mouse.y - innercircle.y) * 0.5;

        
        if(circleElement) {
          circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
        };
        if(innercircleElement){
          innercircleElement.style.transform = `translate(${innercircle.x}px, ${innercircle.y}px)`;
        }

        window.requestAnimationFrame(tick);
      }

      tick()
  
    }, [])

  
  return (
    <>
      <main  className="min-h-screen w-full flex flex-col justify-start items-center pt-10 ">
          <GreetingSection id={1}/>
          <ProjectsSection id={2}/>
          <AboutSection id={3}/>
      </main>
    </>

  );
}



