import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import WeatherInfo from "./weatherinfo";
import { SpinnerRoundFilled } from "spinners-react";

import Forcast from "./forcast";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Biarritz");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      visibility: response.data.visibility / 1000,
    });
  }

  function search() {
    const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function currentPositionTemp() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation not supported");
    }

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const key = "a867e25f2d83db579421a57fd8e937ec";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function error() {
      alert("Unable to retrieve your location");
    }
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="item row">
          <div className="col-md-6 col1">
            <WeatherInfo data={weatherData} />
          </div>

          <div className="col-md-6 col2">
            <div className="row">
              <div className="details col-md">
                <ul>
                  <li>HUMIDITY</li>
                  <li>VISIBILITY</li>
                  <li>WIND</li>
                </ul>
              </div>
              <div className="api col-md">
                <ul>
                  <li>{weatherData.humidity} %</li>
                  <li>{weatherData.visibility} Km</li>
                  <li>{Math.round(weatherData.wind)} km/h</li>
                </ul>
              </div>
            </div>
            <Forcast coordinates={weatherData.coordinates} />
            <div>
              <form className="location" onSubmit={handleSubmit}>
                <button className="search" onClick={currentPositionTemp}>
                  Current Location
                </button>
                <div className="search-form">
                  <button className="submit" type="submit" value="Search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                  <input
                    type="search"
                    placeholder="search for a city"
                    className="form-input"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <SpinnerRoundFilled color="white" size="100" speed="50" />;
  }
}
