import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css"

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day" : "CLEAR_DAY",
        "clear-sky-night" : "CLEAR_NIGHT",
        "few-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "few-clouds-day" : "PARTLY_CLOUDY_DAY",
        "scattered-clouds-day" : "PARTLY_CLOUDY_DAY",
        "scattered-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day" : "CLOUDY",
        "broken-clouds-night" : "CLOUDY",
        "shower-rain-day" : "RAIN",
        "shower-rain-night" : "RAIN",
        "rain-day" : "RAIN",
        "rain-night" : "RAIN",
        "thunderstorm-day" : "SLEET",
        "thunderstorm-night" : "SLEET", 
        "snow-day" : "SNOW",
        "snow-night" : "SNOW",
        "mist-day" : "FOG",
        "mist-night" : "FOG",
    }

    return(
    <span className="icon">
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color= "#393e46"
        size={props.size}
        animate={true}
      />
      </span>
    );

}