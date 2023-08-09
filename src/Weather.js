import React from "react";
import "./Weather.css"
export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter your city here" className="form-control rounded" />
                <input type="submit" value="Search" className="btn btn-secondary"/>
            </form>
            <div className="row">
                <div className="col-md-6">
                    <h1>paris</h1>
                    <ul>
                    <li>wednesday 07:38, cloudy</li>
                 <li>Humidity: 50% , Wind:7 km/h</li>
                    </ul>
                </div>
                <div className="col-md-6">
                <img src="http://openweathermap.org/img/wn/03n@2x.png" alt="Weather emoji" className="img-fluid"/> 24°C
                </div>
            </div>
        </div>
    );
}