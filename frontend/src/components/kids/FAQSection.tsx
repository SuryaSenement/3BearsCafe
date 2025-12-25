import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Where can I book a visit?',
    answer: 'You can book a visit by calling us at +91 9876543214 or by clicking the "Book Now" button on our website. We recommend booking in advance to ensure availability.'
  },
  {
    id: 2,
    question: 'What age groups can enjoy Kids District?',
    answer: 'Kids District welcomes children aged 3-14 years. Our activities are designed with different age groups in mind to ensure age-appropriate fun and learning experiences.'
  },
  {
    id: 3,
    question: 'Can we host birthday parties or special events here?',
    answer: 'Yes! We offer special birthday party packages and can accommodate various special events. Contact us to discuss your requirements and we\'ll create a memorable celebration.'
  },
  {
    id: 4,
    question: 'Do parents need to stay during playtime?',
    answer: 'For children under 6, we recommend parent supervision. Children 6 and above can participate independently under our trained staff supervision. Parents are always welcome to stay and watch.'
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">FAQs</h2>
          <p className="text-gray-600">
            Get answers to commonly asked questions about Kids District
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Any Doubts? Call us on +91 9876543214</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;