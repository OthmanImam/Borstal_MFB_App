import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  password: '',
  document: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearPassword: (state) => {
      state.password = '';
    },
    uploadDocument: (state, action) => {
      // Check if the document already exists in the array
      const documentExists = state.document.some(doc => doc.name === action.payload.name);

      if (!documentExists) {
        // Add document to the array if it doesn't exist
        state.document = [...state.document, action.payload];
      }
    }
  },
});

export const { login, logout, setPassword, clearPassword, uploadDocument } = authSlice.actions;

export const selectPassword = (state) => state.auth.password;

export const selectDocuments = (state) => state.auth.document;

export default authSlice.reducer;
