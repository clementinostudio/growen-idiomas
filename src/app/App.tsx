import React, { Suspense, lazy, useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLockBodyScroll, useScrollPosition, useSmoothScroll, useScrollDirection } from '../hooks';
import {
  Navbar,
  MobileMenu,
  Footer,
  FloatingWhatsApp,
  BackToTop,
} from '../features/landing/layout';
import { SectionDivider } from '../features/landing/ui';
import { HeroSection } from '../features/landing/sections/HeroSection';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Group related sections to reduce dependency chains
// Above-the-fold critical section - loaded immediately with Hero
const IdentificationSection = lazy(() =>
  import('../features/landing/sections/IdentificationSection').then((module) => ({
    default: module.IdentificationSection,
  }))
);

// Second tier - load together to reduce round-trips
const MethodologySection = lazy(() =>
  import('../features/landing/sections/MethodologySection').then((module) => ({
    default: module.MethodologySection,
  }))
);

const AboutSection = lazy(() =>
  import('../features/landing/sections/AboutSection').then((module) => ({
    default: module.AboutSection,
  }))
);

// Third tier - below fold, can load later
const VisionSection = lazy(() =>
  import('../features/landing/sections/VisionSection').then((module) => ({
    default: module.VisionSection,
  }))
);

const StepsSection = lazy(() =>
  import('../features/landing/sections/StepsSection').then((module) => ({
    default: module.StepsSection,
  }))
);

// Fourth tier - heaviest components, load last
const TestimonialsSection = lazy(() =>
  import('../features/landing/sections/TestimonialsSection').then((module) => ({
    default: module.TestimonialsSection,
  }))
);

const FAQSection = lazy(() =>
  import('../features/landing/sections/FAQSection').then((module) => ({
    default: module.FAQSection,
  }))
);

const CTASection = lazy(() =>
  import('../features/landing/sections/CTASection').then((module) => ({
    default: module.CTASection,
  }))
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const scrollDirection = useScrollDirection();
  const { scrollToElement, scrollToTop } = useSmoothScroll();

  useLockBodyScroll(isMenuOpen);

  // Staggered prefetch: Load sections in priority order to flatten dependency chain
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Tier 1: Critical path - load immediately after hydration
    const tier1Timeout = window.setTimeout(() => {
      void import('../features/landing/sections/IdentificationSection');
    }, 100);

    // Tier 2: Second screen content
    const tier2Timeout = window.setTimeout(() => {
      void Promise.all([
        import('../features/landing/sections/MethodologySection'),
        import('../features/landing/sections/AboutSection'),
      ]);
    }, 300);

    // Tier 3: Below fold content
    const tier3Timeout = window.setTimeout(() => {
      void Promise.all([
        import('../features/landing/sections/VisionSection'),
        import('../features/landing/sections/StepsSection'),
      ]);
    }, 600);

    // Tier 4: Heavy components - load after interaction or scroll
    const tier4Timeout = window.setTimeout(() => {
      void Promise.all([
        import('../features/landing/sections/TestimonialsSection'),
        import('../features/landing/sections/FAQSection'),
        import('../features/landing/sections/CTASection'),
      ]);
    }, 1000);

    return () => {
      window.clearTimeout(tier1Timeout);
      window.clearTimeout(tier2Timeout);
      window.clearTimeout(tier3Timeout);
      window.clearTimeout(tier4Timeout);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (document.getElementById('gtm-loader')) {
        return;
      }

      window.dataLayer = window.dataLayer || [];

      const script = document.createElement('script');
      script.id = 'gtm-loader';
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-77ELXGYCSY';

      script.addEventListener('load', () => {
        const gtag = (...args: unknown[]) => {
          window.dataLayer!.push(args);
        };

        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-77ELXGYCSY', { anonymize_ip: true });
      });

      document.head.appendChild(script);
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  const handleCTAClick = () => {
    scrollToElement('cta-section');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-green-700 selection:text-white overflow-x-hidden font-questrial">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        scrollDirection={scrollDirection}
        onNavClick={handleNavClick}
        onLogoClick={handleLogoClick}
      />

      <MobileMenu isOpen={isMenuOpen} onNavClick={handleNavClick} />

      <HeroSection onCTAClick={handleCTAClick} />

      <Suspense fallback={null}>
        <IdentificationSection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <MethodologySection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <AboutSection onExploreClick={handleCTAClick} />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <VisionSection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <StepsSection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>

      <SectionDivider />

      <Suspense fallback={null}>
        <CTASection onCTAClick={handleCTAClick} />
      </Suspense>

      <Footer />

      <BackToTop />

      <FloatingWhatsApp />
      <SpeedInsights />
    </div>
  );
};

export default App;
