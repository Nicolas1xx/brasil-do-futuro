import React from 'react';
import { Flag, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="junte-se" className="bg-patriot-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <Flag className="text-patriot-green h-8 w-8 fill-current" />
                <span className="text-white font-bold text-2xl uppercase">Brasil do Futuro</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
                Unidos, Construiremos um Novo Brasil!
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
                Este é o nosso chamado à ação. Convido cada brasileiro a se juntar a nós nesta jornada de esperança, trabalho e transformação.
            </p>
            <form className="flex gap-2 max-w-md">
                <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-patriot-yellow focus:ring-1 focus:ring-patriot-yellow"
                />
                <button className="bg-patriot-green hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    Participar
                </button>
            </form>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2 inline-block">Menu Rápido</h4>
            <ul className="space-y-3">
                <li><a href="#essencia" className="text-gray-400 hover:text-patriot-yellow transition-colors">Nossa Essência</a></li>
                <li><a href="#pilares" className="text-gray-400 hover:text-patriot-yellow transition-colors">Pilares</a></li>
                <li><a href="#propostas" className="text-gray-400 hover:text-patriot-yellow transition-colors">Propostas</a></li>
                <li><a href="#lideranca" className="text-gray-400 hover:text-patriot-yellow transition-colors">Liderança</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contato</h4>
             <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-400">
                     <Mail size={18} />
                     <span>contato@brasildofuturo.com.br</span>
                 </li>
                 <li className="flex gap-4 mt-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-patriot-blue hover:scale-110 transition-all">
                        <Facebook size={20} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-patriot-blue hover:scale-110 transition-all">
                        <Instagram size={20} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-patriot-blue hover:scale-110 transition-all">
                        <Twitter size={20} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-patriot-blue hover:scale-110 transition-all">
                        <Youtube size={20} />
                     </a>
                 </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 Movimento Brasil do Futuro. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
                A Força do Nosso Povo é a Força do Brasil <Flag size={14} className="text-patriot-yellow inline" />
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;