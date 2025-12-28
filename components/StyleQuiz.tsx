
import React, { useState } from 'react';
import { Sparkles, ChevronRight, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuizResult {
  style: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

const StyleQuiz: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions = [
    {
      question: "How old is your daughter?",
      options: [
        { label: "4-6 years", value: "young" },
        { label: "7-10 years", value: "middle" },
        { label: "11+ years", value: "older" },
      ],
    },
    {
      question: "How tender-headed is she?",
      options: [
        { label: "Very sensitive", value: "sensitive" },
        { label: "Somewhat sensitive", value: "moderate" },
        { label: "Not very sensitive", value: "tough" },
      ],
    },
    {
      question: "How long can she sit still?",
      options: [
        { label: "1-2 hours max", value: "short" },
        { label: "2-4 hours", value: "medium" },
        { label: "4+ hours no problem", value: "long" },
      ],
    },
    {
      question: "What's most important to you?",
      options: [
        { label: "Quick & easy style", value: "quick" },
        { label: "Long-lasting (2+ weeks)", value: "lasting" },
        { label: "Something special for an event", value: "special" },
      ],
    },
  ];

  const results: Record<string, QuizResult> = {
    cornrows: {
      style: "Cornrows with Beads",
      description: "Perfect for younger kids and sensitive scalps. Quick to install and easy to maintain. Add colorful beads for extra cuteness!",
      image: "/gallery/braids-2.png",
      duration: "1.5-2 hours",
      price: "Starting at $45",
    },
    knotless: {
      style: "Knotless Braids",
      description: "The gentlest option for tender heads. No tension at the root means no pain. Lasts 2-4 weeks with proper care.",
      image: "/gallery/braids-4.png",
      duration: "3-4 hours",
      price: "Starting at $85",
    },
    boxbraids: {
      style: "Box Braids",
      description: "Classic protective style that lasts 4-6 weeks. Great for older kids who can sit longer. Add beads or cuffs for personality!",
      image: "/gallery/braids-3.png",
      duration: "4-6 hours",
      price: "Starting at $95",
    },
    goddess: {
      style: "Goddess Braids",
      description: "Elegant and stunning for special occasions. These larger braids are quicker to install while making a big statement.",
      image: "/gallery/braids-8.png",
      duration: "2-3 hours",
      price: "Starting at $75",
    },
  };

  const getResult = (): QuizResult => {
    const [age, sensitivity, patience, priority] = answers;

    if (sensitivity === "sensitive" || patience === "short") {
      return results.cornrows;
    }
    if (priority === "special") {
      return results.goddess;
    }
    if (age === "young" || priority === "quick") {
      return results.cornrows;
    }
    if (priority === "lasting" && patience === "long") {
      return results.boxbraids;
    }
    return results.knotless;
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getResult());
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  if (!isOpen) {
    return (
      <section className="py-16 bg-brand-offwhite px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-brand-gold" size={18} />
            <span className="text-xs font-sans tracking-widest uppercase text-brand-espresso">Interactive Tool</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso mb-4">
            Not sure which style is right?
          </h2>
          <p className="font-sans text-brand-charcoal/70 mb-8 max-w-xl mx-auto">
            Take our 30-second quiz to find the perfect braiding style for your daughter based on her age, sensitivity, and your preferences.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-brand-espresso text-brand-offwhite px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors inline-flex items-center gap-2"
          >
            Find Her Perfect Style
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-brand-offwhite px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-brand-cream p-8 md:p-12 rounded-sm shadow-lg border border-brand-gold/20 relative">
          <button
            onClick={() => {
              setIsOpen(false);
              resetQuiz();
            }}
            className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors"
          >
            <X size={24} />
          </button>

          {!result ? (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 flex-1 rounded-full ${
                        idx <= step ? 'bg-brand-gold' : 'bg-brand-charcoal/10'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-sans tracking-widest uppercase text-brand-charcoal/50">
                  Question {step + 1} of {questions.length}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-brand-espresso mb-8">
                {questions[step].question}
              </h3>

              <div className="space-y-4">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 bg-brand-offwhite border border-brand-gold/10 rounded-sm hover:border-brand-gold hover:bg-brand-gold/5 transition-all font-sans text-brand-espresso flex items-center justify-between group"
                  >
                    {option.label}
                    <ChevronRight size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 rounded-full mb-6">
                <Check className="text-brand-gold" size={18} />
                <span className="text-xs font-sans tracking-widest uppercase text-brand-espresso">Your Perfect Match</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-brand-espresso mb-6">
                {result.style}
              </h3>

              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img
                  src={result.image}
                  alt={result.style}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-brand-charcoal/70 mb-6">
                {result.description}
              </p>

              <div className="flex items-center justify-center gap-6 mb-8 text-sm">
                <div className="text-center">
                  <div className="text-brand-gold font-semibold">{result.duration}</div>
                  <div className="text-brand-charcoal/50 text-xs uppercase tracking-wider">Duration</div>
                </div>
                <div className="w-px h-8 bg-brand-gold/20" />
                <div className="text-center">
                  <div className="text-brand-gold font-semibold">{result.price}</div>
                  <div className="text-brand-charcoal/50 text-xs uppercase tracking-wider">Price</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-brand-espresso text-brand-offwhite px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors"
                >
                  Book This Style
                </Link>
                <button
                  onClick={resetQuiz}
                  className="text-brand-espresso font-sans text-xs tracking-widest uppercase border border-brand-espresso px-8 py-4 hover:bg-brand-espresso hover:text-brand-offwhite transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;
