
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Star } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-espresso text-brand-offwhite pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="w-12 h-12 border border-brand-gold flex items-center justify-center font-serif text-3xl text-brand-gold mb-6">A</div>
          <h3 className="font-serif text-2xl tracking-widest mb-4">AMARIEL BOUTIQUE</h3>
          <p className="font-sans text-brand-cream/70 text-sm leading-relaxed mb-6">
            Patient hands for precious heads. McDonough's trusted specialist for kids' braiding, lashes, and makeup. Serving Henry County, Stockbridge, Hampton & Eagles Landing.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-gold transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-gold transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] mb-8 font-semibold text-brand-gold">EXPLORE</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="font-sans text-sm text-brand-cream/70 hover:text-brand-offwhite transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] mb-8 font-semibold text-brand-gold">SERVICES</h4>
          <ul className="space-y-4">
            <li className="font-sans text-sm text-brand-cream/70">Kids' Braiding</li>
            <li className="font-sans text-sm text-brand-cream/70">Lash Extensions</li>
            <li className="font-sans text-sm text-brand-cream/70">Makeup Artistry</li>
            <li className="font-sans text-sm text-brand-cream/70">Hair Care Consulting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] mb-8 font-semibold text-brand-gold">GET IN TOUCH</h4>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3 text-sm text-brand-cream/70">
              <Phone className="w-4 h-4 text-brand-gold" />
              <a href="tel:+14704531126" className="hover:text-brand-gold transition-colors">Call or Text: (470) 453-1126</a>
            </li>
            <li className="flex items-center space-x-3 text-sm text-brand-cream/70">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>hello@amarielboutique.com</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-brand-cream/70">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>McDonough, GA (Mobile Service Available)</span>
            </li>
            <li className="pt-4">
              <a
                href="https://share.google/V0ivuKUGLLTrhFFQg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold px-4 py-2 rounded-sm transition-colors text-sm"
              >
                <Star className="w-4 h-4" fill="currentColor" />
                Leave Us a Review
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-cream/10 text-center">
        <p className="font-sans text-[10px] tracking-[0.2em] text-brand-cream/40 uppercase">
          &copy; 2025 Amariel Boutique. All rights reserved. | Patient Hands for Precious Heads.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
