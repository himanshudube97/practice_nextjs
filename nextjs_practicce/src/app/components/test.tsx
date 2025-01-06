"use client"
import { useEffect, useRef } from "react";

export const Test = () => {
    const ref = useRef(null);
    useEffect(()=>{
        const canvas = ref.current;
        if(canvas){
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, 800, 600);
        }
    },[ref])
    return (    
        <>
        <canvas  ref={ref} id="canvas" width="800" height="600">


        </canvas>
        </>
    )
}