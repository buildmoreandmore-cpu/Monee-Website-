
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Book Your Experience" subtitle="We can't wait to welcome you and your little one to our studio." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Booking Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-3xl text-brand-espresso mb-6">Let's Connect</h3>
              <p className="font-sans text-brand-charcoal/70 leading-relaxed mb-8">
                For the fastest booking experience, please use our online system below. For special inquiries or custom styles, feel free to send us a message.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-espresso mb-1">Call / Text</h4>
                    <p className="text-brand-charcoal/60 text-sm">(404) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-espresso mb-1">Email</h4>
                    <p className="text-brand-charcoal/60 text-sm">hello@amarielboutique.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-espresso mb-1">Studio Location</h4>
                    <p className="text-brand-charcoal/60 text-sm">Private Studio in Buckhead, Atlanta<br />(Full address sent after booking)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-espresso mb-1">Hours</h4>
                    <p className="text-brand-charcoal/60 text-sm">Tue-Sat: 9am - 6pm<br />Sun-Mon: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple FAQ Section */}
            <div className="bg-brand-cream p-10 border border-brand-gold/10">
              <h4 className="font-serif text-2xl text-brand-espresso mb-6">Quick FAQs</h4>
              <div className="space-y-6">
                {FAQS.slice(0, 3).map((faq, i) => (
                  <div key={i}>
                    <h5 className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">{faq.question}</h5>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact / Booking Form */}
          <div className="bg-brand-offwhite p-8 md:p-12 shadow-2xl border border-brand-gold/10 relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/60 mb-2">Your Name</label>
                    <input required type="text" className="w-full bg-brand-cream border-b border-brand-gold/30 px-4 py-3 focus:outline-none focus:border-brand-gold font-sans text-sm" />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/60 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-brand-cream border-b border-brand-gold/30 px-4 py-3 focus:outline-none focus:border-brand-gold font-sans text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/60 mb-2">Daughter's Age (if booking braids)</label>
                  <input type="text" className="w-full bg-brand-cream border-b border-brand-gold/30 px-4 py-3 focus:outline-none focus:border-brand-gold font-sans text-sm" placeholder="e.g. 6 years old" />
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/60 mb-2">Service Requested</label>
                  <select className="w-full bg-brand-cream border-b border-brand-gold/30 px-4 py-3 focus:outline-none focus:border-brand-gold font-sans text-sm appearance-none">
                    <option>Select a service...</option>
                    <option>Kids' Braiding</option>
                    <option>Lash Extensions</option>
                    <option>Makeup Artistry</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/60 mb-2">Your Message</label>
                  <textarea rows={4} className="w-full bg-brand-cream border-b border-brand-gold/30 px-4 py-3 focus:outline-none focus:border-brand-gold font-sans text-sm"></textarea>
                </div>
                <div className="pt-6">
                  <button type="submit" className="w-full bg-brand-rose text-brand-espresso font-sans text-xs tracking-widest font-bold uppercase py-5 shadow-lg hover:bg-brand-gold hover:text-brand-offwhite transition-all">
                    SEND INQUIRY & START BOOKING
                  </button>
                </div>
                <p className="text-[10px] text-center text-brand-charcoal/40 font-sans tracking-widest uppercase italic">
                  *A $25 deposit is required to finalize all appointments.
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-16 h-16 border-2 border-brand-gold flex items-center justify-center font-serif text-3xl text-brand-gold">A</div>
                <h3 className="font-serif text-3xl text-brand-espresso">Thank you, mama!</h3>
                <p className="font-sans text-brand-charcoal/70 max-w-sm">
                  We've received your inquiry. Check your inbox for our booking portal link and availability. We look forward to seeing you!
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand-gold font-sans text-[10px] tracking-[0.2em] uppercase border-b border-brand-gold">Send another message</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
