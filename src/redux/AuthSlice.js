import { createSlice } from '@reduxjs/toolkit';
import { mockUsers } from '../utils/Users'; // Import valid users

const initialState = {
  isAuthenticated: false,
  user: null,
  staffId: '', 
  errorMessage: '', // Error state for handling invalid credentials
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { staffId, password } = action.payload;
      const user = mockUsers.find((user) => user.staffId === staffId && user.password === password);

      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        state.staffId = staffId;
        state.errorMessage = ''; // Clear error on successful login
      } else {
        state.isAuthenticated = false;
        state.errorMessage = 'Invalid Staff ID or Password'; // Set error if login fails
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.staffId = '';
    },
    clearError: (state) => {
      state.errorMessage = ''; // Clear error message
    }
  },
});

export const { login, logout, clearError } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectErrorMessage = (state) => state.auth.errorMessage;

export default authSlice.reducer;
