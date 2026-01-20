import React, { useState } from 'react';
import { useLockBodyScroll, useScrollPosition, useSmoothScroll } from '../hooks';
import {
  Navbar,
  MobileMenu,
  Footer,
  FloatingWhatsApp,
  BackToTop,
} from '../features/landing/layout';
import {
  HeroSection,
  IdentificationSection,
  MethodologySection,
  AboutSection,
  VisionSection,
  StepsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '../features/landing/sections';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const { scrollToElement, scrollToTop } = useSmoothScroll();

  useLockBodyScroll(isMenuOpen);

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
        onNavClick={handleNavClick}
        onLogoClick={handleLogoClick}
      />

      <MobileMenu isOpen={isMenuOpen} onNavClick={handleNavClick} />

      <HeroSection onCTAClick={handleCTAClick} />

      <IdentificationSection />

      <MethodologySection />

      <AboutSection onExploreClick={handleCTAClick} />

      <VisionSection />

      <StepsSection />

      <TestimonialsSection />

      <FAQSection />

      <CTASection onCTAClick={handleCTAClick} />

      <Footer />

      <BackToTop />

      <FloatingWhatsApp />
    </div>
  );
};

export default App;
