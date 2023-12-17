import { createSelector } from "@reduxjs/toolkit";

export const getWeathers = createSelector(
  (state) => state.weathers,
  (weathers) => weathers.weather,
);

export const getForecast = createSelector(
  (state) => state.weathers,
  (weathers) => weathers.forecast,
);