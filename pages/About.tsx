
import React from 'react';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-offwhite">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="The Heart Behind Amariel" />
        
        <div className="space-y-16">
          <div className="relative">
            <img src="/gallery/braids-3.png" alt="Amariel Boutique Work" className="w-full h-[500px] object-cover rounded-sm shadow-xl" />
            <div className="absolute -bottom-10 right-10 bg-brand-cream border border-brand-gold/30 p-10 max-w-md hidden md:block">
              <h4 className="font-serif text-2xl text-brand-espresso mb-4">Our Mission</h4>
              <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed italic">
                "To provide premium beauty services in a gentle, patient environment where every client feels seen, valued, and beautiful."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
            <div className="space-y-6 font-sans text-brand-charcoal/70 leading-relaxed">
              <h3 className="font-serif text-3xl text-brand-espresso">The Journey</h3>
              <p>
                My passion for braiding started at a young age, but my specialized focus on children was born from necessity. I watched my nieces and friends' daughters struggle through painful, hurried appointments with stylists who lacked the empathy required for young hair.
              </p>
              <p>
                I knew there was a better way. I spent years perfecting techniques that minimize tension while maximizing longevity. But more importantly, I learned how to create an emotional space that feels safe for a child.
              </p>
            </div>
            <div className="space-y-6 font-sans text-brand-charcoal/70 leading-relaxed">
              <h3 className="font-serif text-3xl text-brand-espresso">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full flex-shrink-0 text-[10px] font-bold">01</div>
                  <div>
                    <h4 className="text-brand-espresso font-bold text-sm tracking-widest uppercase mb-1">Patience Above All</h4>
                    <p className="text-sm">We operate on "kid time." If we need to pause, we pause.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full flex-shrink-0 text-[10px] font-bold">02</div>
                  <div>
                    <h4 className="text-brand-espresso font-bold text-sm tracking-widest uppercase mb-1">Integrity of Hair</h4>
                    <p className="text-sm">We will never compromise the health of natural hair for a trend.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full flex-shrink-0 text-[10px] font-bold">03</div>
                  <div>
                    <h4 className="text-brand-espresso font-bold text-sm tracking-widest uppercase mb-1">Elevation</h4>
                    <p className="text-sm">Beauty services should feel like a luxurious escape, no matter your age.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-16 border-y border-brand-gold/10 text-center">
            <h3 className="font-serif text-3xl text-brand-espresso mb-8">Professional Credentials</h3>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="text-brand-gold font-serif text-4xl mb-2">12+</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-brand-gold font-serif text-4xl mb-2">500+</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60">Happy Little Clients</div>
              </div>
              <div className="text-center">
                <div className="text-brand-gold font-serif text-4xl mb-2">Licensed</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60">Master Cosmetologist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
