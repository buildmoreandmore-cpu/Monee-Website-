
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, MessageCircle } from 'lucide-react';
import { getHairCareAdvice } from '../services/geminiService';

const GeminiStyleAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hello! I'm Amariel's virtual assistant. Ask me anything about kids' hair care or braid maintenance!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const aiResponse = await getHairCareAdvice(userText);
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-gold text-brand-offwhite p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-sans text-sm tracking-wider font-medium hidden sm:inline">HAIR CARE ADVICE</span>
          <MessageCircle className="w-5 h-5 sm:hidden" />
        </button>
      )}

      {isOpen && (
        <div className="bg-brand-offwhite w-[350px] sm:w-[400px] h-[500px] shadow-2xl rounded-2xl flex flex-col border border-brand-gold/20 overflow-hidden">
          {/* Header */}
          <div className="bg-brand-espresso p-5 flex justify-between items-center text-brand-offwhite">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-gold/20 p-2 rounded-full">
                <Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg">Amariel AI Assistant</h4>
                <p className="text-[10px] text-brand-cream/50 tracking-widest uppercase">Expert Hair Care Guidance</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-offwhite/50 hover:text-brand-offwhite">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-brand-cream/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-rose text-brand-offwhite rounded-br-none' 
                    : 'bg-brand-offwhite border border-brand-gold/10 text-brand-charcoal rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-offwhite p-4 rounded-2xl rounded-bl-none shadow-sm border border-brand-gold/10 flex space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-brand-offwhite border-t border-brand-gold/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about braid maintenance..."
                className="w-full bg-brand-cream py-3 pl-4 pr-12 rounded-full font-sans text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold/30"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-gold disabled:opacity-30"
                disabled={isLoading}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-brand-charcoal/40 mt-3 font-sans uppercase tracking-widest">
              Powered by Gemini AI Technology
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiStyleAssistant;
