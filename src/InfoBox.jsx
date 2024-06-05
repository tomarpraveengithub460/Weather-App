import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Info.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CycloneIcon from "@mui/icons-material/Cyclone";
import { RAIN_IMG,SMOKE_IMG,HOT_IMG,COLD_IMG,COOL_IMG } from "./utils/constants";

export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <div>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 , borderRadius: 6 }}
                        image={
                            info.weather == "haze"
                                ? SMOKE_IMG
                                : info.temp < 1
                                    ? COLD_IMG
                                    : info.humidity > 80
                                        ? RAIN_IMG
                                        : info.temp > 15
                                            ? HOT_IMG
                                            : COOL_IMG
                        }
                        title="green iguana"
                    />
                    <CardContent className="cardContent">
                        <Typography
                            gutterBottom
                            variant="h5"
                            fontWeight={600}
                            component="div"
                        >
                            {info.city}
                            &nbsp;
                            <span style={{ position: "relative", top: "4px" }}>
                                {info.weather == "haze" ? (
                                    <CycloneIcon />
                                ) : info.temp < 1 ? (
                                    <AcUnitIcon />
                                ) : info.humidity > 80 ? (
                                    <ThunderstormIcon />
                                ) : info.temp > 15 ? (
                                    <WbSunnyIcon />
                                ) : (
                                    <AcUnitIcon />
                                )}
                            </span>
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="span"
                            fontWeight={500}
                        >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as{" "}
                                <b>{info.weather}</b> feels like{" "}
                                {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
