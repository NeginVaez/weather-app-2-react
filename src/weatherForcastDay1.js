import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecast">
      <span className="forecast-block day1">
        <div className="forecast-icon">
          <WeatherIcon
            code={props.data.weather[0].icon}
            color="black"
            size="35"
          />
        </div>
        <div className="forecast-day">{day()}</div>
        <div className="forecast-temp max-temp">
          {Math.round(props.data.temp.max)} °C
        </div>
        <div className="forecast-temp min-temp">
          {Math.round(props.data.temp.min)} °C
        </div>
      </span>
    </div>
  );
}
