import "./Airq.css"

import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";

import ProgressBar from "./ProgressBar";


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

   
        <p className="heading_air">Your location</p>

        <div className="spacing">
        <div>Carbon Monoxide {display.list[0].components.co}</div>
        {/* <div><progress id="co" value={display.list[0].components.co} max="300">{display.list[0].components.co}</progress></div> */}
        <ProgressBar value={display.list[0].components.co} max_val={800}/> 
        </div>

        <div className="spacing">
        <div>Ammonia {display.list[0].components.nh3} </div>
        <div><progress id = "co" value={display.list[0].components.nh3} max="4">{display.list[0].components.nh3}</progress></div>
        </div>

        <div className="spacing">
        <div>nitrogen dioxide {display.list[0].components.no2}</div>
        <div><progress value={Math.round(display.list[0].components.no2)} max="5">{display.list[0].components.no2}</progress></div>
        </div>

        <div className="spacing">
        <div>Ozone {display.list[0].components.o3}</div>
        <div><progress value={display.list[0].components.o3} max="100">{display.list[0].components.o3}</progress></div>
        </div>

        <div className="spacing">
        <div>particals(2.5µm) {display.list[0].components.pm2_5}</div>
        <div><progress value={display.list[0].components.pm2_5} max="4">{display.list[0].components.pm2_5}</progress></div>
        </div>

        <div className="spacing">
        <div>particals(10µm) {display.list[0].components.pm10}</div>
        <div><progress value={display.list[0].components.pm10} max="6">{display.list[0].components.pm10}</progress></div>
        </div>

        <div className="spacing">
        <div>Sulphur {display.list[0].components.so2}</div>
        <div><progress value={display.list[0].components.so2} max="4">{display.list[0].components.so2}</progress> 350</div>
        </div>

        </div>}
    </div>

        
)}





export default Airq;