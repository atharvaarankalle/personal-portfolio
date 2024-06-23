import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from "./pages";
import "./index.css";
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ParticlesBackground />
      <Navbar />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>
);
