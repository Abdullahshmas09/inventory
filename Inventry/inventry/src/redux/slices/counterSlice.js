// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: null, 
  email: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username; 
      state.email = action.payload.email;        
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.email = null;  
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
