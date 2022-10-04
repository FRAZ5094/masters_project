import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { main } from "./main";

function Simulation() {

  const canvasId = "threeCanvas";

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;


  useEffect(()=>{
    main(canvasId, canvasWidth, canvasHeight);
    console.log("main ran");
  },[]);

  return <canvas id={canvasId} width={canvasWidth} height={canvasHeight} />;


}

export default Simulation;
