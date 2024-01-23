import "./Airq.css"

import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";




const Airq=()=>{
    const [airq,Setairq]=useState()
    const [display,Setdisplay]=useState()
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            

            const res = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`)
            console.log(res.data)
            Setairq(res.data)
            Setdisplay({...res.data})


    })},[])
    return (
    <div className="background_air">
    
    {display&& <div className="airquality">
        Carbon Monoxide {display.list[0].components.co}
        ammonia {display.list[0].components.nh3}

        </div>}
    </div>

        
)}





export default Airq;