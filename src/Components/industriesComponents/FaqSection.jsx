import Accordion from "@/components/Accordion";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.",
  },
  {
    question: "How do you handle temperature-sensitive shipments?",
    answer:
      "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.",
  },
  {
    question: "What sets your logistics apart?",
    answer:
      "We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.",
  },
  {
    question: "How do you ensure compliance with regulations?",
    answer:
      "We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.",
  },
];

export default function FAQSection() {
    return (
        <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

                    {/* ── Left: heading + description ── */}
                    <div className="lg:w-[38%] flex-shrink-0 lg:sticky lg:top-[20vh]">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                            <span className="text-gray-900">Frequently Asked </span>
                            <span className="text-gray-400">Questions</span>
                        </h2>
                        <p className="mt-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs">
                            Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
                        </p>
                    </div>

                    {/* ── Right: accordion ── */}
                    <div className="flex-1">
                        <Accordion items={faqs} allowMultiple={false} />
                    </div>

                </div>
            </div>
        </section>
    );
}