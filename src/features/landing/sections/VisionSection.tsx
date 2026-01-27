import React from 'react'; 
import { Globe, Briefcase, MessagesSquare, Smile } from 'lucide-react';
import { Reveal } from '../ui';

export const VisionSection: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Fale com o mundo',
      desc: 'Comunique-se com pessoas de qualquer lugar com naturalidade.',
    },
    {
      icon: Briefcase,
      title: 'Cresça profissionalmente',
      desc: 'Destrave oportunidades e avance na sua carreira.',
    },
    {
      icon: MessagesSquare,
      title: 'Inglês para a vida real',
      desc: 'Fluência aplicada a reuniões, viagens e conversas reais.',
    },
    {
      icon: Smile,
      title: 'Confiança ao se expressar',
      desc: 'Fale sem medo, bloqueios ou insegurança.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28 md:py-32 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-green-900/25 via-black to-black opacity-60" />
      </div>

      {/* CONTAINER COM MAIS ESPAÇO LATERAL NO MOBILE */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <div>
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-bold mb-6 leading-tight">
                O inglês que te dá liberdade de verdade.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                Imagine participar de reuniões, viagens e conversas internacionais
                com segurança, clareza e confiança.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                Com a Growen, o inglês deixa de ser um obstáculo e se torna uma
                ferramenta para conquistar oportunidades e viver sem barreiras.
              </p>
            </Reveal>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <Reveal
                  key={i}
                  delay={400 + i * 100}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-[#22c55e]/10 text-[#22c55e]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#9ca3af] font-interTight text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* BRIDGE TO CTA */}
            <Reveal delay={900}>
              <p className="mt-10 text-sm sm:text-base text-[#9ca3af] font-interTight font-medium">
                E tudo começa com a sua primeira conversa.
              </p>
            </Reveal>
          </div>

          {/* IMAGE / MASCOT */}
          <Reveal delay={500} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#22c55e]/10 rounded-[3rem] blur-3xl" />

              <img
                src="/arquivos/preguizioportal.svg"
                alt="Mascote Growen"
                className="relative w-full max-w-120 object-contain"
                width="480"
                height="600"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
