import { createSelector } from "@reduxjs/toolkit";

export const getWeathers = createSelector(
  (state) => state.weathers,
  (weathers) => weathers.entities[weathers.ids[0]],
);