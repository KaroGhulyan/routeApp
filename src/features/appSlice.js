import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  routes: [],
  currentStop: {},
  finishedCount: 0,
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    routes: (state, action) => {
      state.routes = action.payload;
    },
    currentStop: (state, action) => {
      state.currentStop = action.payload;
    },
    finishedCount: (state, action) => {
      state.finishedCount += 1;
    },
  },
});

export const { routes, currentStop, finishedCount } = appSlice.actions;

export const selectRoutes = (state) => state.app.routes;
export const selectFinishedCount = (state) => state.app.finishedCount;
export const selectCurrentStop = (state) => state.app.currentStop;

export default appSlice.reducer;
