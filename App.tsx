import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, ChevronRight, Star, Menu, X, Facebook, Instagram, 
  ArrowRight, ArrowUpRight, BookX, MessagesSquare, Lightbulb, XCircle,
  MapPin, Users, Image as ImageIcon, Plus, Minus, Globe, Plane, Briefcase, Smile,
  Zap, Target, Clock, Mic, ChevronDown, SlidersHorizontal, MessageSquare
} from 'lucide-react';
import { FEATURES, BENEFITS, TESTIMONIALS, STEPS, PAIN_POINTS, FAQ_ITEMS } from './constants';
import { Feature } from './types';

// Official WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Placeholder Component for images
const ImagePlaceholder = ({ label, className, iconScale = 1 }: { label: string, className?: string, iconScale?: number }) => (
  <div className={`bg-gray-100 border border-transparent flex flex-col items-center justify-center text-gray-400 overflow-hidden transition-colors duration-500 group-hover:bg-gray-200 ${className}`}>
    <ImageIcon className={`w-8 h-8 mb-2 opacity-50 transition-transform duration-700 group-hover:scale-110`} style={{ transform: `scale(${iconScale})` }} />
    <span className="text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">{label}</span>
  </div>
);

// Strategic Mascot Spot Component - NOW REAL MASCOT
const MascotSpot = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
     {/* Visual mascot - Full Quality */}
     <img 
        src="/arquivos/mascote/mascote.png" 
        alt="Mascote Growen" 
        className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
     />
  </div>
);

// --- STATIC DISPLAY COMPONENT (Animations Removed) ---
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Kept for compatibility but unused
  threshold?: number; // Kept for compatibility but unused
}

const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  // Handle Scroll state
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Check initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCta = () => {
    const element = document.getElementById('cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper classes for dynamic navigation colors - ALWAYS DARK THEME
  const navTextClass = 'text-gray-300 hover:text-white';
  const navLogoClass = 'text-white';
  const navIconClass = 'text-gray-400 hover:text-white';
  const navToggleClass = 'text-white';

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-green-500 selection:text-white overflow-x-hidden font-questrial">
      {/* Navigation - Optimized transitions */}
      <nav 
        className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${
          isMenuOpen 
            ? 'bg-[#050505] py-4'
            : scrolled 
              ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-sm shadow-black/50' 
              : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                 <span className="text-green-500 text-xs">∞</span> 
              </div>
              <span className={`font-medium text-lg tracking-wide group-hover:text-green-600 transition-colors ${navLogoClass}`}>Growen Idiomas</span>
            </a>
            
            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#para-quem" onClick={(e) => handleNavClick(e, 'para-quem')} className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}>Para quem</a>
              <a href="#quem-somos" onClick={(e) => handleNavClick(e, 'quem-somos')} className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}>Quem somos</a>
              <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}>Soluções</a>
              <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}>Contato</a>
            </div>

            {/* Right Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-4">
                <a href="#" className={`transition-colors ${navIconClass}`}><Facebook size={20} strokeWidth={1.5} /></a>
                <a href="#" className={`transition-colors ${navIconClass}`}><WhatsAppIcon className="w-5 h-5" /></a>
                <a href="#" className={`transition-colors ${navIconClass}`}><Instagram size={20} strokeWidth={1.5} /></a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${navToggleClass} p-2 hover:bg-white/10 rounded-full transition-colors`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Performance Optimized */}
        <div className={`
          md:hidden fixed inset-0 bg-[#050505] z-40 pt-24
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <div className={`
            flex flex-col items-center justify-center h-full space-y-8 p-6 overflow-y-auto pb-20
            transition-transform duration-300 ease-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}
          `}>
             <a href="#para-quem" onClick={(e) => handleNavClick(e, 'para-quem')} className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors">Para quem</a>
             <a href="#quem-somos" onClick={(e) => handleNavClick(e, 'quem-somos')} className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors">Quem somos</a>
             <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors">Soluções</a>
             <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors">Contato</a>
             
             <div className="flex gap-8 mt-8 pt-8 border-t border-white/10 w-full justify-center">
                <a href="#" className="text-gray-400 hover:text-green-500"><Instagram size={28} /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><WhatsAppIcon className="w-7 h-7" /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><Facebook size={28} /></a>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Black Background) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60 z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animated Left Content */}
            <div className="flex flex-col items-start text-left space-y-6">
              <Reveal>
                <div className="mb-2">
                  <h2 className="text-4xl font-satoshi font-black tracking-tighter text-white leading-none">Growen</h2>
                  <span className="text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase block text-center w-full mt-1">IDIOMAS</span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-5xl md:text-7xl font-satoshi font-bold leading-[1.05] tracking-tight text-white">
                  <span className="block text-[#22c55e]">Pare de estudar inglês.</span>
                  <span className="block">Comece a falar.</span>
                </h1>
              </Reveal>
              <Reveal delay={400}>
                <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-questrial font-medium">
                  Aulas de inglês focadas em conversação real, para quem já cansou de estudar e não consegue falar.
                </p>
              </Reveal>
              <Reveal delay={600} className="pt-6">
                <button 
                  onClick={scrollToCta} 
                  className="group relative flex items-center gap-4 pl-8 pr-2 py-2 bg-[#22c55e] hover:bg-[#1eb053] text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <span className="font-satoshi font-bold text-lg tracking-wide relative">Marque uma aula teste</span>
                  <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden">
                     <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </button>
              </Reveal>
            </div>
            
            {/* Animated Right Content (Mascot) */}
            <div className="relative flex justify-center lg:justify-end h-full min-h-[400px]">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
                 <div className="absolute right-0 top-0 w-64 h-32 border-[12px] border-[#22c55e] rounded-full opacity-20 blur-sm transform rotate-12"></div>
                 <div className="absolute right-20 bottom-0 w-64 h-32 border-[12px] border-[#22c55e] rounded-full opacity-20 blur-sm transform -rotate-12"></div>
              </div>
              <Reveal delay={800} className="relative z-10 w-full flex justify-center lg:justify-end">
                <img 
                  src="/arquivos/mascote/mascote.png" 
                  alt="Mascote Growen" 
                  className="w-full max-w-[550px] object-contain drop-shadow-2xl mask-image-fade-bottom"
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ================================================================
        MINIMALIST SECTIONS 
        ================================================================
      */}

      {/* 1. Identification (Clean Split) - UPDATED TEXT */}
      <section id="para-quem" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Minimal List */}
            <div>
              <Reveal>
                <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-6 block">Para quem é a Growen?</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-satoshi font-bold mb-6 text-gray-900 leading-tight">
                  A Growen Idiomas é para você que sente que entende inglês, mas <span className="text-[#22c55e]">não consegue falar</span>.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                   Para quem já tentou outros cursos, decorou regras, fez exercícios e mesmo assim trava quando precisa se comunicar. Se o seu objetivo é falar com confiança e naturalidade, você está no lugar certo.
                </p>
              </Reveal>
              
              <div className="space-y-8">
                {PAIN_POINTS.map((point, index) => (
                  <Reveal key={index} delay={300 + (index * 100)}>
                    <div className="flex gap-6 group">
                      <div className="shrink-0 pt-1">
                        <point.icon className="w-6 h-6 text-gray-400 group-hover:text-[#22c55e] transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Elegant Image Placeholder - SQUARE AND CONTAINED */}
            <Reveal delay={300} className="relative w-full flex justify-center lg:justify-end">
              <div className="aspect-square w-full max-w-[550px] relative">
                 <ImagePlaceholder label="Foto de Aluno ou Sala de Aula" className="absolute inset-0 rounded-[2.5rem] w-full h-full bg-gray-50 border-gray-200 shadow-sm" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 2. Methodology Intro (EDITORIAL LAYOUT - MINIMALIST) */}
      <section id="solucoes" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Side: The Philosophy */}
            <div className="lg:col-span-5">
              <Reveal>
                 <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                   O Poder de Nossa Metodologia
                 </h2>
              </Reveal>
              
              <Reveal delay={200} className="text-lg text-gray-600 leading-relaxed space-y-8 font-light">
                 <p>
                   Na Growen, não acreditamos em métodos engessados. Acreditamos em estratégia. Utilizamos o <span className="text-gray-900 font-medium">Pós-Método</span>: antes de ensinar, nós entendemos você.
                 </p>
                 <p>
                   Seu nível, seus objetivos e sua rotina definem o caminho. Combinamos as técnicas mais eficazes para o seu desenvolvimento. O resultado é simples: <strong className="text-gray-900 font-bold">menos tempo estudando, mais tempo falando.</strong>
                 </p>
              </Reveal>
            </div>

            {/* Right Side: The Pillars (Clean Minimalist List) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
               <div className="flex flex-col">
                  {/* Item 1 */}
                  <Reveal delay={300} className="group border-t border-gray-100 py-8 flex gap-6 transition-all hover:pl-4">
                     <div className="shrink-0 pt-1">
                        <SlidersHorizontal className="w-6 h-6 text-[#22c55e]" strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2 font-satoshi">Flexibilidade Total</h3>
                        <p className="text-gray-500 leading-relaxed text-base">Aulas que se adaptam a você e ao seu ritmo, não o contrário.</p>
                     </div>
                  </Reveal>

                  {/* Item 2 */}
                  <Reveal delay={400} className="group border-t border-gray-100 py-8 flex gap-6 transition-all hover:pl-4">
                     <div className="shrink-0 pt-1">
                        <Zap className="w-6 h-6 text-[#22c55e]" strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2 font-satoshi">Aprendizado Rápido</h3>
                        <p className="text-gray-500 leading-relaxed text-base">Evolução natural, acelerada e focada em resultados reais.</p>
                     </div>
                  </Reveal>

                  {/* Item 3 */}
                  <Reveal delay={500} className="group border-t border-gray-100 py-8 flex gap-6 transition-all hover:pl-4">
                     <div className="shrink-0 pt-1">
                        <Target className="w-6 h-6 text-[#22c55e]" strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2 font-satoshi">Conteúdo Relevante</h3>
                        <p className="text-gray-500 leading-relaxed text-base">Você aprende o que realmente importa para a sua realidade.</p>
                     </div>
                  </Reveal>

                  {/* Item 4 */}
                  <Reveal delay={600} className="group border-t border-b border-gray-100 py-8 flex gap-6 transition-all hover:pl-4">
                     <div className="shrink-0 pt-1">
                        <MessageSquare className="w-6 h-6 text-[#22c55e]" strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2 font-satoshi">Foco Prático</h3>
                        <p className="text-gray-500 leading-relaxed text-base">100% focado na comunicação e na conversação real.</p>
                     </div>
                  </Reveal>
               </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. About / Gallery - UPDATED TO MINIMALIST INTERACTIVE GRID */}
      <section id="quem-somos" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Content (Simplified) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
             <div className="max-w-3xl">
                <Reveal>
                  <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-4 block">Quem Somos</span>
                  <h2 className="text-3xl md:text-5xl font-satoshi font-bold text-gray-900 mb-8 leading-tight">
                    Conheça a Growen
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                    <p>
                      Imagine falar um novo idioma com confiança, sabendo que você terá o que é necessário para alcançar seus objetivos. Na Growen Idiomas, isso não é promessa distante, é o ponto de partida.
                    </p>
                    <p>
                      Somos mais do que uma escola. Somos um espaço onde o aprendizado é humano, vivo e focado na comunicação real. Aqui, você aprende a falar de verdade, desde o início. Acreditamos que um idioma não se decora, ele se vive.
                    </p>
                    <p>
                      Por isso, cada aula é pensada para você, respeitando sua história, sua personalidade e seu propósito. Na Growen, você não estuda um idioma. Você incorpora uma nova forma de se expressar.
                    </p>
                  </div>
                </Reveal>
             </div>

             {/* Right Column: MASCOT SPOT & ACTION - Replaces Stats */}
             <div className="flex flex-col gap-8 justify-end h-full">
                {/* Large Mascot Space - FULL IMAGE */}
                <Reveal delay={400}>
                  <MascotSpot className="w-full h-auto max-h-[300px] aspect-[4/3]" />
                </Reveal>
                
                <Reveal delay={600}>
                  <button onClick={scrollToCta} className="group flex items-center justify-between gap-3 text-black font-bold text-lg hover:text-[#22c55e] transition-colors border-b border-gray-200 hover:border-[#22c55e] pb-4 pt-2 w-full">
                      <span>Conheça nossa estrutura</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </Reveal>
             </div>
          </div>

          {/* Interactive Bento Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
             {/* Large Item */}
             <Reveal delay={200} className="md:col-span-8 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm">
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
                 <ImagePlaceholder label="Ambiente Social" className="w-full h-full bg-gray-50" />
                 {/* Floating Caption */}
                 <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">A Escola</span>
                 </div>
             </Reveal>

             {/* Side Column Items */}
             <div className="md:col-span-4 flex flex-col gap-6 h-full">
                 <Reveal delay={300} className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm">
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
                     <ImagePlaceholder label="Nossas Turmas" className="w-full h-full bg-gray-50" />
                     <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">Community</span>
                     </div>
                 </Reveal>
                 <Reveal delay={400} className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm">
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
                     <ImagePlaceholder label="Metodologia Ativa" className="w-full h-full bg-gray-50" />
                     <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">Na Prática</span>
                     </div>
                 </Reveal>
             </div>
          </div>

        </div>
      </section>

      {/* 4. NEW SECTION: ONDE A GROWEN QUER TE LEVAR */}
      <section className="py-32 bg-[#050505] text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black opacity-50"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <Reveal>
                    <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-8 leading-tight">
                      Onde a Growen quer te levar?
                    </h2>
                  </Reveal>
                  <Reveal delay={200}>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      Imagine-se participando de reuniões, viagens ou conversas internacionais com segurança. Expressando suas ideias sem medo, sem bloqueios, sem esforço.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                      Com a Growen Idiomas, o idioma deixa de ser um obstáculo e se torna uma ferramenta de liberdade. Na Growen, não ensinamos apenas um idioma. Nós preparamos você para viver um mundo sem barreiras.
                    </p>
                  </Reveal>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                       { icon: Globe, title: "Comunicação Global", desc: "Viajar e se conectar com pessoas do mundo todo." },
                       { icon: Briefcase, title: "Oportunidades", desc: "Acessar novas oportunidades profissionais." },
                       { icon: MessagesSquare, title: "Fluência Real", desc: "Se comunicar com fluência em diferentes contextos." },
                       { icon: Smile, title: "Confiança", desc: "Sentir independência e segurança ao se expressar." }
                     ].map((item, i) => (
                       <Reveal key={i} delay={300 + (i * 100)} className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                             <item.icon size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-white mb-1">{item.title}</h4>
                             <p className="text-gray-500 text-sm">{item.desc}</p>
                          </div>
                       </Reveal>
                     ))}
                  </div>
               </div>
               
               <Reveal delay={500} className="relative pl-0 lg:pl-10">
                  {/* Subtle, natural shadow/glow */}
                  <div className="absolute inset-0 bg-green-500/5 rounded-[3rem] blur-3xl"></div>
                  
                  {/* Highly rounded container, clean look */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/5 p-2">
                     <ImagePlaceholder label="Imagem inspiracional: Viagem / Reunião / Liberdade" className="w-full aspect-[4/3] rounded-[2rem] bg-gray-900/20" />
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 5. Steps (Timeline) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-16">
              <h2 className="text-2xl font-bold text-center text-gray-900 font-satoshi">Sua jornada simplificada</h2>
            </div>
          </Reveal>
          
          <div className="relative">
            {/* Vertical Line Mobile / Horizontal Desktop */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-0 md:right-0 md:top-6 md:h-0.5 md:w-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {STEPS.map((step, index) => (
                <Reveal key={step.id} delay={index * 200} className="relative pl-12 md:pl-0 md:pt-12 md:text-center group">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-200 group-hover:border-[#22c55e] transition-colors z-10"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials (Clean Editorial) */}
      <section id="depoimentos" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-16 text-gray-900 font-satoshi">O que dizem sobre nós</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 150} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#22c55e] fill-current" />)}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {/* Fallback to initials if image fails or placeholder */}
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Strategic Section - ULTRA MINIMALIST DARK */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-left text-white font-satoshi">
              Dúvidas Frequentes
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <Reveal key={faq.id} delay={index * 50}>
                  <div className="border-b border-white/10 last:border-0">
                    <button 
                      onClick={() => toggleFaq(index)} 
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-[#22c55e]' : 'text-gray-200 group-hover:text-white'}`}>
                        {faq.question}
                      </span>
                      
                      <div className={`transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                         <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#22c55e]' : 'text-gray-500 group-hover:text-white'}`} />
                      </div>
                    </button>
                    
                    {/* Silky smooth height transition */}
                    <div 
                      className={`
                        grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pr-8 text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA Final (Minimalist with Mascot) */}
      <section id="cta-section" className="py-32 bg-[#22c55e] text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
           <div className="text-center max-w-2xl">
             <Reveal>
               <h2 className="text-4xl md:text-6xl font-satoshi font-black text-white mb-6 tracking-tight">
                 Comece a falar.
               </h2>
             </Reveal>
             <Reveal delay={200}>
               <p className="text-green-100 text-xl mb-12">
                 Sem matrículas caras, sem contratos abusivos. Apenas inglês real.
               </p>
             </Reveal>
             <Reveal delay={400}>
               <button className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-black/20">
                 Agendar Aula Teste
               </button>
             </Reveal>
           </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Footer (Minimalist) */}
      <footer id="contato" className="bg-white pt-20 pb-10 border-t border-gray-100 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center">
                   <span className="font-bold text-gray-900 text-xs">∞</span>
                </div>
                <span className="font-bold text-xl font-satoshi text-gray-900">Growen</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Revolucionando o ensino de idiomas com foco em conversação real e métodos adaptativos.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Escola</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#para-quem" className="hover:text-[#22c55e]">Metodologia</a></li>
                <li><a href="#quem-somos" className="hover:text-[#22c55e]">Sobre Nós</a></li>
                <li><a href="#solucoes" className="hover:text-[#22c55e]">Preços</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2"><MapPin size={16} /> São Paulo, SP</li>
                <li className="flex items-center gap-2"><WhatsAppIcon className="w-4 h-4" /> (11) 99999-9999</li>
                <li className="flex items-center gap-2">hello@growen.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Growen Idiomas.</p>
            <div className="flex gap-6">
               <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="#" className="fixed bottom-6 right-6 z-50 group">
        <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <WhatsAppIcon className="w-7 h-7 text-white fill-current" />
        </div>
      </a>
    </div>
  );
};

export default App;