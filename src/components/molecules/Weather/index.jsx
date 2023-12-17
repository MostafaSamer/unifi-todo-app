import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weathers from 'redux/weather';
import { getUserLocation } from 'utils/weatherHelper';

const WeatherApp = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector(Weathers.selectors.getWeathers);

    useEffect(() => {
        dispatch(Weathers.thunks.getWeather());
    }, []);

    return (
        weatherData && (
            <div>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
            </div>
        )
    );
};

export default WeatherApp;
