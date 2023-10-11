import React, {useState} from "react";
import "./weatherApp.css"

import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

const weatherApp = () => {
    let api_key = "aaa513a1f26ddf95da7ad16f2ec368c3";
    const [wincon , setWicon] = useState(cloud_icon)
    const search = async () => {
        const element = document.getElementsByClassName("city-input")
        if (element[0].value === ""){
            return(0)
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        console.log('hi')
        let response = await fetch(url)
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed )+ " Km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp )+ "°C";
        location[0].innerHTML = data.name;
        if (data.weather === "01d" || data.wether === "01n"){
            setWicon(clear_icon);
        }
        else if (data.weather === "02d" || data.wether === "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather === "03d" || data.wether === "03n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather === "04d" || data.wether === "04n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather === "09d" || data.wether === "09n"){
            setWicon(rain_icon);
        }
        else if (data.weather === "10d" || data.wether === "10n"){
            setWicon(rain_icon);
        }
        else if (data.weather === "13d" || data.wether === "13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon)
        }


    };
    return(
        <>
            <div className="container">
                <div className="top-bar">
                    <input  type="text" className="city-input" placeholder="جستجو"/>
                    <div className="search-icon">
                        <img src={search_icon} alt="" onClick={()=>{search()}}/>
                    </div>
                </div>
                <div className="weather-image">
                    <img src={cloud_icon} alt=""/>
                </div>
                <div className="weather-temp">24°C</div>
                <div className="weather-location">Tehran</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="" className="icon"/>
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="text">رطوبت</div>
                        </div>
                    </div>
                    <div className="element">
                         <img src={wind_icon} alt="" className="icon"/>
                         <div className="data">
                             <div className="wind-rate">18 Km/h</div>
                             <div className="text">سرعت باد</div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default weatherApp