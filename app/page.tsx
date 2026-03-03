"use client"
import { useEffect } from "react"
import { GreetingSection } from "./pages/Greeting"
import ProjectsSection from "./pages/Projects"
import AboutSection from "./pages/About"


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-start items-center pt-10 ">
          <GreetingSection id={1}/>
          <ProjectsSection id={2}/>
          <AboutSection id={3}/>
      </main>
    </>

  );
}



