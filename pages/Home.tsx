
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Heart, Clock, Smile } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ReferralBanner from '../components/ReferralBanner';
import TrustBadgeBar from '../components/TrustBadgeBar';
import ServiceAreaSection from '../components/ServiceAreaSection';
import StyleQuiz from '../components/StyleQuiz';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/braids-2.png"
            alt="Happy girl with braids"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-espresso/40" />
        </div>

        <div className="relative z-10 text-center text-brand-offwhite px-6 max-w-4xl pt-20">
          <div className="w-16 h-16 border-2 border-brand-gold flex items-center justify-center font-serif text-3xl mx-auto mb-8 animate-pulse">A</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-md">
            Braid day doesn't have to end in tears.
          </h1>
          <p className="font-sans text-lg md:text-xl mb-12 tracking-wide opacity-90 max-w-2xl mx-auto">
            McDonough's trusted kids' braiding specialist. <span className="font-semibold italic">Patient hands, beautiful results.</span> Serving Henry County & South Metro Atlanta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-brand-rose px-8 py-4 text-brand-espresso font-sans text-sm tracking-[0.2em] font-bold uppercase shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-center"
            >
              Book Your Daughter's Appointment
            </Link>
            <a
              href="tel:+14704531126"
              className="group flex items-center space-x-2 text-brand-offwhite font-sans text-sm tracking-[0.2em] uppercase hover:text-brand-gold transition-colors"
            >
              <span>Or Call: (470) 453-1126</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="bg-brand-gold/20 px-4 py-2 rounded-full text-xs tracking-wider uppercase border border-brand-gold/30 text-brand-offwhite">Mobile Service Available</span>
            <span className="bg-brand-offwhite/10 px-4 py-2 rounded-full text-xs tracking-wider uppercase border border-brand-offwhite/20 text-brand-offwhite">Gentle on Tender Heads</span>
          </div>
        </div>
      </section>

      {/* TRUST BADGE BAR */}
      <TrustBadgeBar />

      {/* 2. THE DIFFERENCE */}
      <section className="py-24 bg-brand-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Your daughter deserves a stylist who actually loves working with kids." 
            subtitle="We prioritize the emotional experience just as much as the aesthetic result."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="fade-in-scroll text-center space-y-6">
              <div className="w-16 h-16 bg-brand-cream border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <Clock size={32} />
              </div>
              <div className="space-y-2">
                <p className="text-brand-charcoal/40 line-through text-xs tracking-widest uppercase">Rushed Appointments</p>
                <div className="text-brand-gold font-serif text-2xl">All the time she needs</div>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">We never rush. If your daughter needs a break, a snack, or a moment to breathe, she gets it.</p>
              </div>
            </div>

            <div className="fade-in-scroll text-center space-y-6" style={{ transitionDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-brand-cream border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <Heart size={32} />
              </div>
              <div className="space-y-2">
                <p className="text-brand-charcoal/40 line-through text-xs tracking-widest uppercase">Frustrated Stylists</p>
                <div className="text-brand-gold font-serif text-2xl">Patient, gentle hands</div>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">Amariel is an expert at working with all temperaments, ensuring a calm atmosphere throughout.</p>
              </div>
            </div>

            <div className="fade-in-scroll text-center space-y-6" style={{ transitionDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-brand-cream border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <Smile size={32} />
              </div>
              <div className="space-y-2">
                <p className="text-brand-charcoal/40 line-through text-xs tracking-widest uppercase">Tears and Tantrums</p>
                <div className="text-brand-gold font-serif text-2xl">A calm, enjoyable experience</div>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">From curated movies to gentle distraction techniques, we make braid day something to look forward to.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Services" subtitle="From gentle braiding to expert lashes and makeup, we provide premium beauty care for the whole family." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className="group bg-brand-offwhite rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-gold/10 flex flex-col h-full fade-in-scroll"
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-brand-espresso/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-sans tracking-[0.2em] text-brand-gold mb-2 uppercase">{service.price}</div>
                  <h3 className="font-serif text-2xl text-brand-espresso mb-4">{service.title}</h3>
                  <p className="text-sm text-brand-charcoal/60 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-8 border-t border-brand-gold/10 pt-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-xs font-sans tracking-widest text-brand-espresso/80 flex items-center uppercase">
                        <span className="w-1 h-1 bg-brand-gold mr-2" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/services" 
                    className="text-xs font-sans font-bold tracking-[0.2em] text-brand-espresso hover:text-brand-gold transition-colors inline-flex items-center group"
                  >
                    LEARN MORE <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="inline-block border-b border-brand-gold text-brand-espresso font-sans text-xs tracking-[0.2em] pb-1 hover:text-brand-gold transition-colors"
            >
              VIEW FULL PRICE LIST
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MINI GALLERY */}
      <section className="py-24 bg-brand-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Work" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: '/gallery/braids-2.png', alt: 'Cornrows with beads' },
              { src: '/gallery/braids-7.png', alt: 'Geometric cornrows with pink beads' },
              { src: '/gallery/braids-8.png', alt: 'Honey blonde goddess braids' },
              { src: '/gallery/braids-3.png', alt: 'Braids with cowrie shells' },
              { src: '/gallery/braids-4.png', alt: 'Ombre box braids' },
              { src: '/gallery/braids-6.png', alt: 'Stitch braids' },
              { src: '/gallery/braids-1.png', alt: 'Locs with flower crown' },
              { src: '/gallery/braids-5.png', alt: 'Butterfly locs' },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden relative group cursor-pointer fade-in-scroll">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[0px] group-hover:border-[15px] border-brand-gold/20 transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/20 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="bg-brand-espresso text-brand-offwhite px-10 py-4 font-sans text-xs tracking-widest hover:bg-brand-gold transition-colors">
              VIEW FULL PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* STYLE QUIZ */}
      <StyleQuiz />

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-brand-cream overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What Moms Are Saying" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-brand-offwhite p-10 shadow-sm border border-brand-gold/10 rounded-sm fade-in-scroll"
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="flex space-x-1 mb-6 text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="font-serif text-xl text-brand-espresso italic mb-8 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-brand-gold/10 pt-6">
                  <div className="font-sans text-sm font-bold tracking-widest text-brand-espresso uppercase mb-1">{t.author}</div>
                  <div className="font-sans text-xs text-brand-charcoal/50 tracking-wider">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://g.page/r/Cf-fMHCEdA6sEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-espresso text-brand-offwhite px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors"
            >
              <Star size={16} fill="currentColor" />
              Leave Us a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW - UPDATED WITH ORIGIN STORY */}
      <section className="py-24 bg-brand-offwhite px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative fade-in-scroll">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/20 z-0" />
            <img
              src="/gallery/braids-5.png"
              alt="The hands behind Amariel Boutique"
              className="relative z-10 w-full h-auto shadow-2xl rounded-sm"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-gold p-8 z-20 hidden lg:block max-w-xs shadow-xl">
              <p className="font-serif text-2xl text-brand-offwhite leading-tight">
                "I treat every little girl <br />like she's my own."
              </p>
            </div>
          </div>
          <div className="fade-in-scroll lg:pl-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-espresso mb-10 leading-tight">Our Origin Story</h2>
            <div className="space-y-6 text-brand-charcoal/80 leading-relaxed font-sans text-lg">
              <p className="italic font-serif text-xl text-brand-espresso/90 border-l-2 border-brand-gold pl-6 py-2">
                "I still remember sitting between my mama's knees on Sunday nights. The smell of coconut oil. Her hands moving through my hair—patient, gentle, never rushing. Those were the moments I felt most loved. Most beautiful. Most me."
              </p>
              <p>
                When I started braiding, I thought I was just doing hair. But the first time a little girl looked in the mirror and her whole face lit up—I realized I wasn't just styling. I was giving her that same feeling my mama gave me.
              </p>
              <p className="font-semibold text-brand-espresso">
                That's why I only braid kids.
              </p>
              <p>
                Because every little girl deserves to feel beautiful. To sit still not because she has to, but because she feels safe. To walk out with her head high, knowing someone took their time with her.
              </p>
              <p>
                I'm not the fastest braider. I'm not trying to be. I'm the one who will treat your daughter like she's my own.
              </p>
              <p className="font-serif text-2xl text-brand-gold pt-4">
                That's Amariel Boutique.
              </p>
            </div>
            <div className="mt-12">
              <Link 
                to="/about" 
                className="bg-brand-espresso text-brand-offwhite px-10 py-4 font-sans text-xs tracking-widest font-bold uppercase hover:bg-brand-gold transition-all shadow-lg inline-block"
              >
                Read More About Amariel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <ServiceAreaSection />

      {/* REFERRAL PROGRAM */}
      <ReferralBanner />

      {/* 7. CTA BANNER */}
      <section className="py-24 bg-brand-rose px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-espresso mb-6">Ready to book?</h2>
          <p className="font-sans text-brand-espresso/70 mb-12 tracking-wide text-lg">
            Weekend slots fill fast. Secure your daughter's appointment today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-brand-espresso text-brand-offwhite px-12 py-5 font-sans text-xs tracking-widest font-bold uppercase shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-center"
            >
              Book Your Daughter's Appointment
            </Link>
            <a
              href="tel:+14704531126"
              className="group flex items-center space-x-2 text-brand-espresso font-sans text-xs tracking-widest font-bold uppercase"
            >
              <span>Or Call/Text: (470) 453-1126</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
