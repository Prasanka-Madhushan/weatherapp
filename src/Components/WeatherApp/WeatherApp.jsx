import React from "react";
import './WeatherApp.css'

import search from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";

const WeatherApp=()=>{
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput"placeholder="Search"/>
                <div className="search">
                    <img src={search} alt="" />
                </div>
            </div>

        </div>
    )
}

export default WeatherApp;