import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });
  function displayresult(response) {
    console.log(response);

    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      date:"Wednesday 17:00",
      city: response.data.city,
      iconurl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });
  }
  let apikey = "b437574c1146da7t8a94bof1824f6cc0";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=erode&key=${apikey}&units=metric`;
  axios.get(apiurl).then(displayresult);
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Erode</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <img
                  src={weatherData.iconurl}
                  alt="current weather icon"
                />
              </div>
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
