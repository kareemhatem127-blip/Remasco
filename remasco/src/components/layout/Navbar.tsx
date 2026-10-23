import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import logo from '../../Assets/logo.jpg'

export const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const topLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
  ];

  const dropdownLinks = [
    { id: 'projects', label: t.nav.projects },
    { id: 'catalogs', label: t.nav.catalogs },
    { id: 'partners', label: t.nav.partners },
  ];

  const handleScrollTo = (id: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark py-3 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => isHome && window.scrollTo({ top: 0, behavior: 'smooth' })}
          id="navbar-logo"
        >
    <img 
  src={logo}
  alt="Remasko Logo"
  className="h-13 w-13 rounded-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 border border-white/20"
/>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none group-hover:text-secondary transition-colors uppercase">
              {lang === 'ar' ? 'ريماسكو' : 'REMASKO'}
            </span>
            <span className="text-[9px] text-secondary font-black tracking-[0.3em] uppercase leading-none mt-1">
              {lang === 'ar' ? 'للمقاولات' : 'CONSTRUCTION'}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {topLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-sm font-medium transition-colors hover:text-secondary text-gray-300"
            >
              {link.label}
            </button>
          ))}

          {/* Portfolio Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary text-gray-300"
            >
              {t.nav.portfolio}
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-white shadow-2xl rounded-sm py-4 min-w-[200px] border border-gray-100"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {dropdownLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className="w-full text-left rtl:text-right px-6 py-3 text-sm text-primary hover:bg-gray-50 hover:text-secondary transition-all font-semibold"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleScrollTo('contact')}
            className="text-sm font-medium transition-colors hover:text-secondary text-gray-300"
          >
            {t.nav.contact}
          </button>

          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 border rounded-full transition-all text-white border-white/20 hover:bg-white/10"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary text-white p-6 lg:hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-6">
              {topLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-lg font-medium text-left px-2"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-lg font-medium text-left px-2 flex justify-between items-center"
                >
                  {t.nav.portfolio}
                  <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 bg-white/5 p-4 rounded-lg"
                    >
                      {dropdownLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => handleScrollTo(link.id)}
                          className="text-sm font-medium text-left text-white/70"
                        >
                          {link.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleScrollTo('contact')}
                className="text-lg font-medium text-left px-2"
              >
                {t.nav.contact}
              </button>

              <hr className="opacity-10" />
              <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'ar' : 'en');
                  setIsOpen(false);
                }}
                className="flex items-center justify-between gap-2 p-2 bg-white/5 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  <span>{lang === 'en' ? 'Change to Arabic' : 'التغيير إلى الإنجليزية'}</span>
                </div>
                <span className="font-bold text-secondary">{lang === 'en' ? 'AR' : 'EN'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
