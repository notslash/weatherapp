import "./Searchbar.css"

import { useState } from "react";


const Searchbar =()=>{ 
    const [CityName,SetCityName]=useState('london')

    return(
        <div>
            <form className="bar">
                <input onSubmit={`https://api.openweathermap.org/data/2.5/weather?city=${CityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`} id="search_bar" type="text" placeholder="Search"/>
                    
            </form>
        </div>
    )
}

export default Searchbar;