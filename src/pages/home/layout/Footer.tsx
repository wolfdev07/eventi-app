
function Footer() {
  return (
    <>
    {/* --- Footer --- */}
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <div className="flex justify-center items-center gap-2 mb-4">
          <CatPawLogo className="w-6 h-6" />
          <span className="text-xl font-bold">Eventi</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Eventi. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ para celebrar la vida.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer;