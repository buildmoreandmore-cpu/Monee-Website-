
import React from 'react';
import { MapPin, Car, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAreaSection: React.FC = () => {
  const areas = [
    'McDonough',
    'Stockbridge',
    'Hampton',
    'Locust Grove',
    'Eagles Landing',
    'Jonesboro',
    'Fayetteville',
    'Riverdale',
  ];

  return (
    <section className="py-20 bg-brand-cream px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="text-brand-gold" size={28} />
            <Home className="text-brand-gold" size={28} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso mb-4">
            We Come to You
          </h2>
          <p className="font-sans text-brand-charcoal/70 max-w-xl mx-auto">
            No need to travel with fussy kids. We bring our gentle braiding service directly to your home throughout Henry County and South Metro Atlanta.
          </p>
        </div>

        <div className="bg-brand-offwhite p-8 rounded-sm shadow-sm border border-brand-gold/10">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <MapPin className="text-brand-gold" size={20} />
            <span className="font-sans text-sm tracking-widest uppercase text-brand-espresso font-semibold">Service Areas</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="text-center py-3 px-4 bg-brand-cream/50 rounded-sm border border-brand-gold/10"
              >
                <span className="font-sans text-sm text-brand-espresso">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-brand-gold/10">
            <p className="text-sm text-brand-charcoal/60 mb-4">
              Don't see your city? We may still serve your area!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand-espresso text-brand-offwhite px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
