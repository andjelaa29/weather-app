import React from 'react';
import "./DisplayWeather.css";

function DisplayWeather(props) {
    const {data} = props;
    console.log(data);
    const iconUrl = data.cod !== '404' ? ("https://openweathermap.org/img/wn/" + `${ data.weather[0].icon}` + ".png") : null ;

    return (
      <div className='displayWeather'>
        {data.cod !== '404' ? (
        <React.Fragment>
        <div className='mainCard'>
          <h3>{data.name}, {data.sys.country}  Weather</h3>
            <p className="cardSubtitle">
              {new Date().toLocaleTimeString()}
            </p>
            <h1>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconUrl} alt=""/>
            <span className="weather-description">
              {data.weather[0].description}
            </span>
        </div>
        <div className='weatherDetails'>
            <div class="column">
              <h4>High/Low</h4>
              <h4>Humidity</h4>
              <h4>Pressure</h4>
              <h4>Visibility</h4>
            </div>
            <div class="column">
              <span>{Math.floor(data.main.temp_max - 273.15)}/
                    {Math.floor(data.main.temp_min - 273.15)}
              </span>
              <span>{data.main.humidity} %</span>
              <span>{data.main.pressure} hPa</span>
              <span>{data.visibility / 1000} Km</span>
            </div>
            <div class="column">
              <h4>Wind</h4>
              <h4>Direction</h4>
              <h4>Sunrise</h4>
              <h4>Sunset</h4>
            </div>
            <div class="column">
              <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
              <span>{data.wind.deg}<sup>o</sup> deg</span>
              <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
              <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
            </div>
        </div>
        </React.Fragment>) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
        
      </div>
    )
}

export default DisplayWeather
