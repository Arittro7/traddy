const faqs = [
  {
    q: "How much can I earn as a guide?",
    a: "Earnings vary based on your tour prices, availability, and ratings. Most guides earn between $50-200 per tour, with top guides earning $5,000+ monthly.",
  },
  {
    q: "How do I get paid?",
    a: "We process payments securely through our platform. You'll receive payments directly to your bank account after each completed tour.",
  },
  {
    q: "How long does verification take?",
    a: "The verification process typically takes 2-3 business days after you submit all required documents.",
  },
  {
    q: "Can I work as a guide part-time?",
    a: "Absolutely! Many of our guides work part-time while studying, working other jobs, or raising families.",
  },
  {
    q: "What support do you provide to guides?",
    a: "We offer 24/7 support, marketing tools, insurance coverage, and resources to help you succeed.",
  },
];

export default function FAQSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative group bg-white p-6 rounded-xl shadow cursor-pointer"
          >
            {/* Question */}
            <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>

            {/* Tooltip Answer */}
            <div className="absolute left-1/2 top-full mt-2 w-full -translate-x-1/2 rounded-lg bg-[#001F3D] text-white text-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}