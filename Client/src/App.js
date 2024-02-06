import { useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current-weather/current-weather.js";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/forecast";
import Header from "./components/Navbar/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [currentWeather, setCurrentWeatherFetch] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherFetch({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <>
      <Header />
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
        <Routes>
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </>
  );
}

export default App;
