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
        <div className="carbon" role="progressbar">Carbon Monoxide {display.list[0].components.co}
        <progress value={display.list[0].components.so2} max="4">{display.list[0].components.co}</progress></div>
        <div className="ammonia">Ammonia {display.list[0].components.nh3}
        <progress value={display.list[0].components.nh3} max="4">{display.list[0].components.nh3}</progress></div>
        <div className="nitrogen">nitrogen dioxide {display.list[0].components.n02}
        <progress value={display.list[0].components.o3} max="100">{display.list[0].components.n02}</progress></div>
        <div className="ozon">Ozone {display.list[0].components.o3}
        <progress value={display.list[0].components.o3} max="4">{display.list[0].components.o3}</progress></div>
        <div className="particals_2.5">particals(2.5µm) {display.list[0].components.pm2_5}
        <progress value={display.list[0].components.pm2_5} max="4">{display.list[0].components.pm2_5}</progress></div>
        <div className="particlas_10">particals(10µm) {display.list[0].components.pm10}
        <progress value={display.list[0].components.pm10} max="4">{display.list[0].components.pm10}</progress></div>
        <div className="sulphur">Sulphur {display.list[0].components.so2}
        <progress value={display.list[0].components.so2} max="4">{display.list[0].components.so2}</progress></div>

        </div>}
    </div>

        
)}





export default Airq;