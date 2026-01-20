import React, { useEffect, useRef, useState } from 'react';

interface EnergyBeamProps {
    projectId?: string;
    className?: string;
}

declare global {
    interface Window {
        UnicornStudio?: {
          init: () => void;
        };
    }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    projectId = "hRFfUymDGOHwtFe7evR2",
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);
    const [isVisible, setIsVisible] = useState(true);

    // Otimização: Só renderizar/executar quando estiver visível na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { 
                threshold: 0,
                rootMargin: "100px" // Pré-carregar um pouco antes de aparecer
            }
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const loadScript = () => {
             // Check if script is already in document to avoid duplicates
            if (document.querySelector('script[src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js"]')) {
                scriptLoadedRef.current = true;
                // Initialization is handled by the visibility check or previous loads
                if (window.UnicornStudio) {
                     window.UnicornStudio.init();
                }
                return;
            }

            if (scriptLoadedRef.current) return;

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.async = true;

            script.onload = () => {
                scriptLoadedRef.current = true;
                if (window.UnicornStudio && containerRef.current) {
                    // Initialize the Unicorn Studio project
                    window.UnicornStudio.init();
                }
            };

            document.head.appendChild(script);
        };

        if (isVisible) {
            loadScript();
        }
    }, [projectId, isVisible]);

    return (
        <div 
             ref={wrapperRef}
             className={`relative w-full h-full overflow-hidden ${className}`}
             style={{ 
                 // Otimizações de GPU e Paint
                 contentVisibility: 'auto',
                 contain: 'paint layout',
                 willChange: 'transform',
                 // Pausar o paint visualmente se não estiver visível (economiza GPU)
                 visibility: isVisible ? 'visible' : 'hidden',
                 opacity: isVisible ? 1 : 0,
                 transition: 'opacity 0.5s ease-in-out' // Suaviza a entrada/saída
             }}
        >
            <div
                ref={containerRef}
                data-us-project={projectId}
                className="w-full h-full"
                style={{
                    // Força aceleração de hardware no elemento interno também
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            />
        </div>
    );
};

export default EnergyBeam;
