import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getWeather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    setWeatherData(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData.main && (
        <div class="a">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
