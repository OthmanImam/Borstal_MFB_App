import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter'
import { Provider } from 'react-redux';
// import AppRoutes from './routes/AppRoutes';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
