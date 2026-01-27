import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, X } from 'lucide-react';
import { Reveal } from '../ui';

/* =====================
   Types
===================== */
interface AboutSectionProps {
  onExploreClick: () => void;
}

interface GalleryItem {
  src: string;
  label: string;
  aspect: string;
}

/* =====================
   Gallery Config
===================== */
const GALLERY: GalleryItem[] = [
  {
    src: '/arquivos/sala.webp',
    label: 'Sala de Aula',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/arquivos/recep.webp',
    label: 'Recepção',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/arquivos/exter.webp',
    label: 'Growen Exterior',
    aspect: 'aspect-[4/3]',
  },
];

/* =====================
   Gallery Card
===================== */
interface GalleryCardProps {
  item: GalleryItem;
  delay: number;
  onOpen: (index: number) => void;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, delay, onOpen, index }) => {
  return (
    <Reveal delay={delay}>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Abrir imagem: ${item.label}`}
        onClick={() => onOpen(index)}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(index)}
        className={`relative group rounded-3xl overflow-hidden shadow-sm cursor-pointer ${item.aspect} focus:outline-none focus:ring-4 focus:ring-[#15803d]/20 transform-gpu transition-transform duration-500 will-change-transform hover:scale-[1.015] hover:-translate-y-1 hover:shadow-lg focus:scale-[1.015] bg-white ring-1 ring-black/5`}
      >
        {/* Image */}
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform-gpu group-hover:scale-110"
        />

        {/* Gradient overlay (animated) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Hint */}
        {/* Expand icon */}
        <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-300 transform-gpu group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Label */}
        <div className="absolute bottom-6 left-6 opacity-100 transition-all duration-500 translate-y-0">
          <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black shadow-sm">
            {item.label}
          </span>
        </div>
      </div>
    </Reveal>
  );
};

/* =====================
   Image Modal
===================== */
interface ImageModalProps {
  item: GalleryItem;
  onClose: () => void;
}

interface ModalProps {
  index: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ index, items, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext]);

  // Preload neighbors for smooth navigation
  useEffect(() => {
    const next = (index + 1) % items.length;
    const prev = (index - 1 + items.length) % items.length;
    const i1 = new Image();
    const i2 = new Image();
    i1.src = items[next].src;
    i2.src = items[prev].src;
  }, [index, items]);

  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6 sm:px-12 lg:px-16"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Fechar imagem" onClick={onClose} className="absolute top-4 right-4 z-20 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition">
          <X className="w-5 h-5" />
        </button>

        <button aria-label="Imagem anterior" onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition">
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button aria-label="Próxima imagem" onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition">
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="mx-auto bg-black rounded-2xl overflow-hidden max-h-[80vh] max-w-full flex items-center justify-center">
          <img src={item.src} alt={item.label} className="w-auto h-auto max-h-[80vh] max-w-full object-contain transition-transform duration-300" />
        </div>

        <p className="mt-4 text-center text-white text-xs uppercase tracking-widest">{item.label}</p>

        {/* Thumbnails */}
        <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto py-2">
          {items.map((it, i) => (
            <button
              key={it.src}
              onClick={(e) => { e.stopPropagation(); /* focus this image */ }}
              aria-label={`Ver ${it.label}`}
              className={`rounded-lg overflow-hidden border-2 ${i === index ? 'border-[#15803d]' : 'border-transparent'} shrink-0 w-20 h-12`}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <img src={it.src} alt={it.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =====================
   About Section
===================== */
export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openImage = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeModal = () => setActiveIndex(null);

  const goPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const goNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));

  return (
    <section
      id="quem-somos"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Container com mesmo espaçamento lateral do Methodology e Identification */}
      <div className="max-w-7xl mx-auto px-10 sm:px-12 md:px-12 lg:px-16 relative z-10">
        {/* =====================
            Top Content
        ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-[#15803d] font-bold tracking-widest uppercase text-xs mb-4 block">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Uma nova forma de aprender idiomas
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-900">
                    Falar com confiança muda tudo.
                  </strong>{' '}
                  Na Growen, você aprende com um método pensado para o seu ritmo,
                  seus objetivos e sua realidade.
                </p>

                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#15803d] hover:underline"
                >
                  Veja como funcionam nossas aulas
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Mascot + CTA */}
          <div className="flex flex-col gap-8">
            <Reveal delay={300}>
              <img
                src="/arquivos/Zara.svg"
                alt="Mascote Growen"
                onClick={onExploreClick}
                className="w-full max-h-105 object-contain cursor-pointer hover:scale-[1.02] transition-transform"
                width="600"
                height="420"
                loading="lazy"
              />
            </Reveal>

            <Reveal delay={450}>
              <button
                onClick={onExploreClick}
                className="group flex items-center justify-between border-b border-gray-200 pb-4 text-lg font-bold hover:text-[#15803d] hover:border-[#15803d] transition"
              >
                <span>Conheça nossa estrutura</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </Reveal>
          </div>
        </div>

        {/* =====================
            Bento Gallery
        ===================== */}
        <div className="rounded-3xl bg-gray-50 border border-gray-100 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 lg:col-span-8">
              <GalleryCard item={GALLERY[0]} delay={200} onOpen={openImage} index={0} />
            </div>

            <div className="md:col-span-5 lg:col-span-4 grid grid-rows-2 gap-6">
              <GalleryCard item={GALLERY[1]} delay={300} onOpen={openImage} index={1} />
              <GalleryCard item={GALLERY[2]} delay={400} onOpen={openImage} index={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal navegável */}
      {activeIndex !== null && (
        <ImageModal index={activeIndex} items={GALLERY} onClose={closeModal} onPrev={goPrev} onNext={goNext} />
      )}
    </section>
  );
};
