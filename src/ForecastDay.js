import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function forecastDay(props) {
    function maxTemp(){
        let maxTemp = Math.round(props.data.temperature.maximum);
        return`${maxTemp}°`;
        }
        function minTemp(){
            let minTemp = Math.round(props.data.temperature.minimum);
            return`${minTemp}°`;
            }
            function day() {
                let date = new Date(props.data.time * 1000);
                let day = date.getDay();
               let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                return days[day];
            }
    return (
             <div>
               <div className="forecast-day">{day()}</div>
               <div>
               <WeatherIcon code={props.data.condition.icon} size={35}/>
                </div>
                <div>
                    <span className="temp-max">{maxTemp()}</span> <span className="temp-min">{minTemp()}</span>
                </div>
              </div>
    );
}