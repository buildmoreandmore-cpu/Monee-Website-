
import React from 'react';
import { Gift, Users } from 'lucide-react';

const ReferralBanner: React.FC = () => {
  return (
    <section className="py-16 bg-brand-espresso">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Gift className="text-brand-gold" size={28} />
          <Users className="text-brand-gold" size={28} />
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-brand-offwhite mb-4">
          Refer a Friend, You Both Save
        </h3>
        <p className="font-sans text-brand-cream/80 mb-8 max-w-xl mx-auto">
          Know another mom who needs a gentle, patient braider? Share the love!
          When your referral books, <span className="text-brand-gold font-semibold">you BOTH get $15 off</span> your next appointment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="sms:?body=I%20found%20the%20best%20kids%20braider%20in%20McDonough!%20She%27s%20so%20gentle%20and%20patient.%20Check%20her%20out%3A%20https%3A%2F%2Famariel-boutique.vercel.app"
            className="bg-brand-gold text-brand-offwhite px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[#A37D52] transition-colors"
          >
            Text a Friend Now
          </a>
          <span className="text-brand-cream/40 text-sm">or share on social</span>
        </div>
        <p className="mt-8 text-brand-cream/50 text-xs font-sans">
          Just mention your friend's name when booking to claim your discount!
        </p>
      </div>
    </section>
  );
};

export default ReferralBanner;
