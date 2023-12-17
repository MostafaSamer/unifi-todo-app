import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weathers from 'redux/weather';
import styles from "./index.module.scss"
import { useHistory } from 'react-router-dom';

const WeatherApp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const weatherData = useSelector(Weathers.selectors.getWeathers);

    useEffect(() => {
        dispatch(Weathers.thunks.getWeather());
    }, []);

    return (
        weatherData && (
            <div className={styles.weatherWrapper} onClick={() => history.push("/weather")}>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
            </div>
        )
    );
};

export default WeatherApp;
