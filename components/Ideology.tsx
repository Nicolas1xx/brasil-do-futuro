
import React from 'react';
import { Lightbulb, Heart, Scale } from 'lucide-react';
import { IMAGES } from '../assets';

const Ideology: React.FC = () => {
  return (
    <section id="essencia" className="py-24 bg-patriot-light text-patriot-dark relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-patriot-green via-patriot-yellow to-patriot-blue"></div>
        <div className="absolute bottom-0 right-0 p-32 opacity-5 pointer-events-none">
            <Scale size={400} />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-patriot-blue font-bold tracking-wider uppercase mb-2 block">Nossa Essência</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 leading-tight">
              Social-Democracia <br/>
              <span className="text-patriot-green">Progressista</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nossa ideologia central combina a força da <strong>social-democracia</strong> com o dinamismo do <strong>progressismo</strong>. 
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Assumimos um compromisso inegociável com a justiça social, a igualdade e um estado de bem-estar robusto, 
              impulsionado pela inovação e pela participação cidadã ativa.
            </p>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                        <Scale className="w-6 h-6 text-patriot-blue" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-slate-900">Justiça Social</h4>
                        <p className="text-slate-600">Redução ativa das disparidades para garantir dignidade para todos.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-slate-900">Inovação e Tecnologia</h4>
                        <p className="text-slate-600">Investimento em ciência para desenvolvimento sustentável.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg">
                        <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-slate-900">Inclusão Total</h4>
                        <p className="text-slate-600">Garantir que todos os segmentos da sociedade estejam representados.</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-patriot-yellow/20 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.ideology.banner} 
                alt="Brasileiros unidos olhando para o horizonte" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-patriot-dark/80 to-transparent flex flex-col justify-end p-8">
                <blockquote className="text-white font-serif italic text-xl">
                  "O momento de reafirmar nosso compromisso com a construção de um país mais justo, próspero e solidário chegou."
                </blockquote>
                <p className="text-patriot-yellow mt-4 font-bold">- Nicolas, Presidente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideology;
