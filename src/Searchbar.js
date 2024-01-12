import "./Searchbar.css"

import { useState } from "react";
import axios from "axios";


const Searchbar = ({setWeatherData}) => {
    const [CityName, SetCityName] = useState("")

    return (
        <div className="searchbarcont">
            <form className="bar" onSubmit={async (e) => { 
                e.preventDefault();
                console.log(CityName)
                
                const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)

                setWeatherData({...weather.data})


                
                // const loc = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
                // console.log(loc.data)
                } 
                
            }>
                <input onChange={(e)=>SetCityName(e.target.value)} value={CityName} id="search_bar" type="text" placeholder="Search" />

            </form>
            {/* <div >{locationData && locationData.map((location, i) => {
               return location.name
            })}</div> */}
        </div>
    )
}

export default Searchbar;