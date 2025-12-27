
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Professional Services" 
          subtitle="Premium treatments designed with care and precision for children and adults alike."
        />

        <div className="space-y-24 mt-20">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-brand-gold/20" />
                  <img src={service.image} alt={service.title} className="relative z-10 w-full aspect-[4/5] object-cover shadow-xl" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <div className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase mb-4">{service.price}</div>
                  <h3 className="font-serif text-4xl md:text-5xl text-brand-espresso">{service.title}</h3>
                </div>
                <p className="font-sans text-brand-charcoal/70 leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-brand-cream border border-brand-gold/10">
                      <div className="w-2 h-2 bg-brand-gold rounded-full" />
                      <span className="font-sans text-xs tracking-widest uppercase text-brand-espresso">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-brand-espresso text-brand-offwhite px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors"
                  >
                    SELECT THIS SERVICE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about Hair Care */}
        <div className="mt-32 p-12 bg-brand-cream border border-brand-gold/20 text-center max-w-4xl mx-auto">
          <h4 className="font-serif text-2xl text-brand-espresso mb-4">A Note on Hair Health</h4>
          <p className="font-sans text-brand-charcoal/70 leading-relaxed italic">
            "We only use the finest pre-stretched, anti-bacterial hair for all kids' braiding services. 
            Health and safety are our top priorities—ensuring your child's natural hair remains strong and protected."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
