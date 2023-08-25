import React from "react";

export default function RealDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = props.date.getFullYear();
  let theDate = props.date.getDate();
  let mounth = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="day">
      {day}{" "}
      <span className="hour">
        {hours}:{minutes}
      </span>{" "}
      <div className="date">
        {theDate} {mounth} {year}
      </div>
    </div>
  );
}
