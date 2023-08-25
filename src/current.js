import React from "react";

export default function () {
  function handleCurrentResponse(response) {
   }
  function currentPositionTemp(position, response) {
    const key = "a867e25f2d83db579421a57fd8e937ec";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
