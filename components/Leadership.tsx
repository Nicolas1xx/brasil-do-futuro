
import React from 'react';
import { User, Activity, Megaphone, Star, ChevronRight, Quote, Linkedin, Twitter } from 'lucide-react';
import { Leader } from '../types';
import { IMAGES } from '../assets';

const Leadership: React.FC = () => {
  const leaders: Leader[] = [
    {
      name: "Nicolas",
      role: "Presidente",
      image: IMAGES.leadership.nicolas
    },
    {
      name: "Maria Júlia",
      role: "Vice Presidente",
      image: IMAGES.leadership.mariaJulia
    },
    {
      name: "Pedro Vitor",
      role: "Ministro da Saúde",
      image: IMAGES.leadership.pedroVitor
    },
    {
      name: "Igor",
      role: "Diretor de Marketing",
      image: IMAGES.leadership.igor
    }
  ];

  const getRoleIcon = (role: string) => {
    if (role.includes('Presidente')) return <Star className="w-5 h-5 text-patriot-yellow fill-current" />;
    if (role.includes('Saúde')) return <Activity className="w-5 h-5 text-patriot-green" />;
    if (role.includes('Marketing')) return <Megaphone className="w-5 h-5 text-orange-400" />;
    return <User className="w-5 h-5 text-gray-400" />;
  };

  const getQuote = (name: string) => {
      switch(name) {
          case 'Nicolas': return "A liderança é, antes de tudo, o ato de servir. Estamos aqui para transformar esperança em ação.";
          case 'Maria Júlia': return "Uma nação forte se constrói com a união de todas as suas vozes. Ninguém ficará para trás.";
          case 'Pedro Vitor': return "Saúde não é mercadoria, é direito fundamental. Humanização e eficiência são nossas metas.";
          case 'Igor': return "Transparência é a chave. Vamos comunicar cada passo, cada vitória e cada desafio com verdade.";
          default: return "Pelo futuro do Brasil.";
      }
  };

  return (
    <section id="lideranca" className="py-24 bg-[#050914] relative">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: `url(${IMAGES.textures.diamonds})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-800 pb-8">
            <div className="max-w-2xl">
                <span className="text-patriot-yellow font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-2">
                    <span className="w-8 h-[2px] bg-patriot-yellow"></span>
                    Nossa Liderança
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4 font-serif">Quem Guia o Movimento</h2>
                <p className="text-gray-400 text-lg font-light">
                    Uma coalizão de mentes brilhantes, unidas pela ética e pela competência técnica.
                </p>
            </div>
            <div className="hidden md:block">
                <a href="#junte-se" className="group text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium flex items-center gap-2">
                    Conheça toda a equipe <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={leader.name} className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-2xl bg-gray-900">
              {/* Background Image */}
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Gradient Overlay - Always Visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Hover Color Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-patriot-blue/90 via-patriot-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg text-white">
                    {getRoleIcon(leader.role)}
                  </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-1 font-serif">{leader.name}</h3>
                <p className="text-patriot-yellow font-bold uppercase tracking-wider text-xs mb-4">{leader.role}</p>
                
                {/* Quote revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 relative pt-4 border-t border-white/20">
                    <Quote className="absolute top-4 left-0 w-4 h-4 text-white/30 rotate-180" />
                    <p className="text-sm text-gray-200 italic pl-6 leading-relaxed">
                        "{getQuote(leader.name)}"
                    </p>
                    <div className="flex gap-3 mt-4">
                        <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
                        <Twitter className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
