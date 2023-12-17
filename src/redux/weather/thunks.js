import { createAsyncThunk } from '@reduxjs/toolkit';
import WeatherAPI from './services';
import { getUserLocation } from 'utils/weatherHelper';

export const getWeather = createAsyncThunk('weathers/getWeather', async (thunkAPI) => {
  try {
    const { latitude, longitude } = await getUserLocation();
    const apiKey = '7e91761cef4edcd77e58630274ac8490';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    const response = await WeatherAPI.getWeather(apiUrl);
    const data = await response.json();
    
    return { data: data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});