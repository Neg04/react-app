import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
export default function Weather(props) {
    let [weaatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData(
            {
                ready : true,
                temp: response.data.temperature.current,
                wind: response.data.wind.speed,
                city: response.data.city,
                humidity: response.data.temperature.humidity,
                description: response.data.condition.description,
                iconUrl: "http://openweathermap.org/img/wn/03n@2x.png",
            }
        );
    }

   
    if (weaatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-sm-9">
                <input type="search" placeholder="Enter your city here" className="form-control rounded" />
                </div>
                <div className="col-sm-3">
                <input type="submit" value="Search" className="searchButton"/>
               </div>
               </div>
            </form>
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        <li><h1>{weaatherData.city}</h1></li>
                    <li>wednesday 07:38, {weaatherData.description}</li>
                 <li>Humidity: {weaatherData.humidity}% , Wind:{Math.round(weaatherData.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-md-6 weatherPic">
                <img src={weaatherData.iconUrl} alt={weaatherData.description} /> <span className="temp">{Math.round(weaatherData.temp)}°C </span>
                </div>
            </div>
        </div>
    ); } else {
        let apiKey = "042af6049820oc19463a6eb33bta81ea";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..." ;
    }
}