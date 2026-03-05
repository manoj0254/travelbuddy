import React, { useEffect, useState } from 'react';
import { h2Style, inputStyle, addTaskBtn } from './styles';
import { TbWindsock } from "react-icons/tb";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const getWeather = () => {
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=d411261204dffd5d3adca18bbca3f8ba`;

    fetch(api)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className='text-black rounded-2xl h-fit p-5
      bg-gradient-to-b from-[#d6e2ee] from-10% via-[#cee1f0] via-30% to-[#d7e6ed] to-90% 
      borer border-solid border border-[#e3effa]
      drop-shadow-xl drop-shadow-2xl'>

        <h2 className={`flex align-center font-semibold text-xl ${h2Style}`}>
          <TbWindsock /> Weather</h2>

        <div>
          <input
            type='text'
            className={inputStyle}
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter city'
          />

          <button
            className={addTaskBtn}
            onClick={getWeather}
          >
            Search
          </button>
        </div>

        {weather && (
          <div>
            <p className='font-bold text-2xl mb-10'>
              {new Date(weather.dt * 1000).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>

            <div className="grid grid-cols-2 gap-4 text-left mb-10">
              <div>
                <p>
                  <span className='text-4xl font-bold'>{weather.name}</span>,{" "}
                  <span>{weather.sys.country}</span>
                </p>

                <p>Humidity: {weather.main.humidity}</p>
                <h2>Clouds: {weather.clouds.all}%</h2>
                <p className='text-3xl'>
                  {Math.round(weather.main.temp - 273.15)}°C
                </p>
              </div>

              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="w-20 h-20"
                />

                <p className='font-semibold'>
                  {weather.weather[0].main}
                </p>

                <p>
                  {weather.weather[0].description
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
              </div>
            </div>

            <div className='text-black rounded-2xl vh-100 p-5
            bg-[#d6e2ee]
            borer border-solid border-2 border-[#e3effa]
            drop-shadow-xl mt-2'>

              <div className="grid grid-cols-3 gap-4 text-left mb-3">
                <div>
                  <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>

                <div>
                  <p>Pressure: {weather.main.pressure} hPa</p>
                </div>

                <div>
                  <p>Visibility: {weather.visibility / 1000} Km</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherApp;