# Guia de Desenvolvimento - Growen Idiomas

## Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx                # Composição principal da página
│   └── index.ts               # Reexporta o App
├── features/
│   └── landing/
│       ├── layout/            # Navbar, footer, whatsapp flutuante
│       ├── sections/          # Seções da landing page
│       └── ui/                # Componentes reutilizáveis compartilhados
├── hooks/                     # Hooks customizados
├── constants/                 # Dados e constantes
└── types/                     # Tipos TypeScript
```

## Como Adicionar uma Nova Seção

### 1. Criar o componente
Crie um arquivo em `src/features/landing/sections/NovaSection.tsx`:

```tsx
import React from 'react';
import { Reveal } from '../ui';

interface NovaSectionProps {
  onAction?: () => void;
}

export const NovaSection: React.FC<NovaSectionProps> = ({ onAction }) => {
  return (
    <section id="nova-secao" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-gray-900 font-satoshi">
            Minha Nova Seção
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-gray-600 mt-6">Conteúdo aqui...</p>
        </Reveal>
      </div>
    </section>
  );
};
```

### 2. Exportar no índice
Adicione em `src/features/landing/sections/index.ts`:

```ts
export { NovaSection } from './NovaSection';
```

### 3. Importar e usar em App.tsx
```tsx
import { NovaSection } from '../features/landing/sections';

const App: React.FC = () => {
  return (
    <>
      {/* outras seções */}
      <NovaSection onAction={handleCTAClick} />
      {/* ... */}
    </>
  );
};
```

## Como Criar um Novo Hook

### Exemplo: Hook para estado de um modal

Crie `src/hooks/useModal.ts`:

```ts
import { useState } from 'react';

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};
```

Exporte em `src/hooks/index.ts`:

```ts
export { useModal } from './useModal';
```

Use em um componente:

```tsx
import { useModal } from '@/hooks';

export const MeuComponente: React.FC = () => {
  const modal = useModal();

  return (
    <>
      <button onClick={modal.open}>Abrir Modal</button>
      {modal.isOpen && <Modal onClose={modal.close} />}
    </>
  );
};
```

## Como Criar um Novo Componente UI

Componentes UI são reutilizáveis e não devem conter lógica complexa.

Crie em `src/features/landing/ui/MeuBotao.tsx`:

```tsx
import React from 'react';

interface MeuBotaoProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const MeuBotao: React.FC<MeuBotaoProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  const baseClass = 'px-6 py-2 rounded-full font-bold transition-colors';
  const variantClass = variant === 'primary'
    ? 'bg-[#22c55e] text-white hover:bg-[#1eb053]'
    : 'bg-gray-200 text-gray-900 hover:bg-gray-300';

  return (
    <button
      className={`${baseClass} ${variantClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
```

Exporte em `src/features/landing/ui/index.ts` e use:

```tsx
import { MeuBotao } from '@/components/ui';

<MeuBotao label="Clique aqui" onClick={() => console.log('Clicado!')} />
```

## Padrões de Código

### Naming Conventions

- **Componentes**: `PascalCase` (Ex: `HeroSection`)
- **Funções/Hooks**: `camelCase` (Ex: `useSmoothScroll`)
- **Arquivos**: Match com o componente/função (Ex: `HeroSection.tsx`)
- **IDs de elementos**: `kebab-case` (Ex: `id="cta-section"`)

### Props Patterns

Sempre tipo as props explicitamente:

```tsx
interface ComponentProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Componente: React.FC<ComponentProps> = ({
  title,
  onClick,
  children,
}) => {
  // ...
};
```

### Tailwind Classes

- Use o modelo dark/light já estabelecido
- Reutilize as cores do design (verde `#22c55e`, cinza, etc)
- Responda mobile-first com breakpoints

Exemplo:
```tsx
className="text-sm md:text-base lg:text-lg"
className="px-4 sm:px-6 lg:px-8"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Dados e Constantes

Dados estão em `src/constants/index.ts`. Para adicionar novos dados:

```ts
export const NOVO_DADO = [
  {
    id: 1,
    title: "Item 1",
    description: "Descrição",
  },
  // ...
];
```

## Tipagem

Tipos estão em `src/types/index.ts`. Sempre defina interfaces para seus dados:

```ts
export interface MeuTipo {
  id: number;
  title: string;
  description: string;
}
```

Use em componentes:

```tsx
import { MeuTipo } from '@/types';

interface MeuComponenteProps {
  itens: MeuTipo[];
}

export const MeuComponente: React.FC<MeuComponenteProps> = ({ itens }) => {
  // ...
};
```

## Testing Checklist

Antes de fazer push:

- [ ] Rodou `npm run build` sem erros
- [ ] Sem warnings de TypeScript
- [ ] Componentes responsivos (testar em mobile)
- [ ] Links de navegação funcionando
- [ ] Menu mobile fechando ao clicar
- [ ] FAQ expandindo/contraindo
- [ ] Scroll suave em âncoras
- [ ] Sem console errors

## Deployment

O projeto usa Vite. Para build:

```bash
npm run build
```

Arquivos prontos em `/dist`. Copie para seu servidor.

## Performance Tips

- Componentes UI devem ser puros (sem lógica complexa)
- Usar `React.memo` se tiver muitos re-renders desnecessários
- Lazy load seções com `React.lazy` se necessário
- Otimizar imagens (usar webp ou comprimir)
- Verificar tamanho do bundle com `npm run build`

## Troubleshooting

### Erro: "Cannot find module"
- Verifique o import path
- Verifique se exportou em `index.ts`
- Reinicie o servidor de dev

### TypeScript errors
- Rode `npx tsc --noEmit` para ver todos os erros
- Verifique se tipou corretamente as props
- Importe tipos do `@/types`

### Build lento
- Verifique se tem imports desnecessários
- Use dynamic imports com `React.lazy` para seções pesadas

## Recursos Úteis

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

---

**Bom desenvolvimento! 🚀**
