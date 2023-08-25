import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherForcastDay from "./weatherForcastday";
import WeatherForcastDay1 from "./weatherForcastDay1";

export default function Forcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  function load() {
    const key = "701f06352d61835bc4fc894e7b084629";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setForcast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="forecast">
        <WeatherForcastDay1 data={forcast[0]} />;
        <WeatherForcastDay data={forcast[1]} />;
        <WeatherForcastDay data={forcast[2]} />;
        <WeatherForcastDay data={forcast[3]} />;
      </div>
    );
  } else {
    load();
  }
}
