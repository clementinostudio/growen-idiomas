import { Mic, MessageCircle, ShieldCheck, TrendingUp, Lock, Puzzle, MicOff, Rocket, BookOpen, Zap, Repeat, Sprout, Hammer, BrainCircuit, Users, Heart, UserCheck, Globe } from 'lucide-react';
import { Feature, Benefit, Testimonial, Step, FaqItem } from '../types';

export const APP_NAME = "Growen Idiomas";

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Gramática e Tradução",
    icon: BookOpen,
    shortDescription: "O método clássico para criar uma base estrutural sólida e entendimento lógico.",
    howItWorks: [
      "Baseia-se na tradução direta entre língua materna e língua-alvo.",
      "Forte ênfase em gramática, regras e vocabulário isolado.",
      "Os alunos aprendem a 'pensar na gramática' antes de produzir frases."
    ],
    whenToUse: [
      "Para alunos que precisam de leitura e escrita formais (universidade, provas, concursos).",
      "Adultos analíticos que gostam de lógica e estrutura."
    ],
    practicalExamples: [
      "Traduzir um parágrafo literário ou jornalístico para identificar tempos verbais.",
      "Fazer exercícios de transformação (afirmativa → negativa → interrogativa)."
    ],
    exercises: [
      "Tradução de frases e tradução reversa.",
      "Identificação de tempos verbais em textos.",
      "Versão comentada justificando escolhas gramaticais."
    ],
    note: "Pode ser visto como 'pouco comunicativo', mas é muito eficaz para criar uma base sólida e evitar lacunas gramaticais."
  },
  {
    id: 2,
    title: "Método Direto",
    icon: Zap,
    shortDescription: "Imersão total desde o primeiro dia, sem tradução, focado na associação direta.",
    howItWorks: [
      "A língua estrangeira é usada desde o primeiro dia, sem tradução.",
      "Envolve imagens, gestos, mímicas e contexto.",
      "O aluno entende pelo uso prático e não por explicações em português."
    ],
    whenToUse: [
      "Excelente para nível iniciante e desbloqueio da fala.",
      "Aulas dinâmicas presenciais ou com recursos visuais.",
      "Ideal para quem assimila rápido sem precisar de explicação metalinguística."
    ],
    practicalExamples: [
      "Mostrar uma caneca e dizer 'cup' para conexão visual imediata.",
      "Drills de perguntas e respostas rápidas (What's this? It's a pen).",
      "Roleplays simulando vida real (pedir comida, comprar ingresso)."
    ],
    exercises: [
      "Flashcards com imagens.",
      "Show and Tell: trazer objeto e falar sobre ele.",
      "Descrever o colega usando adjetivos."
    ],
    note: "Funciona muito bem para desbloquear a fala, mas mesclamos com explicações gramaticais pontuais para alunos analíticos."
  },
  {
    id: 3,
    title: "Método Audiolingual",
    icon: Repeat,
    shortDescription: "Automatização de estruturas através da repetição para criar reflexo condicionado.",
    howItWorks: [
      "Baseado em repetição mecânica e automatização de estruturas.",
      "Alunos repetem frases em coro e fazem drills de substituição.",
      "A ideia é que a língua vire 'reflexo condicionado', como dirigir."
    ],
    whenToUse: [
      "Nível básico/intermediário para automatizar estruturas (ex: Past Simple).",
      "Eficiente com alunos tímidos, pois dá segurança pela repetição."
    ],
    practicalExamples: [
      "Repetition drill para pronúncia e ritmo.",
      "Substitution drill para flexibilidade estrutural (He is walking → They are...).",
      "Transformation drill (Afirmativa → Negativa)."
    ],
    exercises: [
      "Repetição em coro.",
      "Chain drill (cada aluno repete e adiciona algo).",
      "Memorização e encenação de diálogos prontos."
    ],
    note: "Serve como 'academia' da língua: repetitivo, mas fortalece os músculos da fala."
  },
  {
    id: 4,
    title: "Abordagem Comunicativa",
    icon: MessageCircle,
    shortDescription: "Foco total na comunicação real e na mensagem, com a gramática aprendida pelo uso.",
    howItWorks: [
      "Foco na comunicação real, mesmo que com erros.",
      "Usa tarefas, roleplays e diálogos abertos.",
      "A gramática aparece indutivamente (o aluno percebe pela prática)."
    ],
    whenToUse: [
      "Para quem quer falar no dia a dia, viajar ou trabalhar.",
      "Funciona em qualquer nível, adaptando a complexidade."
    ],
    practicalExamples: [
      "Roleplay em aeroportos, restaurantes e hotéis.",
      "Entrevistas entre pares sobre hobbies e rotina.",
      "Dar e receber direções em um mapa da cidade."
    ],
    exercises: [
      "Simulação de check-in.",
      "Resolução de problemas em grupo.",
      "Debates simples dividindo a turma em dois lados."
    ],
    note: "O método mais moderno para fluência oral. Balanceamos com explicações pontuais para evitar lacunas."
  },
  {
    id: 5,
    title: "Método Lexical",
    icon: Puzzle,
    shortDescription: "Aprenda blocos de linguagem (chunks) prontos para soar natural e fluido.",
    howItWorks: [
      "Foco em 'chunks of language' (expressões prontas) em vez de palavras isoladas.",
      "O aluno aprende blocos como 'at the end of the day' sem traduzir palavra por palavra.",
      "A gramática é aprendida como consequência."
    ],
    whenToUse: [
      "Nível intermediário/avançado para soar mais nativo.",
      "Profissionais que precisam de inglês específico (business, jurídico)."
    ],
    practicalExamples: [
      "Ensinar expressões como 'by the way' ou 'make a decision'.",
      "Reformulação de frases robóticas para naturais (I'm tired → I'm worn out)."
    ],
    exercises: [
      "Matching game (ligar expressões a significados).",
      "Gap-fill completando com chunks.",
      "Diálogo guiado usando obrigatoriamente 5 expressões novas."
    ],
    note: "Dá ao aluno as 'peças de Lego' da língua já montadas, acelerando a fluência."
  },
  {
    id: 6,
    title: "Abordagem Natural",
    icon: Sprout,
    shortDescription: "Aquisição natural baseada em input compreensível e baixo estresse.",
    howItWorks: [
      "Compreensão auditiva vem antes da produção.",
      "O aluno ouve muito e responde inicialmente com gestos ou palavras simples.",
      "Prioriza input compreensível em ambiente de baixo estresse."
    ],
    whenToUse: [
      "Iniciantes absolutos para tirar o medo de falar 'errado'.",
      "Ótimo para quem tem muita ansiedade ou bloqueio."
    ],
    practicalExamples: [
      "Storytelling com imagens onde o aluno entende pelo contexto.",
      "Comandos não-verbais (Point to the door).",
      "Listening com respostas simples de Yes/No."
    ],
    exercises: [
      "Storytelling guiado.",
      "Comandos físicos (Total Physical Response).",
      "Sequência de ações narradas pelo professor."
    ],
    note: "Respeita o tempo do aluno, evitando traumas por forçar a fala antes da hora."
  },
  {
    id: 7,
    title: "Task-Based Learning",
    icon: Hammer,
    shortDescription: "Aprenda fazendo: o inglês é a ferramenta para resolver tarefas reais.",
    howItWorks: [
      "Aprendizagem centrada em tarefas concretas e significativas.",
      "O aluno aprende fazendo algo prático (planejar viagem, criar receita).",
      "Gramática e vocabulário são ferramentas para cumprir a missão."
    ],
    whenToUse: [
      "Nível intermediário/avançado.",
      "Aulas em grupo para promover colaboração."
    ],
    practicalExamples: [
      "Planejar um roteiro de viagem real com orçamento.",
      "Criar uma propaganda ou gravar um podcast.",
      "Seguir uma receita culinária em inglês."
    ],
    exercises: [
      "Planejamento de viagem em grupos.",
      "Projeto de marketing.",
      "Jogo de resolução de problemas (ex: perdeu passaporte)."
    ],
    note: "O inglês deixa de ser o fim e vira o meio. Isso motiva muito pela utilidade prática."
  },
  {
    id: 8,
    title: "Solução Resiliente",
    icon: BrainCircuit,
    shortDescription: "Estratégias para nunca travar: comunique-se mesmo quando esquecer a palavra.",
    howItWorks: [
      "Foco em ensinar o aluno a não travar diante de situações reais.",
      "Uso de estratégias como paráfrase, gestos e simplificação.",
      "A ideia central é: comunicar primeiro, ajustar depois."
    ],
    whenToUse: [
      "Essencial do básico ao intermediário, onde o medo de errar é maior.",
      "Preparação para viagens, entrevistas e situações de alta ansiedade."
    ],
    practicalExamples: [
      "Esqueceu 'wallet'? Diga 'the thing with money and cards'.",
      "Narrativa interrompida: professor bloqueia uma palavra e aluno reformula.",
      "Uso de gestos para explicar situações complexas."
    ],
    exercises: [
      "Explicação de palavras proibidas (Taboo).",
      "Roleplay de situações de emergência.",
      "Reformulação de frases complexas para simples."
    ],
    note: "Prepara para a vida real, onde a mensagem importa mais que a perfeição gramatical."
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, text: "Falar inglês com total confiança" },
  { id: 2, text: "Participar de reuniões internacionais" },
  { id: 3, text: "Viajar o mundo sem medo de travar" },
  { id: 4, text: "Pensar em inglês naturalmente" },
  { id: 5, text: "Destravar sua carreira profissional" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Paola",
    role: "Aluna Growen",
    text: "A Growen é uma excelente escola de idiomas, com excelentes metodologias de estudos e um bom material. As aulas são práticas e didáticas, sempre conversamos em inglês para que possamos facilitar a comunicação com outras pessoas. A Growen é um lugar onde aprender inglês deixa de ser obrigação e passa a ser algo prazeroso e estimulante. Recomendo muito!",
    image: "/Alunos/Paola.jpeg",
  },
  {
    id: 2,
    name: "Adan Machado",
    role: "Aluno Growen",
    text: "Procurei as aulas por uma oportunidade de crescimento. As aulas superaram as expectativas. Através da metodologia alcancei meus objetivos. Durante as aulas perdi o medo de tentar. Já recomendei 3 amigos! O que mais gosto é a metodologia diferenciada. Recomendo o curso a todos que querem buscar excelência no idioma.",
    image: "/Alunos/Adanmachado.jpeg",
  },
  {
    id: 3,
    name: "Vitória Nascimento",
    role: "Aluna Growen",
    text: "Fui muito bem recebida, a aula superou minha expectativas, o professor é muito atencioso e paciente, as aulas são dinâmicas. Indico para quem queira aprender inglês de forma prática, legal e com facilidade. Com certeza irei utilizar os ensinamentos! ❤️🥰",
    image: "/Alunos/Vitórianascimento.jpeg",
  },
  {
    id: 4,
    name: "Mislaine Macedo",
    role: "Aluna Growen",
    text: "O método de ensino diferenciado e inovador foi o que mais chamou minha atenção. A Growen conseguiu tornar o aprendizado do idioma muito mais acessível e prazeroso. O professor me deu a confiança necessária para usar o inglês em situações reais. Minhas expectativas foram não apenas atendidas, mas superadas!",
    image: "/Alunos/MislaineMacedo.jpeg",
  },
  {
    id: 5,
    name: "Ana Queiroz",
    role: "Aluna Growen",
    text: "Uma experiência incrível! A Growen me chamou muito a atenção pela forma de estudos simples e fácil de aprender. Os métodos são os melhores, com jogos e interações com outros alunos. Um lugar acolhedor, professores que te auxiliam e ajudam de verdade. Não vejo a hora de ir para o exterior para colocar em prática meu inglês! Thank you Growen 💕",
    image: "/Alunos/AnaQueiroz.jpeg",
  },
  {
    id: 6,
    name: "Alessandra Ribeiro",
    role: "Aluna Growen",
    text: "A Growen me atraiu pela didática diferenciada e a forma de abordagem do professor totalmente diferente. A conversação flui e aprendo muito além do método convencional. O valor é ótimo e bem atrativo e as aulas totalmente dedicadas a cada perfil.",
    image: "/Alunos/Alessandra Ribeiro.jpeg",
  },
  {
    id: 7,
    name: "Luan Henrique",
    role: "Aluno Growen",
    text: "Simplesmente o Pelé do inglês! Aulas dinâmicas e divertidas em que você realmente se expressa na língua. Análises precisas dos pontos em que o aluno deve focar para melhorar. É o curso certo pra quem quer aprender a não só falar inglês mas como viver o inglês.",
    image: "/Alunos/Luan Henrique.jpeg",
  },
  {
    id: 8,
    name: "Yara Barboza",
    role: "Aluna Growen",
    text: "A Growen me atraiu pelo ótimo preço, simpatia do professor e qualidade das aulas. A coisa mais valiosa é ver que eu consigo me comunicar em inglês! Essas aulas me fizeram ter um amor pelo idioma. Você aprende se divertindo, não é algo tedioso! Não tem outra escola de inglês como essa, tenho certeza!",
    image: "/Alunos/YaraBarboza.jpeg",
  },
  {
    id: 9,
    name: "Augusto França",
    role: "Aluno Growen",
    text: "Growen é uma excelente escola de inglês. Professor com excelente didática e muito gente boa. Mensalidade com ótimo preço. Recomendo a todos a escola!!",
    image: "/Alunos/AugustoFrança.jpeg",
  },
  {
    id: 10,
    name: "Luis Cesar",
    role: "Aluno Growen",
    text: "Eu estava procurando um curso de Inglês que oferecesse um método diferente de ensino para aprimorar a conversação... e encontrei na Growen! Já fiz outros cursos em outras Academias, porém nenhum se assemelha. O método de ensino é muito simples e intuitivo, te leva a se 'soltar' e a conversação começa a fluir com naturalidade. O Professor tem uma didática muito boa, consegue transmitir o conteúdo de uma forma muito leve e eficaz. Thank you Teacher Bruno!",
    image: "/Alunos/LuisCesar.jpeg",
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Agende sua Aula",
    description: "Preencha o formulário rápido e escolha o melhor horário.",
  },
  {
    id: 2,
    title: "Converse com a Equipe",
    description: "Entendemos seu nível e seus objetivos específicos.",
  },
  {
    id: 3,
    title: "Faça a Aula Teste",
    description: "Experimente o método na prática, sem compromisso.",
  },
  {
    id: 4,
    title: "Comece a Falar",
    description: "Matricule-se e transforme seu futuro agora.",
  },
];

export const PAIN_POINTS = [
  {
    icon: ShieldCheck, 
    title: "Autoconfiança",
    description: "Para quem busca a tranquilidade de falar com naturalidade, transformando conhecimento em conversas com postura."
  },
  {
    icon: Heart, 
    title: "Parceria",
    description: "Para quem procura um professor que seja um parceiro de jornada, focado e comprometido com o seu sucesso."
  },
  {
    icon: UserCheck,
    title: "Ensino Adaptativo",
    description: "Para quem quer uma jornada de aprendizado que se molda à sua rotina, ao seu perfil e aos seus objetivos pessoais."
  },
  {
    icon: Users,
    title: "Conexão Humana",
    description: "Para quem valoriza a troca genuína e entende que a verdadeira comunicação acontece entre pessoas, e com pessoas."
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Para quem vê o Inglês como uma ponte para o futuro, abrindo portas para o seu crescimento pessoal e profissional."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Preciso saber inglês antes de começar?",
    answer: "Não! Temos metodologias específicas desenhadas para quem está começando do zero absoluto. Você aprende no seu ritmo, sem pressão."
  },
  {
    id: 2,
    question: "As aulas são presenciais ou online?",
    answer: "100% online e ao vivo. Você tem a flexibilidade de estudar de onde estiver, mas com a interação real e feedback imediato de um professor e turma."
  },
  {
    id: 3,
    question: "Em quanto tempo começo a falar?",
    answer: "Desde a primeira aula. Diferente de cursos tradicionais que esperam anos para introduzir a fala, nosso foco é que você produza frases e se comunique desde o dia 1."
  },
  {
    id: 4,
    question: "Posso cancelar quando quiser?",
    answer: "Sim. Acreditamos na qualidade do nosso ensino, não em multas contratuais. Você tem total liberdade para cancelar sua assinatura se sentir que não é para você."
  },
  {
    id: 5,
    question: "É só conversação ou também tem base?",
    answer: "É conversação com base sólida. A gramática e o vocabulário são ensinados de forma contextualizada e prática. Você entende o 'porquê' das regras usando-as, não apenas decorando."
  }
];

export const SOCIAL_LINKS = {
  YOUTUBE: "https://www.youtube.com/@growenidiomas",
  FACEBOOK: "https://www.facebook.com/profile.php?id=61564763555348",
  INSTAGRAM: "https://www.instagram.com/growen.idiomas/",
  TIKTOK: "https://www.tiktok.com/@growenidiomas",
  LINKEDIN: "https://www.linkedin.com/company/growenidiomas",
  WHATSAPP: "https://wa.me/43996536535?text=quero%20minha%20aula%20teste"
};
