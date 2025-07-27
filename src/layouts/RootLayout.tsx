// src/layouts/RootLayout.tsx
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Transition from '../components/layout/Transition';


function RootLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga inicial (ej. verificar auth, cargar datos iniciales)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga inicial

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Transition key="loader" />
      ) : (
        // Usamos location.pathname como key para que AnimatePresence
        // detecte los cambios de ruta y active las animaciones de salida/entrada.
        <div key={location.pathname}>
          <Outlet />
        </div>
      )}
    </AnimatePresence>
  );
};

export default RootLayout;