
import React, { useState, useEffect } from 'react';
import { X, Gift, CheckCircle } from 'lucide-react';

const LeadCapturePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    // Check if already shown this session
    const hasSeenPopup = sessionStorage.getItem('leadPopupSeen');
    if (hasSeenPopup) return;

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('leadPopupSeen', 'true');
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your email service
    console.log('Lead captured:', formData);
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-espresso/60 backdrop-blur-sm">
      <div className="bg-brand-offwhite max-w-md w-full rounded-sm shadow-2xl overflow-hidden relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-espresso transition-colors z-10"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="bg-brand-rose/20 p-6 text-center border-b border-brand-gold/10">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-brand-offwhite" size={28} />
              </div>
              <h3 className="font-serif text-2xl text-brand-espresso mb-2">
                First-Time Client Special
              </h3>
              <p className="text-brand-charcoal/70 font-sans text-sm">
                Get <span className="font-bold text-brand-gold">$15 OFF</span> your daughter's first braiding appointment!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-brand-gold/20 bg-brand-cream/50 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (for appointment texts)"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-brand-gold/20 bg-brand-cream/50 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-brand-gold/20 bg-brand-cream/50 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-rose text-brand-offwhite py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#C28E8E] transition-colors"
              >
                Claim My $15 Off
              </button>
              <p className="text-center text-brand-charcoal/40 text-xs">
                We'll text you to schedule. No spam, ever.
              </p>
            </form>

            {/* Bonus */}
            <div className="bg-brand-cream/50 p-4 border-t border-brand-gold/10">
              <p className="text-center text-brand-charcoal/60 text-xs font-sans">
                <span className="font-semibold">BONUS:</span> We'll also send you our free "Braid Day Prep Checklist"
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h3 className="font-serif text-2xl text-brand-espresso mb-3">
              You're All Set!
            </h3>
            <p className="text-brand-charcoal/70 font-sans text-sm mb-4">
              Check your phone - we'll text you shortly to schedule your daughter's appointment.
            </p>
            <p className="text-brand-gold font-sans text-sm font-semibold">
              Your $15 discount has been saved!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCapturePopup;
