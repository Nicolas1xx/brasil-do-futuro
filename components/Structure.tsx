import React from 'react';
import { UsersRound, Globe, Medal, Rocket, MapPin, Zap } from 'lucide-react';

const Structure: React.FC = () => {
  return (
    <section id="organizacao" className="py-24 bg-patriot-light relative overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
            <span className="text-patriot-blue font-bold tracking-widest uppercase text-sm">Organograma</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6 font-serif">Estrutura de Alta Performance</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Abandonamos a burocracia tradicional. Nossa estrutura é ágil, conectada e focada em resultados reais para a população.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Command - CRC */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:shadow-patriot-blue/30 transition-all border border-slate-700">
                <div className="absolute top-0 right-0 p-32 bg-patriot-blue rounded-full filter blur-[100px] opacity-20"></div>
                
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-patriot-yellow rounded-xl shadow-lg shadow-yellow-500/20">
                            <UsersRound className="w-8 h-8 text-patriot-dark" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Conselho (CRC)</h3>
                            <p className="text-gray-400 text-sm">Representação Comunitária</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed border-l-4 border-patriot-yellow pl-4">
                        "O coração do partido. Onde as demandas do bairro se transformam em projetos de lei."
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <MapPin className="w-6 h-6 text-green-400 mb-2" />
                            <span className="text-sm font-bold block">Foco Local</span>
                            <span className="text-xs text-gray-500">Bairros e Vilas</span>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <Zap className="w-6 h-6 text-blue-400 mb-2" />
                            <span className="text-sm font-bold block">Conexão Ágil</span>
                            <span className="text-xs text-gray-500">Sem intermediários</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Status Atual</span>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-400 font-mono text-sm">ATIVO E OPERANTE EM 26 ESTADOS</span>
                    </div>
                </div>
            </div>

            {/* Strategic Arms - CSE */}
            <div className="lg:col-span-7 space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-slate-900">Conselho Setorial Estratégico (CSE)</h3>
                        <span className="px-3 py-1 bg-blue-100 text-patriot-blue rounded-full text-xs font-bold uppercase">Inteligência</span>
                     </div>
                     <p className="text-slate-600 mb-8">Câmaras técnicas especializadas formadas por especialistas de mercado.</p>
                     
                     <div className="space-y-4">
                        <div className="group flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-patriot-yellow hover:shadow-lg transition-all cursor-default">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-sm">
                                <Medal className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 text-lg">Câmara de Esportes e Cultura</h4>
                                <p className="text-sm text-slate-500">Inclusão social através do talento e excelência.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-patriot-yellow group-hover:border-patriot-yellow transition-colors">
                                <span className="text-gray-400 group-hover:text-patriot-dark">→</span>
                            </div>
                        </div>

                        <div className="group flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition-all cursor-default">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-sm">
                                <Globe className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 text-lg">Câmara de Relações Internacionais</h4>
                                <p className="text-sm text-slate-500">Soft power e diplomacia comercial estratégica.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors">
                                <span className="text-gray-400 group-hover:text-white">→</span>
                            </div>
                        </div>

                        <div className="group flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-purple-500 hover:shadow-lg transition-all cursor-default">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-sm">
                                <Rocket className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 text-lg">Câmara de Inovação</h4>
                                <p className="text-sm text-slate-500">Modernização do estado e economia digital.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors">
                                <span className="text-gray-400 group-hover:text-white">→</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;