import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice'; 
import taskReducer from './TaskSlice'; 
import fileReducer from './fileSlice'

const store = configureStore({
  reducer: {
    auth: authReducer, 
    task: taskReducer,
    file: fileReducer, 
  },
});

export default store;

