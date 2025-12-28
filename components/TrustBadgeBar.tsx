
import React from 'react';
import { Shield, Award, Clock, MapPin } from 'lucide-react';

const TrustBadgeBar: React.FC = () => {
  const badges = [
    { icon: Shield, text: 'Gentle Braiding Specialist' },
    { icon: Award, text: '5+ Years Experience' },
    { icon: Clock, text: 'No Rushing, Ever' },
    { icon: MapPin, text: 'Mobile Service in Henry County' },
  ];

  return (
    <section className="bg-brand-espresso py-6 border-y border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-brand-offwhite">
              <badge.icon className="text-brand-gold flex-shrink-0" size={24} />
              <span className="font-sans text-xs md:text-sm tracking-wider uppercase">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeBar;
