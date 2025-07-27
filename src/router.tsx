// src/router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import AnimatedPage from "./components/layout/AnimatedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // El layout principal es el elemento raíz
    children: [ // Las páginas se convierten en "hijos" del layout
      {
        index: true, // Esto marca la ruta hija por defecto (en este caso, "/")
        element: (
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        ),
      },
      // Ejemplo de cómo agregarías otra página:
      // {
      //   path: "dashboard",
      //   element: (
      //     <AnimatedPage>
      //       <DashboardPage />
      //     </AnimatedPage>
      //   ),
      // },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}