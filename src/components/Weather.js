import React from 'react';
import './Weather.css';
import { useState } from 'react';
import API_KEY from '../config';
import DisplayWeather from './DisplayWeather';

function Weather() {
    const [form, setForm] = useState({
        city: "",
        country: "",
    });
    const [weather, setWeather] = useState([]);

    async function getData(e) {
        e.preventDefault();

        if(form.city === "") {
            alert("Please input data.");
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${API_KEY}`
            )
            .then((res) => res.json())
            .then((data) => data);

            setWeather({data : data});
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city") {
            setForm({...form, city: value});
        } else if(name === "country") {
            setForm({...form, country: value});
        }
        
    }

    return (
        <div className='weather'>
        <h2 className='title'>Weather App</h2>
        <form>
            <input type='text' placeholder='City' name='city' onChange={(e) => handleChange(e)} />
            <input type='text' placeholder='Country' name='country' onChange={(e) => handleChange(e)} />
            <button type='submit' onClick={(e) => getData(e)}>Submit</button>
        </form>

        {/* display weather  */}
        {
            weather.data !== undefined ? (
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null
        }
        </div>
    )
}

export default Weather
