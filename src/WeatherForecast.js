import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(false);

   useEffect(() => {
   setLoaded(false);
   }, [props.coord]);

    function handleResponse(response){
     setForecast(response.data.daily)
     setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
            <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 5 ) {
                        return (
                            <div className="col" key={index}>
                            <ForecastDay data={dailyForecast} />
                            </div>
                        );
                        }
                    })}
            </div>
            </div>
        );
    } else {
        let apiKey = "042af6049820oc19463a6eb33bta81ea";
        let latitude = props.coord.latitude;
        let longitude = props.coord.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}