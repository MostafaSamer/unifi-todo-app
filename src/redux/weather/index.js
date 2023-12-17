import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { getWeather } from './thunks';

export const slice = createSlice({
    name: 'weathers',
    initialState: adapter.getInitialState({}),
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            const { payload } = action;
            const { data } = payload;
            adapter.setOne(state, data);
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