import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weathers from 'redux/weather';
import styles from "./index.module.scss"
import { useHistory } from 'react-router-dom';

const WeatherForecast = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const forecastData = useSelector(Weathers.selectors.getForecast);

    useEffect(() => {
        dispatch(Weathers.thunks.getForecast());
    }, []);

  return (
    forecastData && (
      <div>
        <h2>Weather Forecast</h2>
        <h3>Today's Weather (in hours):</h3>
        <div>
          {forecastData.list.slice(0, 8).map((item) => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Weather: {item.weather[0].description}</p>
              <hr />
            </div>
          ))}
        </div>
        <h3>Next 5 Days:</h3>
        <div>
          {forecastData.list
            .filter((item) => item.dt_txt.includes('12:00:00'))
            .map((item) => (
              <div key={item.dt}>
                <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                <p>Temperature: {item.main.temp} °C</p>
                <p>Weather: {item.weather[0].description}</p>
                <hr />
              </div>
            ))}
        </div>
      </div>
    )
  );
};

export default WeatherForecast;
