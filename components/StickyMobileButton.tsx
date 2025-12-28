
import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyMobileButton: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-espresso/95 backdrop-blur-sm border-t border-brand-gold/20 p-3 flex gap-3">
      <a
        href="tel:+14704531126"
        className="flex-1 bg-brand-gold text-brand-offwhite py-3 flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase"
      >
        <Phone size={16} />
        Call or Text
      </a>
      <Link
        to="/contact"
        className="flex-1 bg-brand-rose text-brand-offwhite py-3 flex items-center justify-center gap-2 font-sans text-xs tracking-wider uppercase"
      >
        <Calendar size={16} />
        Book Now
      </Link>
    </div>
  );
};

export default StickyMobileButton;
