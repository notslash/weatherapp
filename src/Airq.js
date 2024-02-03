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

   
        <p className="heading_air">Your locations Air quality</p>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Carbon">Carbon Monoxide</a>- {Math.round(display.list[0].components.co)} μg/m3</div> 
        <div className="air-range">{Math.round(display.list[0].components.co)} - 15400 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.co} max_val={15400}/>
        
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Ammonia">Ammonia</a>- {Math.round(display.list[0].components.nh3)} μg/m3 </div>
        <div className="air-range">{Math.round(display.list[0].components.nh3)} - 100 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.nh3} max_val={100}/>
        
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Nitrogen">Nitrogen dioxide</a>- {Math.round(display.list[0].components.no2)} μg/m3</div>
         <div className="air-range">{Math.round(display.list[0].components.no2)} - 200 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.no2} max_val={200}/>
        
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Ozone">Ozone</a>-  {Math.round(display.list[0].components.o3)} μg/m3 </div>
        <div className="air-range">{Math.round(display.list[0].components.o3)} - 180 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.o3} max_val={180}/>
        
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Particals2">Particals(2.5µm)</a>- {Math.round(display.list[0].components.pm2_5)} μg/m3</div>
        <div className="air-range">{Math.round(display.list[0].components.pm2_5)} - 75 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.pm2_5} max_val={75}/>
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Particals1">Particals(10µm)</a> - {Math.round(display.list[0].components.pm10)} μg/m3 </div>
        <div className="air-range">{Math.round(display.list[0].components.pm10)} - 200 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.pm10} max_val={200}/>
        
        </div>

        <div className="spacing">
        <div className="bar_row"><div><a className="top-bar" href="/Sulphur">Sulphur</a>- {Math.round(display.list[0].components.so2)} μg/m3 </div>
        <div className="air-range">{Math.round(display.list[0].components.so2)} - 350 μg/m3</div></div>
        <ProgressBar value={display.list[0].components.so2} max_val={350}/>
        
        </div>

        </div>}












        
    </div>

        
)}





export default Airq;