
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-offwhite shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 border border-brand-gold flex items-center justify-center font-serif text-2xl text-brand-gold">A</div>
          <span className={`font-serif text-2xl tracking-widest hidden sm:block ${scrolled ? 'text-brand-espresso' : 'text-brand-espresso'}`}>AMARIEL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-sans tracking-[0.2em] transition-colors hover:text-brand-gold ${location.pathname === item.path ? 'text-brand-gold font-medium' : 'text-brand-espresso'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-rose px-6 py-2 text-brand-offwhite text-xs font-sans tracking-widest hover:bg-[#C28E8E] transition-all rounded-sm shadow-sm"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-espresso" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-cream z-40 md:hidden transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <div className="w-16 h-16 border border-brand-gold flex items-center justify-center font-serif text-4xl text-brand-gold mb-4">A</div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-lg font-serif tracking-widest text-brand-espresso"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-rose px-10 py-4 text-brand-offwhite text-sm font-sans tracking-widest rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
