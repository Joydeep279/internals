import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./components/Home.tsx";
import FiberArchitecturePage from "./components/Docs.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { Footer } from "./components/Footer.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/react",
    element: <FiberArchitecturePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="bg-white dark:bg-background-start bg-gradient-to-b dark:from-background-start dark:to-background-end min-h-screen text-slate-900 dark:text-slate-200 antialiased overflow-x-hidden selection:bg-primary selection:text-white transition-colors">
        <Navigation />
        <RouterProvider router={route} />
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
