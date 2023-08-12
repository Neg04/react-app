import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    function handleResponse(response){

    }
    let apiKey = "042af6049820oc19463a6eb33bta81ea";
    let latitude = props.coord.latitude;
    let longitude = props.coord.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
           <div className="forecast-day">Sat</div>
           <WeatherIcon code="snow-night" size={35}/>
            </div>
            <div>
                <span className="temp-max">19°</span> <span className="temp-min">10°</span>
            </div>
        </div>
        </div>
    )
}