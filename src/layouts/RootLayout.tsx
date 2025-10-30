import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImage from '../assets/images/logo.png';
import Footer from '../components/Footer';
import './root.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  xOffset: number;
  yOffset: number;
}

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHome]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Global click sparkle effect - EXACT WordPress code
  const handleClick = (e: React.MouseEvent) => {
    const sparkleCount = 10;
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < sparkleCount; i++) {
      // Random direction
      const angle = Math.random() * 2 * Math.PI;
      const distance = 40 + Math.random() * 40; // pixels

      const xOffset = Math.cos(angle) * distance;
      const yOffset = Math.sin(angle) * distance;

      newSparkles.push({
        id: Date.now() + i,
        x: e.pageX,
        y: e.pageY,
        xOffset,
        yOffset,
      });
    }

    setSparkles((prev) => [...prev, ...newSparkles]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.find(ns => ns.id === s.id)));
    }, 800);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="root-layout" onClick={handleClick}>
      {/* Sparkle effects - GLOBAL (all pages) */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="magic-sparkle"
          initial={{ 
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1
          }}
          animate={{ 
            x: sparkle.xOffset,
            y: sparkle.yOffset,
            scale: 0.5,
            opacity: 0
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] // ease-out
          }}
          style={{ 
            left: sparkle.x,
            top: sparkle.y
          }}
        />
      ))}

      {/* Mouse Light Effect - Only on homepage */}
      {isHome && (
        <div
          className="mouse-light"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="main-header-bar">
          <div className="header-container">
            {/* Logo */}
            <div className="site-branding">
              <NavLink to="/" className="site-logo-link">
                <img src={logoImage} alt="Geekytaurus" className="custom-logo" />
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`menu-toggle ${mobileMenuOpen ? 'toggled' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
              aria-label="Menu Toggle"
            >
              <span className="menu-toggle-icon">
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </span>
            </button>

            {/* Navigation - Desktop & Mobile */}
            <AnimatePresence>
              {(mobileMenuOpen || window.innerWidth > 921) && (
                <motion.nav 
                  className={`nav ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink to="/journey" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    My Journey
                  </NavLink>
                  <NavLink to="/technologies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Technologies
                  </NavLink>
                  <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                  </NavLink>
                  <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Services
                  </NavLink>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-button active' : 'nav-link-button'}>
                    Get in Touch
                  </NavLink>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <main className="site-main">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="page-shell"
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
