import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
