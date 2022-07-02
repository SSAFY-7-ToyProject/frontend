import React from "react";
import WeatehrImg from "./WeatherImg";
import styles from "../css/post.module.css";
const weathers = [
  "PARTLY_CLOUDY",
  "PARTLY_SUNNY",
  "SUNNY",
  "MOSTLY_CLOUDY",
  "DRIZZLE",
  "THUNDERSTORMS",
  "TORNADO",
  "SNOW",
];

export default function WeatherPick({ setWeather }) {
  const weatherList = weathers.map((weather) => {
    return (
      <li
        onClick={() => setWeather(weather)}
        key={weather}
        className={styles.weather_item}
      >
        <WeatehrImg weather={weather} className={styles.picker} />
      </li>
    );
  });

  return <ul className={styles.weather_list}>{weatherList}</ul>;
}
