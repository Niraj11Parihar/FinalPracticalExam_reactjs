import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice'

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

export default store;
