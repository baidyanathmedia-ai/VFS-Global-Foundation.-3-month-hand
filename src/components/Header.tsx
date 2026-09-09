import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { VfsLogo } from './VfsLogo';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  onOpenApply: (courseId?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApply, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let lastScrollY = Math.max(0, window.scrollY);
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      // Update background blur and shadow when scrolled past top threshold
      setIsScrolled(currentScrollY > 20);

      // Always show at the top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // If mobile dropdown menu is open, keep header visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // Ignore overscroll bounces at the bottom of the page
      if (currentScrollY >= maxScrollY - 10) {
        ticking = false;
        return;
      }

      const deltaY = currentScrollY - lastScrollY;

      // Minimum scroll delta threshold (6px) to avoid jitter on micro-movements
      if (Math.abs(deltaY) >= 6) {
        if (deltaY > 0 && currentScrollY > 80) {
          // Scrolling DOWN -> smoothly hide header upward (remains hidden when scrolling stops)
          setIsVisible(false);
        } else if (deltaY < 0) {
          // Scrolling UP -> smoothly reveal header (remains visible when scrolling stops)
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.navHome, href: '#home', id: 'home' },
    { name: t.navAbout, href: '#about', id: 'about' },
    { name: t.navCourses, href: '#courses', id: 'courses' },
    { name: t.navSchedule, href: '#schedule', id: 'schedule' },
    { name: t.navAdmission, href: '#admission', id: 'admission' },
    { name: t.navGallery, href: '#gallery', id: 'gallery' },
    { name: t.navLeadership, href: '#leadership', id: 'leadership' },
    { name: t.navNotices, href: '#notices', id: 'notices' },
    { name: t.navContact, href: '#contact', id: 'contact' },
  ];

  const whatsappLink = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE_PREFILL)}`;
  const phoneCallLink = `tel:${CONTACT_CONFIG.PHONE_NUMBER.replace(/\s+/g, '')}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out will-change-transform ${
      isVisible ? 'translate-y-0 pointer-events-auto' : '-translate-y-full shadow-none pointer-events-none'
    }`}>
      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 dark:border-slate-800' 
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm py-3.5 border-b border-slate-100 dark:border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo & Academy Branding */}
            <a href="#home" className="flex items-center group">
              <VfsLogo variant="auto" size="md" showSubtitle={true} />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-2.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Quick Actions, Theme Toggle & CTA Button */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
              {/* Language Switcher */}
              <LanguageSwitcher variant="header" />

              {/* Dark Mode Toggle Button */}
              <ThemeToggle />

              {/* Direct Phone Call Button */}
              <a
                href={phoneCallLink}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
                title="Call Admission Desk"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>+91 94311 76637</span>
              </a>

              {/* Direct WhatsApp Pill */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 rounded-lg transition-colors"
                title="WhatsApp Inquiry"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                id="header-apply-btn"
                onClick={() => onOpenApply()}
                className="relative inline-flex items-center justify-center px-4 py-2 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-emerald-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t.applyNowBtn}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Mobile Actions: Theme Toggle, Direct Call & Menu Toggle */}
            <div className="flex items-center gap-1.5 sm:hidden">
              <ThemeToggle />
              <a
                href={phoneCallLink}
                className="p-2 rounded-lg text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700"
                title="Call Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-2 pb-6 space-y-3 mt-2 animate-fadeIn">
            {/* Direct Quick Contact Buttons on Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={phoneCallLink}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-slate-700 rounded-xl text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 94311 76637</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Theme & Language Toggles */}
            <div className="space-y-2 pt-1">
              <LanguageSwitcher variant="mobile" />
              <ThemeToggle variant="mobile" />
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                id="mobile-nav-apply-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.applyNowBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1">
                STPI Deoghar Centre Desk: +91 94311 76637 (10:00 AM – 01:00 PM)
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


