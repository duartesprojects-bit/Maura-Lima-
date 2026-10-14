'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-sm sm:text-base font-semibold text-[#0D0D0D] group-hover:text-[#C9A24B] transition-colors pr-4">
                {faq.question}
              </span>
              <span
                className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-[#0D0D0D] text-[#C9A24B]' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="pt-2 pb-3 pr-6 text-sm text-neutral-600 font-light leading-relaxed animate-in fade-in-50 duration-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
