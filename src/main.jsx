// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import DashboardProvider from './components/DashboardContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DashboardProvider>
    <App />
  </DashboardProvider>
);