import React from 'react';
import { Globe, Briefcase, MessagesSquare, Smile } from 'lucide-react';
import { Reveal } from '../ui';

export const VisionSection: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Comunicação Global',
      desc: 'Viajar e se conectar com pessoas do mundo todo.',
    },
    {
      icon: Briefcase,
      title: 'Oportunidades',
      desc: 'Acessar novas oportunidades profissionais.',
    },
    {
      icon: MessagesSquare,
      title: 'Fluência Real',
      desc: 'Se comunicar com fluência em diferentes contextos.',
    },
    {
      icon: Smile,
      title: 'Confiança',
      desc: 'Sentir independência e segurança ao se expressar.',
    },
  ];

  return (
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
                Imagine-se participando de reuniões, viagens ou conversas
                internacionais com segurança. Expressando suas ideias sem medo,
                sem bloqueios, sem esforço.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Com a Growen Idiomas, o idioma deixa de ser um obstáculo e se
                torna uma ferramenta de liberdade. Na Growen, não ensinamos
                apenas um idioma. Nós preparamos você para viver um mundo sem
                barreiras.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <Reveal
                  key={i}
                  delay={300 + i * 100}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={500} className="relative pl-0 lg:pl-10">
            <div className="absolute inset-0 bg-green-500/5 rounded-[3rem] blur-3xl"></div>
            <img
              src="/arquivos/preguizioportal.svg"
              alt="Mascote Growen"
              className="relative w-full max-w-[500px] object-contain"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
