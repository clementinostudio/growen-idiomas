import React, { useState } from 'react';
import { Reveal } from '../ui';

type Method = {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

const methods: Method[] = [
  {
    id: 1,
    title: 'Gramática e Tradução',
    icon: (<img src="/amuletos/amuleto1.png" alt="Gramática e Tradução" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Momentos de aprofundamento ou revisão. Após a introdução de um tópico de forma comunicativa, pode ser usado para consolidar a estrutura. Ótimo para tarefas de casa ou para alunos com perfil analítico.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Construir base gramatical sólida; Evitar a fossilização de erros estruturais; Desenvolver precisão na escrita; Aprimorar a habilidade de leitura e tradução formal.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Método Direto',
    icon: (<img src="/amuletos/amuleto2.png" alt="Método Direto" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Início da aula (aquecimento) ou introdução de novo vocabulário. Perfeito para criar um ambiente de imersão desde o primeiro minuto, especialmente com alunos iniciantes.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Associar palavra e significado diretamente; Evitar a tradução mental; Desbloquear a fala inicial; Estimular a memória visual e contextual.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Método Audiolingual',
    icon: (<img src="/amuletos/amuleto3.png" alt="Método Audiolingual" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Fase de prática controlada (Drilling). Após a apresentação de uma nova estrutura gramatical, usar os drills para ajudar na fixação e automatização. Ideal para alunos tímidos ou em níveis iniciais.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Automatizar estruturas gramaticais; Melhorar a pronúncia e o ritmo; Construir segurança para a produção oral.</p>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Método Comunicativo',
    icon: (<img src="/amuletos/amuleto4.png" alt="Método Comunicativo" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Coração da aula (prática principal). É a fase onde os alunos usam a língua de forma mais livre e significativa, aplicando o que foi aprendido em contextos simulados ou reais.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Desenvolver fluência e eficácia comunicativa; Praticar a língua em situações da vida real; Gerar interação genuína entre os alunos.</p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Método Lexical',
    icon: (<img src="/amuletos/amuleto5.png" alt="Método Lexical" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Fase de expansão de vocabulário e naturalidade. Ideal para alunos de nível intermediário a avançado que já se comunicam, mas precisam soar mais fluentes.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Acelerar a fluência; Aumentar a naturalidade da fala; Desenvolver vocabulário específico para áreas profissionais.</p>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Abordagem Natural',
    icon: (<img src="/amuletos/amuleto6.png" alt="Abordagem Natural" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Início do curso com iniciantes absolutos ou com alunos muito ansiosos. Usar em momentos que priorizam a compreensão auditiva antes da produção oral forçada.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Reduzir a ansiedade; Respeitar o período de silêncio; Construir compreensão através de input compreensível.</p>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Task-Based Learning (TBL)',
    icon: (<img src="/amuletos/amuleto7.png" alt="Task-Based Learning (TBL)" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Como projeto principal da aula ou de uma unidade. A aula inteira pode ser estruturada em torno de uma tarefa complexa, desde a preparação até a apresentação final.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Tornar a língua uma ferramenta; Promover colaboração e pensamento crítico; Integrar todas as habilidades linguísticas de forma autêntica.</p>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Solução Resiliente',
    icon: (<img src="/amuletos/amuleto8.png" alt="Solução Resiliente" className="w-16 h-16 object-contain bg-transparent" style={{background: 'transparent'}} />),
    content: (
      <div className="space-y-3 text-[#4C5267]">
        <p className="font-semibold">MOMENTO DA AULA</p>
        <p>Aplicado transversalmente em toda a aula, especialmente nos momentos de prática comunicativa. Reforça estratégias para manter o progresso do aluno.</p>
        <p className="font-semibold">OBJETIVO</p>
        <p>Promover flexibilidade pedagógica; Suportar recuperação de erros; Incentivar abordagem adaptativa em diferentes contextos.</p>
      </div>
    ),
  },
];

export const MethodologySection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(methods[0]?.id ?? null);
  const [iconPage, setIconPage] = useState(0);
  const totalPages = Math.ceil(methods.length / 2);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="solucoes" className="py-28 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-10 pr-0 sm:pl-12 sm:pr-0 md:pl-12 md:pr-0 lg:pl-16 lg:pr-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-fustat font-semibold text-[#204749] mb-10 tracking-tight leading-tight">
                Uma metodologia feita para quem quer{' '}
                <span className="text-[#22c55e]">falar inglês</span>,
                <br />
                não decorar regras
              </h2>
            </Reveal>

            <Reveal delay={200} className="space-y-8">
              <p className="text-lg text-[#4C5267] font-interTight font-medium leading-relaxed">
                Aqui, você não segue um método engessado. Antes de ensinar,
                entendemos você: seu nível, seus objetivos e sua rotina.
              </p>

              <p className="text-xl font-satoshi font-bold text-gray-900">
                Menos tempo estudando.
                <br />
                <span className="text-[#22c55e]">Mais tempo falando inglês.</span>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center lg:-mr-24">
            <Reveal delay={300}>
              <div className="flex flex-col md:flex-row gap-6">

                {/* Icons column (vertical on md+, horizontal scroll on mobile) */}
                <div className="flex md:flex-col gap-3 md:w-40">
                  {/* Vertical carousel showing 3 icons per page on md+; horizontal scroll on small screens */}
                  <div className="hidden md:flex flex-col items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIconPage((p) => Math.max(0, p - 1))}
                      disabled={iconPage === 0}
                      className="text-gray-400 disabled:opacity-40"
                      aria-label="Anterior"
                    >
                      ▲
                    </button>

                    <div className="flex flex-col gap-3">
                      {methods.slice(iconPage * 2, iconPage * 2 + 2).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setOpenId(m.id)}
                          className={`flex flex-col items-center gap-2 p-2 md:p-3 rounded-lg w-32 border ${openId === m.id ? 'ring-2 ring-[#22c55e] border-transparent' : 'border-gray-100'} bg-white hover:shadow-sm transition`}
                          aria-pressed={openId === m.id}
                          aria-label={`Abrir ${m.title}`}
                        >
                          <div className="w-20 h-20 flex items-center justify-center">{m.icon}</div>
                          <div className="text-sm text-center text-[#204749] hidden md:block">{m.title}</div>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setIconPage((p) => Math.min(totalPages - 1, p + 1))}
                      disabled={iconPage >= totalPages - 1}
                      className="text-gray-400 disabled:opacity-40"
                      aria-label="Próximo"
                    >
                      ▼
                    </button>
                    <div className="text-xs text-gray-400 mt-1">{iconPage + 1}/{totalPages}</div>
                    <div className="text-xs text-gray-500 mt-1">Use ▲/▼ para navegar</div>
                  </div>

                  {/* Mobile: horizontal scroll with all icons */}
                  <div className="md:hidden flex gap-3 overflow-x-auto py-2 px-1">
                    {methods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setOpenId(m.id)}
                        className={`flex flex-col items-center gap-2 p-2 rounded-lg min-w-[84px] border ${openId === m.id ? 'ring-2 ring-[#22c55e] border-transparent' : 'border-gray-100'} bg-white hover:shadow-sm transition`}
                        aria-pressed={openId === m.id}
                        aria-label={`Abrir ${m.title}`}
                      >
                        <div className="w-20 h-20 flex items-center justify-center">{m.icon}</div>
                        <div className="text-sm text-center text-[#204749]">{m.title}</div>
                      </button>
                    ))}
                  </div>
                  <div className="md:hidden text-xs text-gray-500 mt-2">Deslize para ver mais amuletos →</div>
                </div>

                {/* Content panel */}
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm min-h-[220px]">
                  <div className="transition-opacity duration-300">
                    {methods.map((m) => (
                      <div key={m.id} className={`${openId === m.id ? 'block' : 'hidden'}`}>
                        <h3 className="text-2xl font-semibold text-[#204749] mb-3">{m.title}</h3>
                        <div className="text-[#4C5267]">{m.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
