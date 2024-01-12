import "./Searchbar.css"

import { useState } from "react";
import axios from "axios";


const Searchbar = () => {
    const [CityName, SetCityName] = useState("")
    const [locationData, setLocationData] = useState(null)
    const [lat, SetLat]=useState()
    const [long,SetLong]=useState()

    return (
        <div className="searchbarcont">
            <form className="bar" onSubmit={async (e) => { 
                e.preventDefault();
                console.log(CityName)
                const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=5&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`)
                setLocationData([...res.data])
                
                // const loc = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
                // console.log(loc.data)
                } 
                
            }>
                <input onChange={(e)=>SetCityName(e.target.value)} value={CityName} id="search_bar" type="text" placeholder="Search" />

            </form>
            <div >{locationData && locationData.map((location, i) => {
               return location.name
            })}</div>
        </div>
    )
}

export default Searchbar;