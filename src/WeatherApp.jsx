import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    });
    let infoWeather = (infoWeather) => {
        setWeatherInfo(infoWeather);
    }
	return (
		<div className="WeatherApp">
			<h1 className="weatherHead">Weather App</h1>
			<SearchBox infoWeather={infoWeather} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
