import React, { useState, useEffect } from 'react';
import { config } from './particle-config.js';
import Particles from "react-tsparticles";


const ParticlesComp = () => {

    const [timestamp, setTimestamp] = useState(Date.now());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimestamp(Date.now()); // This will trigger a re-render every 60 seconds
      }, 10000); // 60000 ms = 60 seconds
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
  



  return (<><Particles id="tsparticles" options={config}/></>

  )
}

export default ParticlesComp