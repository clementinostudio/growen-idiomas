# Arquitetura de Componentes - Growen Idiomas

## Diagrama Hierárquico

```
┌─────────────────────────────────────────────┐
│            App (src/App.tsx)                │
│  - State: menu, scrolled                    │
│  - Hooks: useScrollPosition, useLockBody... │
│  - Funções: handleNav, handleCTA...         │
└────────────────┬────────────────────────────┘
                 │
     ┌───────────┼───────────┐
     │           │           │
     ▼           ▼           ▼
┌─────────┐ ┌──────────┐ ┌────────────┐
│ Navbar  │ │Mobile    │ │ Sections   │
│         │ │Menu      │ │            │
│(Layout) │ │(Layout)  │ │(9 seções)  │
└─────────┘ └──────────┘ └────────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │ Hero     │  │Identify  │  │Method... │
        │Section   │  │Section   │  │Section   │
        │          │  │          │  │          │
        │UI comp:  │  │UI comp:  │  │UI comp:  │
        │- Reveal  │  │- Reveal  │  │- Reveal  │
        │- Button  │  │-ImagePH  │  │-Pillars  │
        │- Mascot  │  │-SectionT │  │          │
        └──────────┘  └──────────┘  └──────────┘
              │              │              │
              └──────────────┼──────────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
              ┌──────────┐      ┌──────────┐
              │ Footer   │      │ Floating │
              │(Layout)  │      │WhatsApp  │
              │          │      │(Layout)  │
              └──────────┘      └──────────┘
```

## Fluxo de Dados

```
App Component
│
├─→ State Management
│   ├─ isMenuOpen (boolean)
│   ├─ scrolled (from useScrollPosition hook)
│   └─ Event handlers
│
├─→ Layout Components (Props: onClick, isOpen, scrolled)
│   ├─ Navbar (receive: scrolled, onNavClick, onLogoClick)
│   ├─ MobileMenu (receive: isOpen, onNavClick)
│   ├─ Footer (static, no props needed)
│   └─ FloatingWhatsApp (static, no props needed)
│
├─→ Section Components
│   ├─ HeroSection (receive: onCTAClick)
│   ├─ IdentificationSection (no props needed)
│   ├─ MethodologySection (no props needed)
│   ├─ AboutSection (receive: onExploreClick)
│   ├─ VisionSection (no props needed)
│   ├─ StepsSection (no props needed)
│   ├─ TestimonialsSection (no props needed)
│   ├─ FAQSection (internal state: openFaqIndex)
│   └─ CTASection (receive: onCTAClick)
│
└─→ UI Components (Pure presentational)
    ├─ Reveal (wraps content)
    ├─ ImagePlaceholder (static)
    ├─ MascotSpot (static)
    ├─ WhatsAppIcon (SVG, static)
    ├─ SectionTitle (receive: label, title, description)
    └─ ButtonPrimary (receive: text, onClick, href)
```

## Hooks Customizados

```
useScrollPosition
│
├─ Purpose: Detectar quando usuário scrollou
├─ State: scrolled (boolean)
├─ Return: boolean
└─ Uso: App.tsx, Navbar.tsx

useLockBodyScroll
│
├─ Purpose: Bloquear scroll do body quando menu aberto
├─ Input: isLocked (boolean)
├─ Side Effect: document.body.style.overflow
└─ Uso: App.tsx

useSmoothScroll
│
├─ Purpose: Realizar scroll suave para elementos
├─ Return: { scrollToElement, scrollToTop }
├─ Methods:
│  ├─ scrollToElement(id: string)
│  └─ scrollToTop()
└─ Uso: App.tsx, Navbar.tsx, Buttons
```

## Estrutura de Componentes por Camada

```
┌──────────────────────────────────────────────────┐
│                   LAYOUT LAYER                   │
├──────────────────────────────────────────────────┤
│  Navbar │ MobileMenu │ Footer │ FloatingWhatsApp │
│  - Props: eventos de click                       │
│  - State: navegação, menu aberto                 │
│  - Escopos: header e footer da página           │
└──────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────┐
│                  SECTION LAYER                   │
├──────────────────────────────────────────────────┤
│ Hero │ Identify │ Methodology │ About │ Vision  │
│ Steps │ Testimonials │ FAQ │ CTA                │
│ - Props: callbacks (onCTAClick, etc)            │
│ - Podem ter estado local (FAQ)                  │
│ - Reutilizam UI components                      │
└──────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────┐
│                    UI LAYER                      │
├──────────────────────────────────────────────────┤
│ Reveal │ ImagePlaceholder │ MascotSpot          │
│ WhatsAppIcon │ SectionTitle │ ButtonPrimary     │
│ - Props: estilos e conteúdo                     │
│ - Sem estado                                    │
│ - Reutilizáveis em qualquer lugar              │
└──────────────────────────────────────────────────┘
```

## Padrão de Renderização

```
App.tsx
  │
  ├─ render(Navbar + MobileMenu)      [Layout]
  │   ├─ render(Logo + Links)         [UI: WhatsAppIcon]
  │   └─ render(Mobile Menu Links)    [UI: WhatsAppIcon]
  │
  ├─ render(HeroSection)              [Section]
  │   └─ render(Reveal + MascotSpot)  [UI]
  │
  ├─ render(IdentificationSection)    [Section]
  │   └─ render(Reveal + ImagePH)     [UI]
  │
  ├─ render(MethodologySection)       [Section]
  │   └─ render(Reveal + Pillars)     [UI]
  │
  ├─ render(AboutSection)             [Section]
  │   └─ render(Gallery + Reveal)     [UI]
  │
  ├─ render(VisionSection)            [Section]
  │   └─ render(Benefits + ImagePH)   [UI]
  │
  ├─ render(StepsSection)             [Section]
  │   └─ render(Timeline)             [UI]
  │
  ├─ render(TestimonialsSection)      [Section]
  │   └─ render(Cards)                [UI]
  │
  ├─ render(FAQSection)               [Section + State]
  │   └─ render(FAQ Items)            [UI: Reveal]
  │
  ├─ render(CTASection)               [Section]
  │   └─ render(Button)               [UI]
  │
  ├─ render(Footer)                   [Layout]
  │   └─ render(Links)                [UI: WhatsAppIcon]
  │
  └─ render(FloatingWhatsApp)         [Layout]
```

## Fluxo de Interação do Usuário

```
1. Clique no Menu Mobile
   ├─ App.tsx: setIsMenuOpen(true)
   ├─ Navbar: recebe isMenuOpen=true
   ├─ MobileMenu: recebe isOpen=true, renderiza
   ├─ useLockBodyScroll: bloqueia scroll
   └─ CSS: anima entrada do menu

2. Clique em Link de Navegação
   ├─ MobileMenu: onClick → onNavClick
   ├─ App.tsx: handleNavClick(id)
   ├─ useSmoothScroll.scrollToElement(id)
   ├─ Browser: scroll suave até elemento
   ├─ App.tsx: setIsMenuOpen(false)
   └─ useLockBodyScroll: desbloqueia scroll

3. Clique em CTA ("Marque uma aula")
   ├─ HeroSection/CTASection: onClick → onCTAClick
   ├─ App.tsx: handleCTAClick()
   ├─ useSmoothScroll.scrollToElement('cta-section')
   └─ Browser: rola até seção de CTA

4. Clique em FAQ
   ├─ FAQSection: useState local
   ├─ onClick: toggleFaq(index)
   ├─ isOpen: true → renderiza resposta
   ├─ CSS Grid: altura anima
   └─ Ícone: gira 180°

5. Hovers e Transições
   ├─ CSS: transition: all duration-300
   ├─ Tailwind: hover: e group-hover:
   └─ Smooth: sem JavaScript, puro CSS
```

## Estado Global vs Local

```
GLOBAL STATE (App.tsx)
├─ isMenuOpen: boolean
│  └─ Usado por: Navbar, MobileMenu, useLockBodyScroll
│
└─ scrolled: boolean (do hook)
   └─ Usado por: Navbar (para mudar estilo)

LOCAL STATE (Components)
├─ FAQSection.tsx: openFaqIndex
│  └─ Gerenciado localmente apenas
│
└─ Nenhum outro componente tem estado local
```

## Reutilização de Componentes

```
Reveal
├─ Usado em: Todas as 9 sections
├─ Propósito: Wrapper para adicionar classe
└─ Linhas: 14

ImagePlaceholder
├─ Usado em: IdentificationSection, VisionSection, AboutSection
├─ Propósito: Placeholder para imagens com ícone
└─ Linhas: 25

WhatsAppIcon
├─ Usado em: Navbar, MobileMenu, Footer, FloatingWhatsApp
├─ Propósito: Ícone SVG do WhatsApp
└─ Linhas: 28

SectionTitle
├─ Usado em: IdentificationSection, AboutSection
├─ Propósito: Título padronizado com label e descrição
└─ Linhas: 24

ButtonPrimary
├─ Usado em: HeroSection, AboutSection
├─ Propósito: Botão com ícone de seta
└─ Linhas: 48
```

## Performance Considerations

```
Bundle Size
├─ Original App.tsx: 713 linhas em 1 arquivo
├─ Refactored: 30 arquivos com ~1500 linhas total
└─ Resultado: Melhor tree-shaking potencial

Code Splitting Oportunidades
├─ Cada section pode ser lazy-loaded se necessário
├─ React.lazy + Suspense ready
└─ Não implementado agora (não necessário)

Re-renders
├─ Cada section renderiza independentemente
├─ Props são estáveis (funções não recreadas)
├─ Sem useCallback/useMemo necessários (performance OK)
└─ Total re-renders: Minimal
```

---

**Esta arquitetura é escalável, testável e fácil de manter! 🚀**
