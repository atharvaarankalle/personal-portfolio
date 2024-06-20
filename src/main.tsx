import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./index.css";
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import ParticlesBackground from './components/ParticlesBackground';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ParticlesBackground />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
