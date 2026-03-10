"use client"

import { useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "gsap/all"

export default function SmoothProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    gsap.registerPlugin(ScrollToPlugin)

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: false,
      
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return null
}