import React from 'react'
import { Gradient } from "whatamesh";

export default function GradientBgTest() {

  const gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <canvas id="gradient-canvas" className="w-full h-full" />
    </div> 
  )
}


