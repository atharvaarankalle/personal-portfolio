import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";

const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Suspense>
          <ParticlesBackground />
        </Suspense>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<BasePage />}>
                <Route index element={<LandingPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
