import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the App component

//Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);