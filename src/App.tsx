import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { main } from "./three/main";

function App() {

  const canvasId = "threeCanvas";

  const canvasElm = <canvas id={canvasId} />;

  useEffect(()=>{
    main(canvasElm);
  },[]);


  return canvasElm;


}

export default App;
