import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/counterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
