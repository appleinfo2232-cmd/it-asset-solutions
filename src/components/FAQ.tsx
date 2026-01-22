import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I know my data is truly secure?",
      // UPDATED: "compliant" -> "aligned" for legal safety
      a: "Security is our top priority. We use NIST 800-88 aligned data sanitization methods and provide serialized Certificates of Destruction for every data-bearing asset. Our chain of custody is secure and documented from pickup to final processing."
    },
    {
      q: "What is the process for getting a quote?",
      a: "It's simple. Fill out our contact form or call us directly. Ideally, provide a rough inventory list (device types and quantities). We will provide a customized assessment and quote within 24 hours."
    },
    {
      q: "Is there a minimum quantity of equipment required for pickup?",
      a: "For corporate pickups, we typically require a minimum of 20+ enterprise assets (laptops, desktops, servers) to waive logistics fees. However, we can accommodate smaller pickups for a nominal fee or via our Box-and-Ship program."
    },
    {
      q: "How do you determine the value of my old equipment?",
      a: "We assess value based on current secondary market trends, device condition, age, and specifications. Our remarketing team works globally to find the highest resale value, sharing the revenue back with you."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" /> Common Questions
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                {openIndex === idx ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;