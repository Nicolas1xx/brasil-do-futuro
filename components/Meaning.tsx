import React from 'react';
import { Triangle, Circle, Lock, Zap, Scale, Users, CheckCircle2 } from 'lucide-react';

const Meaning: React.FC = () => {
  return (
    <section id="significado" className="py-32 bg-[#010a26] relative overflow-hidden">
        {/* Massive Background Typography */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between px-10 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[40vw] font-serif font-black text-white leading-none -translate-x-20">3</span>
            <span className="text-[40vw] font-serif font-black text-white leading-none translate-x-20">0</span>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
            <span className="inline-block py-1 px-3 rounded border border-patriot-yellow/30 text-patriot-yellow text-sm font-bold tracking-[0.2em] uppercase mb-6 bg-patriot-yellow/5">
                Nossa Identidade
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                A Força do Número <span className="text-transparent bg-clip-text bg-gradient-to-r from-patriot-yellow via-yellow-200 to-yellow-600 font-serif text-7xl inline-block transform translate-y-2">30</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Não escolhemos este número por acaso. O <strong className="text-white">30</strong> é o código genético da nossa visão para o Brasil. 
                Uma combinação perfeita entre fundação sólida e totalidade.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* The Number 3 Column */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent rounded-3xl blur-xl group-hover:bg-blue-600/20 transition-all duration-500"></div>
                <div className="h-full bg-[#051030] border border-blue-500/30 rounded-3xl p-10 relative overflow-hidden hover:border-blue-400/60 transition-colors duration-300">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="flex items-end justify-between mb-10 border-b border-blue-500/20 pb-6">
                        <div>
                            <span className="block text-blue-400 font-bold tracking-widest text-sm uppercase mb-1">A Tríade</span>
                            <h3 className="text-4xl font-black text-white">O Número 3</h3>
                        </div>
                        <Triangle size={64} className="text-blue-500 fill-blue-500/20" strokeWidth={1.5} />
                    </div>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        O três representa a estabilidade geométrica mais forte. Representa os três pilares que sustentam uma nação soberana e próspera.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/10 border border-blue-500/10 hover:bg-blue-900/20 transition-colors">
                            <Scale className="text-blue-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Justiça Social</h4>
                                <p className="text-sm text-gray-400">O equilíbrio necessário para que ninguém fique para trás.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/10 border border-blue-500/10 hover:bg-blue-900/20 transition-colors">
                            <Lock className="text-blue-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Liberdade Responsável</h4>
                                <p className="text-sm text-gray-400">Direitos individuais garantidos, deveres cívicos cumpridos.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/10 border border-blue-500/10 hover:bg-blue-900/20 transition-colors">
                            <Zap className="text-blue-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Progresso Contínuo</h4>
                                <p className="text-sm text-gray-400">A inovação como motor de desenvolvimento econômico.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Number 0 Column */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-patriot-green/10 to-transparent rounded-3xl blur-xl group-hover:bg-patriot-green/20 transition-all duration-500"></div>
                <div className="h-full bg-[#021a0f] border border-emerald-500/30 rounded-3xl p-10 relative overflow-hidden hover:border-emerald-400/60 transition-colors duration-300">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="flex items-end justify-between mb-10 border-b border-emerald-500/20 pb-6">
                        <div>
                            <span className="block text-emerald-400 font-bold tracking-widest text-sm uppercase mb-1">A Totalidade</span>
                            <h3 className="text-4xl font-black text-white">O Número 0</h3>
                        </div>
                        <Circle size={64} className="text-emerald-500" strokeWidth={2} />
                    </div>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        O zero é o círculo da união. Ele representa o compromisso com metas absolutas e a inclusão de todos os brasileiros no projeto nacional.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-900/10 border border-emerald-500/10 hover:bg-emerald-900/20 transition-colors">
                            <Users className="text-emerald-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">União Nacional</h4>
                                <p className="text-sm text-gray-400">O círculo que abraça todos, sem divisão ideológica destrutiva.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-900/10 border border-emerald-500/10 hover:bg-emerald-900/20 transition-colors">
                            <CheckCircle2 className="text-emerald-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Meta Zero</h4>
                                <p className="text-sm text-gray-400">Zero Fome. Zero Corrupção. Zero Miséria. Metas inegociáveis.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-900/10 border border-emerald-500/10 hover:bg-emerald-900/20 transition-colors">
                            <Circle className="text-emerald-400 w-8 h-8 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Renovação Cíclica</h4>
                                <p className="text-sm text-gray-400">Uma gestão que se renova e evolui constantemente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-patriot-yellow to-yellow-600 rounded-2xl p-1">
            <div className="bg-[#020420] rounded-xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Vote na Mudança Real</h4>
                    <p className="text-gray-400">Digite 30 na urna e confirme o futuro do Brasil.</p>
                </div>
                <div className="flex items-center gap-4">
                     <div className="bg-white text-black font-black text-4xl px-4 py-2 rounded shadow-lg tracking-widest border-2 border-gray-300 font-mono">3</div>
                     <div className="bg-white text-black font-black text-4xl px-4 py-2 rounded shadow-lg tracking-widest border-2 border-gray-300 font-mono">0</div>
                     <button className="bg-green-600 hover:bg-green-500 text-white font-bold text-sm px-6 py-4 rounded shadow-lg uppercase tracking-wider ml-4 transition-colors">
                        CONFIRMA
                     </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Meaning;