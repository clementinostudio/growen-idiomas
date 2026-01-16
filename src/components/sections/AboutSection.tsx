import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
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
    aspect: 'aspect-[16/10]',
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
  onOpen: (item: GalleryItem) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, delay, onOpen }) => {
  return (
    <Reveal delay={delay}>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Abrir imagem: ${item.label}`}
        onClick={() => onOpen(item)}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
        className={`relative group rounded-3xl overflow-hidden shadow-sm cursor-pointer transition-transform duration-500 hover:scale-[1.01] hover:shadow-lg ${item.aspect}`}
      >
        {/* Image */}
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Hint */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-black opacity-100 group-hover:opacity-0 transition">
          <span className="hidden sm:inline">Clique para ampliar</span>
          <span className="sm:hidden">Toque para ampliar</span>
        </div>

        {/* Expand icon */}
        <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Label */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">
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

const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-10 sm:px-12 md:px-12 lg:px-16"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          aria-label="Fechar imagem"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Wrapper */}
        <div className="mx-auto bg-black rounded-2xl overflow-hidden max-h-[80vh] max-w-full flex items-center justify-center">
          <img
            src={item.src}
            alt={item.label}
            className="w-auto h-auto max-h-[80vh] max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-white text-xs uppercase tracking-widest">
          {item.label}
        </p>
      </div>
    </div>
  );
};

/* =====================
   About Section
===================== */
export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const openImage = useCallback((item: GalleryItem) => {
    setActiveImage(item);
  }, []);

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
              <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-4 block">
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#22c55e] hover:underline"
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
                src="/arquivos/MelvinMesa.svg"
                alt="Mascote Growen"
                onClick={onExploreClick}
                className="w-full max-h-[420px] object-contain cursor-pointer hover:scale-[1.02] transition-transform"
              />
            </Reveal>

            <Reveal delay={450}>
              <button
                onClick={onExploreClick}
                className="group flex items-center justify-between border-b border-gray-200 pb-4 text-lg font-bold hover:text-[#22c55e] hover:border-[#22c55e] transition"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <GalleryCard item={GALLERY[0]} delay={200} onOpen={openImage} />
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <GalleryCard item={GALLERY[1]} delay={300} onOpen={openImage} />
            <GalleryCard item={GALLERY[2]} delay={400} onOpen={openImage} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeImage && (
        <ImageModal item={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </section>
  );
};
