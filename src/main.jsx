import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { ThemeProvider } from './hooks/useTheme'; // Import the provider

ReactDOM?.createRoot(document.getElementById('root'))?.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap App inside ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
