// redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    clearSelectedTask: (state) => {
      state.selectedTask = null;
    },
  },
});

export const { setSelectedTask, clearSelectedTask } = taskSlice.actions;

export const selectSelectedTask = (state) => state.task.selectedTask;

export default taskSlice.reducer;
