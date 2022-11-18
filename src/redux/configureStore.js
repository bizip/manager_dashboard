import { configureStore } from '@reduxjs/toolkit';
import lineChartSlice from './linechart/LineChartSlice';

const store = configureStore({
  reducer: {
    lineChart: lineChartSlice.reducer,
  },
});

export default store;
