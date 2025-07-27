import { LogIn } from 'lucide-react';

function Header() {
  return (
    <>
    {/* --- Header --- */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CatPawLogo className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold tracking-tight">Eventi</span>
          </div>
          <button className="bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm">
            <LogIn size={18} />
            Iniciar Sesión
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;