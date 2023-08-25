import React from "react";
import RealDate from "./date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./weatherTemp";
import "./App.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <RealDate date={props.data.date} />
      <ul>
        <li className="city">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.15625 11.25C8.15625 8.29873 10.5487 5.90625 13.5 5.90625C16.4513 5.90625 18.8437 8.29873 18.8437 11.25C18.8437 14.2013 16.4513 16.5938 13.5 16.5938C10.5487 16.5938 8.15625 14.2013 8.15625 11.25ZM13.5 7.59375C11.4807 7.59375 9.84375 9.23071 9.84375 11.25C9.84375 13.2693 11.4807 14.9062 13.5 14.9062C15.5193 14.9062 17.1562 13.2693 17.1562 11.25C17.1562 9.23071 15.5193 7.59375 13.5 7.59375Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.96491 9.96396C4.36352 5.12802 8.4047 1.40625 13.257 1.40625H13.743C18.5953 1.40625 22.6365 5.12802 23.0351 9.96396C23.2492 12.5617 22.4468 15.1413 20.7968 17.1591L15.4046 23.7537C14.4202 24.9575 12.5798 24.9575 11.5954 23.7537L6.20321 17.1591C4.55322 15.1413 3.75077 12.5617 3.96491 9.96396ZM13.257 3.09375C9.28293 3.09375 5.97317 6.14191 5.6467 10.1026C5.46849 12.2647 6.13634 14.4115 7.50958 16.091L12.9018 22.6855C13.211 23.0636 13.789 23.0636 14.0982 22.6855L19.4904 16.091C20.8637 14.4115 21.5315 12.2647 21.3533 10.1026C21.0268 6.14191 17.7171 3.09375 13.743 3.09375H13.257Z"
              fill="white"
            />
          </svg>
          {props.data.city}
        </li>
        <li className="icon">
          <WeatherIcon code={props.data.icon} color="white" size="40" />
        </li>
        <WeatherTemp celsius={Math.round(props.data.temp)} />
        <li className="weather">{props.data.description}</li>
      </ul>
    </div>
  );
}
