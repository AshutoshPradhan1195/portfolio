"use client"
import { useEffect } from "react";

export default function CircleMotionProvider(){
    useEffect(() => {

        const isTouchCapable = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);


        const circleElement = document.getElementById("circle");
        const innercircleElement = document.getElementById("innercircle");
        

        if(!circleElement){return}
        if(!innercircleElement){return}


        if(isTouchCapable){
            circleElement.style.display = "none";
            innercircleElement.style.display="none";
        }
        if(!isTouchCapable){
            circleElement.style.display = "block";
            innercircleElement.style.display="block";
        }

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

    return(<></>)
}