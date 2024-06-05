import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL; 
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({ infoWeather }) {
	let [city, setCity] = useState(""); 
	let [error, setError] = useState(false);
	let getWeatherInfo = async () => {
		try {
			let res = await fetch(
				`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
			);
			let resJson = await res.json();
			console.log(resJson);
			let result = {
				city: city.toLocaleUpperCase(),
				feelsLike: resJson.main.feels_like,
				humidity: resJson.main.humidity,
				temp: resJson.main.temp,
				tempMax: resJson.main.temp_max,
				tempMin: resJson.main.temp_min,
				weather: resJson.weather[0].description,
			};
			console.log(result);
			setError(false);
			return result;
		} catch (error) {
			throw error;
		}
	};
	useEffect(() => {
		let mumbaiWeather = async () => {
			let citys = [
				"MUMBAI",
				"ANTARCTICA",
				"GREENLAND",
				"RACHI",
				"KOLKATA",
			];
			let cityName = citys[Math.floor(Math.random() * 5)];
			let res = await fetch(
				`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
			);
			let resJson = await res.json();
			console.log(resJson);
			let result = {
				city: cityName,
				feelsLike: resJson.main.feels_like,
				humidity: resJson.main.humidity,
				temp: resJson.main.temp,
				tempMax: resJson.main.temp_max,
				tempMin: resJson.main.temp_min,
				weather: resJson.weather[0].description,
			};
			infoWeather(result);
		};
		mumbaiWeather();
	}, []);
	let handleChange = (ent) => {
		setCity(ent.target.value);
	};
	let handleSubmit = async (evt) => {
		try {
			evt.preventDefault();
			console.log(city);
			setCity("");
			let infoData = await getWeatherInfo();
			infoWeather(infoData);
		} catch (error) {
			setError(true);
		}
	};
	return (
		<div className="SearchBox">
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					label="City Name"
					variant="outlined"
					required
					value={city}
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					endIcon={<SearchIcon />}
					type="submit" id='submit-button'
				>
					Search
				</Button>
				{error && <p style={{ color: "red" }}>No such place exists.</p>}
			</form>
		</div>
	);
}
