
import React, { useState } from 'react';
import { Proposal } from '../types';
import { BookOpen, GraduationCap, Stethoscope, Coins, Building2, ShieldCheck, ArrowRight, TrendingUp, Users, Zap, BarChart3, Calendar, CheckSquare, Trophy } from 'lucide-react';
import { IMAGES } from '../assets';

const Proposals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Educação", "Saúde", "Economia", "Habitação", "Segurança", "Cultura"];

  const proposals: Proposal[] = [
    {
      title: "Educação Integral 360º",
      description: "Revolução na grade curricular com foco em tecnologia, programação e inteligência emocional desde a base. Escola em tempo integral real.",
      category: "Educação"
    },
    {
      title: "Universidade do Futuro",
      description: "Criação de polos tecnológicos regionais integrados às universidades federais, focados em pesquisa de ponta e inovação.",
      category: "Educação"
    },
    {
      title: "Saúde Inteligente (e-SUS)",
      description: "Digitalização total do SUS com prontuário único nacional e uso de IA para triagem e agendamento, zerando filas.",
      category: "Saúde"
    },
    {
      title: "Medicina Preventiva",
      description: "Ampliação maciça do Programa Saúde da Família, levando médicos e enfermeiros para dentro das comunidades.",
      category: "Saúde"
    },
    {
      title: "Brasil Empreendedor",
      description: "Linhas de crédito a juro zero para microempreendedores (MEI) e startups de impacto social. Desburocratização total em 24h.",
      category: "Economia"
    },
    {
      title: "Reindustrialização Verde",
      description: "Incentivos fiscais para indústrias que utilizam energia limpa e processos sustentáveis. O Brasil como líder da economia verde.",
      category: "Economia"
    },
    {
      title: "Moradia Digna",
      description: "Urbanização inteligente de favelas e financiamento facilitado para a primeira casa própria com juros subsidiados.",
      category: "Habitação"
    },
    {
      title: "Cidade Segura",
      description: "Policiamento comunitário integrado com tecnologia de monitoramento e inteligência para prevenção de crimes.",
      category: "Segurança"
    },
    {
      title: "Potência Cultural e Esportiva",
      description: "Construção de centros olímpicos de alto rendimento em periferias e isenção fiscal para produções artísticas nacionais.",
      category: "Cultura"
    }
  ];

  const filteredProposals = activeCategory === "Todos" 
    ? proposals 
    : proposals.filter(p => p.category === activeCategory);

  const getIcon = (category: string) => {
    switch(category) {
        case 'Educação': return <GraduationCap className="w-6 h-6" />;
        case 'Saúde': return <Stethoscope className="w-6 h-6" />;
        case 'Economia': return <Coins className="w-6 h-6" />;
        case 'Habitação': return <Building2 className="w-6 h-6" />;
        case 'Segurança': return <ShieldCheck className="w-6 h-6" />;
        case 'Cultura': return <Trophy className="w-6 h-6" />;
        default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const getTheme = (category: string) => {
      switch(category) {
        case 'Educação': return 'bg-blue-50 text-blue-600 border-blue-200 group-hover:border-blue-500';
        case 'Saúde': return 'bg-green-50 text-green-600 border-green-200 group-hover:border-green-500';
        case 'Economia': return 'bg-yellow-50 text-yellow-700 border-yellow-200 group-hover:border-yellow-500';
        case 'Habitação': return 'bg-purple-50 text-purple-600 border-purple-200 group-hover:border-purple-500';
        case 'Segurança': return 'bg-slate-50 text-slate-700 border-slate-200 group-hover:border-slate-500';
        case 'Cultura': return 'bg-orange-50 text-orange-600 border-orange-200 group-hover:border-orange-500';
        default: return 'bg-gray-50 text-gray-600 border-gray-200';
      }
  };

  return (
    <section id="propostas" className="py-28 bg-[#F8FAFC] relative">
        {/* Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-patriot-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
             <span className="text-patriot-blue font-bold tracking-widest uppercase text-sm mb-2 block">Plano de Governo</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-serif">Compromissos para o Futuro</h2>
             <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Não fazemos promessas vazias. Apresentamos propostas concretas, com viabilidade econômica e foco no cidadão.
             </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border-2 ${
                        activeCategory === cat 
                        ? 'bg-patriot-blue border-patriot-blue text-white shadow-lg scale-105' 
                        : 'bg-white border-gray-200 text-gray-500 hover:border-patriot-blue/50 hover:text-patriot-blue'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Proposals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProposals.map((prop, index) => (
            <div key={`${prop.title}-${index}`} className="flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors border ${getTheme(prop.category)}`}>
                        {getIcon(prop.category)}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider py-1 px-3 bg-gray-50 rounded-full">{prop.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-patriot-blue transition-colors leading-tight">{prop.title}</h3>
                
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">
                    {prop.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50">
                    <button className="text-patriot-blue font-bold text-sm flex items-center group/btn">
                        Ler detalhamento
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
          ))}
        </div>

        {/* New Section: Impact Goals Dashboard */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="text-patriot-green w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-900">Metas de Impacto 2030</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 bg-patriot-green/20 rounded-full blur-2xl group-hover:bg-patriot-green/30 transition-all"></div>
                    <div className="relative z-10">
                        <TrendingUp className="text-patriot-green w-8 h-8 mb-4" />
                        <span className="text-5xl font-black tracking-tighter block mb-2">3%</span>
                        <p className="text-gray-400 font-medium">Crescimento do PIB ao ano (Média)</p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all"></div>
                    <div className="relative z-10">
                        <Users className="text-blue-400 w-8 h-8 mb-4" />
                        <span className="text-5xl font-black tracking-tighter block mb-2">5M+</span>
                        <p className="text-gray-400 font-medium">Novos postos de trabalho formal</p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-16 bg-yellow-500/20 rounded-full blur-2xl group-hover:bg-yellow-500/30 transition-all"></div>
                    <div className="relative z-10">
                        <Zap className="text-patriot-yellow w-8 h-8 mb-4" />
                        <span className="text-5xl font-black tracking-tighter block mb-2">100%</span>
                        <p className="text-gray-400 font-medium">Escolas conectadas com 5G</p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-16 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                    <div className="relative z-10">
                        <Building2 className="text-purple-400 w-8 h-8 mb-4" />
                        <span className="text-5xl font-black tracking-tighter block mb-2">Zero</span>
                        <p className="text-gray-400 font-medium">Déficit habitacional em áreas de risco</p>
                    </div>
                </div>
            </div>
        </div>

        {/* New Section: 100 Days Roadmap */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl mb-16">
            <div className="flex items-center gap-3 mb-10">
                <Calendar className="text-patriot-blue w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-900">Roadmap: Primeiros 100 Dias</h3>
            </div>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-gray-100 md:left-1/2 md:-ml-0.5"></div>

                <div className="space-y-12">
                    {/* Item 1 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                            <h4 className="text-xl font-bold text-slate-900">Dia 01-30</h4>
                            <p className="text-slate-500 font-medium">Choque de Gestão</p>
                            <p className="text-sm text-slate-400 mt-2">Auditoria completa das contas públicas e corte de privilégios do executivo.</p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:-ml-3 w-10 h-10 md:w-6 md:h-6 bg-white border-4 border-patriot-green rounded-full z-10 flex items-center justify-center">
                            <div className="w-2 h-2 bg-patriot-green rounded-full"></div>
                        </div>
                        <div className="flex-1 md:pl-12 opacity-0 hidden md:block"></div> {/* Spacer */}
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="flex-1 md:pr-12 opacity-0 hidden md:block"></div> {/* Spacer */}
                        <div className="absolute left-0 md:left-1/2 md:-ml-3 w-10 h-10 md:w-6 md:h-6 bg-white border-4 border-patriot-blue rounded-full z-10 flex items-center justify-center">
                             <div className="w-2 h-2 bg-patriot-blue rounded-full"></div>
                        </div>
                        <div className="flex-1 md:pl-12 pl-12">
                             <h4 className="text-xl font-bold text-slate-900">Dia 31-60</h4>
                            <p className="text-slate-500 font-medium">Reforma Administrativa Ágil</p>
                            <p className="text-sm text-slate-400 mt-2">Digitalização de 500 serviços públicos e lançamento do App Único do Cidadão.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                         <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0 pl-12 md:pl-0">
                            <h4 className="text-xl font-bold text-slate-900">Dia 61-100</h4>
                            <p className="text-slate-500 font-medium">Pacto Pelo Emprego</p>
                            <p className="text-sm text-slate-400 mt-2">Lançamento das linhas de crédito para pequenos negócios e início das obras paradas.</p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:-ml-3 w-10 h-10 md:w-6 md:h-6 bg-white border-4 border-patriot-yellow rounded-full z-10 flex items-center justify-center">
                             <div className="w-2 h-2 bg-patriot-yellow rounded-full"></div>
                        </div>
                         <div className="flex-1 md:pl-12 opacity-0 hidden md:block"></div> {/* Spacer */}
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-patriot-blue to-[#001540] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            <div 
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `url(${IMAGES.textures.cubes})` }}
            ></div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-patriot-yellow/10 rounded-full blur-[80px] group-hover:bg-patriot-yellow/20 transition-all"></div>
            
            <div className="relative z-10 mb-8 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                    <CheckSquare className="text-patriot-yellow" />
                    <h3 className="text-2xl md:text-3xl font-bold">Quer contribuir com ideias?</h3>
                </div>
                <p className="text-blue-200 max-w-lg">Nosso plano de governo é vivo e colaborativo. Sua proposta pode virar lei. Envie sua sugestão agora.</p>
            </div>
            
            <a href="#junte-se" className="relative z-10 px-8 py-4 bg-patriot-yellow text-patriot-blue font-bold rounded-xl shadow-lg hover:bg-white transition-all transform hover:scale-105 flex items-center gap-2">
                Participar da Construção
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
