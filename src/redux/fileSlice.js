// redux/fileSlice.js  
import { createSlice } from '@reduxjs/toolkit';  

const fileSlice = createSlice({  
  name: 'files',  
  initialState: {  
    files: [],  
  },  
  reducers: {  
    addBackupFile: (state, action) => {  
      const newFiles = action.payload; // Adjust as needed  
      state.files.push(...newFiles);  
    },  
  },  
});  

export const { addBackupFile } = fileSlice.actions;  
export default fileSlice.reducer;