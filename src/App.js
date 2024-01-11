import axios from "axios";
import './App.css';
import Header from './Header';
import { useEffect, useState } from "react";


function App() {
  const [location_data, setLocation_data] = useState(null)
  const [weather_data, setWeather_data] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [forc, setForc] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      try {
        setIsLoading(true)
        const lat = position.coords.latitude
        const long = position.coords.longitude

        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
        const forcast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)


        console.log(res.data)
        console.log(forcast.data)
        setWeather_data(res.data)
        setForc(forcast.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    })
  }, [])

  const format_day = (timestamp, formatStyle) => {
    const day = new Date(timestamp * 1000).toLocaleDateString([], { weekday: formatStyle })
    return day
  }

  return (
    <div className="background">
      <Header />
      {weather_data && <div>
        <div className="tem">
          <img id="test" src={`https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`} />
          <div className="location">{weather_data.name}, {format_day(weather_data.dt, "long")}</div>
        </div>


        <div className="temp">{Math.round(weather_data.main.temp)}°</div>

        <div className="columns">

          {/* <div className="today">{format_day(weather_data.dt, "short")}</div> */}



          <div>{forc && <div>
            <div className="forcast">{forc.list.map((weather, i) => {
              if (new Date(weather.dt * 1000).getHours() === 12) { return <div key={i} className="container_column"> <img id="test" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /><div className="temp_day"><div>{format_day(weather.dt, "short")}</div><div className="temp_column">{Math.round(weather.main.temp)}°</div></div> <div><div>{new Date(weather.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} PM</div></div></div> } else { return null }
            })}

            </div>

          </div>}</div>


        </div>

      </div>
      }




    </div>
  );
}

export default App;
