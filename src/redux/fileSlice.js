// import { createSlice } from '@reduxjs/toolkit';
// import Axios from 'axios';

// const fileSlice = createSlice({
//   name: 'files',
//   initialState: {
//     fileData: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     uploadFileStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     uploadFileSuccess(state, action) {
//       state.fileData.push(action.payload); // Add the new file to the fileData array
//       state.loading = false;
//     },
//     uploadFileFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     setFileData(state, action) {
//       state.fileData = action.payload; // Set the initial file data
//     },
//   },
// });

// export const {
//   uploadFileStart,
//   uploadFileSuccess,
//   uploadFileFailure,
//   setFileData,
// } = fileSlice.actions;

// export const uploadFile = (file) => async (dispatch) => {
//   dispatch(uploadFileStart());
//   try {
//     const formData = new FormData();
//     formData.append('file', file); // Append the file to the form data

//     // Example API call to upload the file
//     await Axios.post('YOUR_API_ENDPOINT', formData);
//     // Optionally, you can fetch the updated files list here after upload

//     dispatch(uploadFileSuccess({ fileName: file.name, /* other file metadata */ }));
//   } catch (error) {
//     dispatch(uploadFileFailure('Failed to upload file.'));
//   }
// };

// export const fetchFiles = () => async (dispatch) => {
//   try {
//     const response = await Axios.get('https://mocki.io/v1/456f6fc6-8f2c-47d0-96f4-da9d31b1a217');
//     dispatch(setFileData(response.data.files)); // Set the file data in the Redux store
//   } catch (error) {
//     console.error('Error fetching files:', error);
//     dispatch(uploadFileFailure('Failed to load files.'));
//   }
// };

// export default fileSlice.reducer;
