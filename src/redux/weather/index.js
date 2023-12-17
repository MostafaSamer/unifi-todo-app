import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { getWeather, getForecast } from './thunks';

export const slice = createSlice({
    name: 'weathers',
    initialState: adapter.getInitialState({
        weather: null,
        forecast: null
    }),
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            const { payload } = action;
            const { data } = payload;
            state.weather = data
        });
        builder.addCase(getForecast.fulfilled, (state, action) => {
            const { payload } = action;
            const { data } = payload;
            state.forecast = data
        });
    },
});

const Weathers = {  
  adapter,
  slice,
  thunks,
  selectors,
};
export default Weathers;