
import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { IMAGES } from '../assets';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#020420] min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003399]/20 via-[#020420] to-[#020420]"></div>
        <div 
            className="absolute top-0 right-0 w-full h-full opacity-[0.03]"
            style={{ backgroundImage: `url(${IMAGES.textures.carbon})` }}
        ></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-patriot-blue/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-patriot-green/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* The "30" Emblem */}
        <div className="mb-10 relative group cursor-default">
             <div className="absolute -inset-10 bg-patriot-yellow/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="relative inline-flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <span className="text-[10rem] md:text-[13rem] leading-none font-black font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFDF00] via-[#F4C430] to-[#806000] drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] z-10 select-none filter contrast-125">
                    30
                </span>
                
                {/* Decorative Rings around 30 */}
                <div className="absolute w-[115%] h-[115%] border border-patriot-yellow/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[135%] h-[135%] border border-dashed border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
             </div>
             
             {/* Underline Decoration */}
             <div className="mt-6 flex justify-center items-center gap-3 opacity-80">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-patriot-green to-transparent"></div>
                <div className="h-1.5 w-1.5 bg-patriot-yellow rounded-full shadow-[0_0_10px_#FFDF00]"></div>
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-patriot-green to-transparent"></div>
             </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
          CONSTRUINDO O <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
            BRASIL DO FUTURO
          </span>
        </h1>
        
        <p className="mt-2 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light tracking-wide">
          Chegou o momento de reafirmar nosso compromisso. <br/>
          <strong className="text-patriot-yellow font-serif italic text-3xl">Justiça. Progresso. Soberania.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-lg">
          <a
            href="#propostas"
            className="flex-1 group relative inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-patriot-yellow to-yellow-500 text-patriot-blue font-black text-lg rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,223,0,0.4)] hover:shadow-[0_0_40px_rgba(255,223,0,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative flex items-center tracking-wide">
              CONHEÇA O PLANO 30
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform stroke-[3px]" />
            </span>
          </a>
          <a
            href="#significado"
            className="flex-1 inline-flex items-center justify-center px-8 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white/30 hover:text-patriot-yellow shadow-lg"
          >
            <Award className="mr-2 w-6 h-6" />
            Por que 30?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
