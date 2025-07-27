import type { ReactNode } from "react";
import { PartyPopper, UtensilsCrossed, Clapperboard, Mic, School, Users, Cake, Gem } from 'lucide-react';

interface ProviderCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ProviderCard = ({ icon, title, description }: ProviderCardProps) => (
  <div className="bg-slate-800/60 p-6 rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 backdrop-blur-sm border border-slate-700">
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

function ProvidersSection() {
  // Lista de proveedores
  const providers = [
    { icon: <UtensilsCrossed className="w-6 h-6 text-white" />, title: "Banquetes", description: "Sabores que deleitan a tus invitados." },
    { icon: <PartyPopper className="w-6 h-6 text-white" />, title: "Animadores", description: "Payasos, magos y shows para todos." },
    { icon: <Mic className="w-6 h-6 text-white" />, title: "Música y Sonido", description: "DJs y grupos en vivo para la mejor fiesta." },
    { icon: <Clapperboard className="w-6 h-6 text-white" />, title: "Foto y Video", description: "Captura cada momento especial." },
    { icon: <Users className="w-6 h-6 text-white" />, title: "Meseros y Staff", description: "Servicio profesional para tu evento." },
    { icon: <Cake className="w-6 h-6 text-white" />, title: "Pastelerías", description: "El pastel de tus sueños hecho realidad." },
    { icon: <Gem className="w-6 h-6 text-white" />, title: "Joyerías", description: "Anillos y detalles para bodas y aniversarios." },
    { icon: <School className="w-6 h-6 text-white" />, title: "Salones y Jardines", description: "El lugar perfecto para tu celebración." },
  ];

  return (
    <>
    {/* --- Providers Section --- */}
    <section id="providers" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Encuentra todo para tu fiesta</h2>
          <p className="text-slate-400 md:text-lg">Conectamos con los mejores proveedores para que tu evento sea perfecto.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers.map((provider, index) => (
            <ProviderCard key={index} {...provider} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ProvidersSection;