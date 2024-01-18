import "./Searchbar.css"

import { useState } from "react";
import axios from "axios";


const Searchbar = ({setWeatherData, setForc}) => {
    const [CityName, SetCityName] = useState("")
    const [error,setError]=useState("")

    return (
        <div className="searchbarcont">
            <form className="bar" onSubmit={async (e) => { 
                e.preventDefault();
                console.log(CityName)
                

                try{
                    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
                    const forcast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
                    setWeatherData({...weather.data})
                    setForc({...forcast.data})

                } catch(err){
                    console.log(err)
                    setError(err)
                
                }

                // const loc = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
                // console.log(loc.data)
                } 
                
            }>
                <input onChange={(e)=>SetCityName(e.target.value)} value={CityName} id="search_bar" type="text" placeholder="Search" />
            </form>
            {error&& <div className="error">
                {error?.response?.data?.message.charAt(0).toUpperCase()+error?.response?.data?.message.slice(1) || "Api error"}
        
                    </div>}
            {/* <div >{locationData && locationData.map((location, i) => {
               return location.name
            })}</div> */}
        </div>
    )
}

export default Searchbar;