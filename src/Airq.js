"./import Airq.css"

import { useEffect, useState } from "react"
import axios from "axios"

const Airq =()=>{
    const [air,Setair]=useState()

    
    useEffect(()=>{ 
        navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const long = position.coords.longitude

        const handleairquality = async()=>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=50&lon=50&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`)
        console.log(res.data)
        Setair(res.data)
        
    
    handleairquality()}
       
    })},[])
    return <div>hello</div>
        
    

}



export default Airq;