
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Common Questions" subtitle="Everything you need to know about braid day and our salon experience." />

        <div className="space-y-4 mt-12">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-brand-cream border border-brand-gold/10 overflow-hidden rounded-sm transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-offwhite transition-colors"
              >
                <span className="font-serif text-lg text-brand-espresso">{faq.question}</span>
                {openIndex === idx ? <ChevronUp size={20} className="text-brand-gold" /> : <ChevronDown size={20} className="text-brand-gold" />}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-sans text-brand-charcoal/70 leading-relaxed border-t border-brand-gold/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-10 bg-brand-rose/10 border border-brand-rose/20">
          <h4 className="font-serif text-2xl text-brand-espresso mb-4">Still have questions?</h4>
          <p className="font-sans text-brand-charcoal/70 mb-8">We're happy to chat. Reach out via text or email and we'll get back to you within 24 hours.</p>
          <a href="mailto:hello@amarielboutique.com" className="bg-brand-espresso text-brand-offwhite px-8 py-3 font-sans text-xs tracking-widest uppercase shadow-md inline-block">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
