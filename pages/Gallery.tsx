
import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Kids Braids Portfolio" subtitle="Beautiful braiding styles for your little ones." />

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden shadow-sm">
              <img
                src={`https://picsum.photos/seed/kidsbraids${i}/800/${600 + (i % 3) * 200}`}
                alt={`Kids braids style ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 border border-brand-offwhite flex items-center justify-center font-serif text-brand-offwhite text-xl">A</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-sans text-brand-charcoal/50 text-sm italic mb-8">Follow us on Instagram for daily updates of our latest work</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-offwhite px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[#A37D52] transition-colors"
          >
            @AMARIELBOUTIQUE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
