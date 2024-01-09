import axios from "axios";
import './App.css';
import Header from './Header';
import { useEffect, useState } from "react";


function App() {
  const [location_data, setLocation_data]=useState(null)
  const [weather_data, setWeather_data]=useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{navigator.geolocation.getCurrentPosition(async(position)=>{const lat=position.coords.latitude 
    const long=position.coords.longitude
    try {
      setIsLoading(true)
      const lat=position.coords.latitude 
      const long=position.coords.longitude
    
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${[process.env.REACT_APP_OPENWEATHERMAP_KEY]}&units=metric`)


    console.log(res.data)

      setWeather_data(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }})}, [])
    
  return (
    <div className="background">
      <Header/>
      {weather_data && <div className="temp">{weather_data.temp}</div>}


    
    </div>
  );
}

export default App;
