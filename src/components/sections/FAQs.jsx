import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is the tax-free income limit in Pakistan for 2025-26?",
    a: "For salaried individuals, annual income up to Rs. 600,000 is exempt from income tax under the Finance Act 2025.",
  },
  {
    q: "How is salary tax calculated in Pakistan?",
    a: "Salary tax is calculated on a progressive slab basis. Your total annual salary is matched against defined income brackets, and tax is computed using fixed amounts plus marginal rates.",
  },
  {
    q: "What changed in the 2026-27 tax slabs?",
    a: "The 2026-27 proposals widen several salary tax brackets, particularly for middle and upper-middle income earners, with adjusted fixed tax amounts.",
  },
  {
    q: "Is rental income taxable in Pakistan?",
    a: "Yes. Rental income exceeding Rs. 300,000 per year is subject to income tax at progressive rates starting from 5%.",
  },
  {
    q: "How is capital gains tax on property calculated?",
    a: "Capital gains on immovable property are taxed based on holding period — higher rates for shorter holding periods, with no tax after 4 years.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
