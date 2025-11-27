import React from 'react';
import { Users, Scale, Target, Shield, Zap, Globe } from 'lucide-react';
import { Pillar } from '../types';

const Principles: React.FC = () => {
  const pillars: Pillar[] = [
    {
      title: "Democracia Participativa",
      description: "Envolvimento direto do cidadão nas decisões, garantindo transparência e legitimidade popular em cada ato.",
      icon: Users
    },
    {
      title: "Justiça Social",
      description: "Políticas públicas robustas para reduzir desigualdades, garantindo um piso de dignidade para todos.",
      icon: Scale
    },
    {
      title: "Igualdade de Oportunidades",
      description: "Acesso universal a serviços essenciais, nivelando o ponto de partida para cada criança brasileira.",
      icon: Target
    },
    {
      title: "Defesa dos Direitos",
      description: "Proteção inegociável dos direitos humanos, civis e políticos, com foco prioritário em grupos vulneráveis.",
      icon: Shield
    },
    {
      title: "Inovação Responsável",
      description: "Investimento maciço em ciência e tecnologia para o desenvolvimento sustentável e modernização do estado.",
      icon: Zap
    },
    {
      title: "Liderança Global",
      description: "Posicionar o Brasil como potência mundial, liderando diálogos ambientais e acordos comerciais estratégicos.",
      icon: Globe
    }
  ];

  return (
    <section id="pilares" className="py-24 bg-[#0a0f29] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-patriot-green to-transparent opacity-50"></div>
          <span className="text-patriot-green font-bold tracking-widest uppercase text-xs mb-2 block pt-4">Nossos Fundamentos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 font-serif">Pilares da Nossa Ideologia</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            A base sólida sobre a qual construiremos o futuro da nação, guiados pelo número 30.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#0f1738] border border-white/5 rounded-2xl p-8 hover:bg-[#151e45] transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-patriot-blue/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-patriot-blue to-[#001540] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-inner">
                    <pillar.icon className="w-7 h-7 text-patriot-yellow" />
                </div>
                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none">0{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-patriot-yellow transition-colors">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;