import { useState, useEffect } from 'react';

export default function Home() {
  // Frases dinámicas para el encabezado
  const phrases = ["Crea invitaciones inolvidables.", "Tu evento, a tu manera.", "Comparte momentos únicos."];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % phrases.length;
      setCurrentPhrase(phrases[index]);
    }, 3000); // Cambia la frase cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <main>
        {/* --- Hero Section --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Fondo con degradado y formas */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-indigo-900/80 z-0"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 transition-all duration-500">
              {currentPhrase}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Diseña, personaliza y comparte invitaciones digitales con tus propias fotos y estilo. La forma más fácil de organizar cualquier celebración.
            </p>
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              ✨ Empezar a Crear
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}