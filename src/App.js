import React from 'react';  
import { RouterProvider } from 'react-router-dom';  
import routes from './routes/AppRoutes'; // Import the routes  
import '../src/styles/index.css';  

const App = () => {  
  return <RouterProvider router={routes} />;  
};  

export default App;