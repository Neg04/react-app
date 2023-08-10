import React, {useState} from "react";
import "./Weather.css"
 export default function WeatherTemp(props){
    let [unit, setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
    return(
       <span className="weatherTemp">
       <span className="temp">{Math.round(props.temp)}</span>
       <span className="unit">
       °C|
       <a href="/" onClick={showFahrenheit}>°F</a>
       </span>
       </span>
    )} else{
        let fahrenheit = (props.temp * 9) / 5 + 32;
        return (
          <span className="weatherTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
        <a href="/" onClick={showCelsius}>°C</a>
        |°F
        </span>
        </span>
        );
    }
 }