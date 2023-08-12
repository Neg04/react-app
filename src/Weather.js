import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast"
import WeatherTemp from "./WeatherTemp"
import axios from "axios";
import "./Weather.css"
export default function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [weaatherData, setWeatherData] = useState({ready: false});
    
    function handleResponse(response) {
        setWeatherData(
            {
                ready : true,
                coordinates : response.data.coordinates,
                temp: response.data.temperature.current,
                date: new Date(response.data.time * 1000),
                wind: response.data.wind.speed,
                city: response.data.city,
                humidity: response.data.temperature.humidity,
                description: response.data.condition.description,
                icon: response.data.condition.icon ,
            }
        );
    }
    function search(){
        let apiKey = "042af6049820oc19463a6eb33bta81ea";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
   function handleSubmit(event) {
    event.preventDefault();
    search();
   }
   function handleChange(event){
   setCity(event.target.value);
   }
   
    if (weaatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-9">
                <input type="search" placeholder="Enter your city here" className="form-control rounded" onChange={handleChange} />
                </div>
                <div className="col-sm-3">
                <input type="submit" value="Search" className="searchButton"/>
               </div>
               </div>
            </form>
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        <li><h2>{weaatherData.city}</h2></li>
                    <li><FormattedDate date= {weaatherData.date} /> , {weaatherData.description}</li>
                 <li>Humidity: {weaatherData.humidity}% , Wind:{Math.round(weaatherData.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-md-6 weatherPic">
              <WeatherIcon code={weaatherData.icon} size={50}/><span className="temp"><WeatherTemp temp={weaatherData.temp}/></span>
                </div>
            </div>
           <WeatherForecast coord={weaatherData.coordinates} />
        </div>
    ); } else {
        search();
        return "Loading..." ;
    }
}