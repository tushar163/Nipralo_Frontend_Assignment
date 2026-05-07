import Accordion from "../Accordion";


const faqs = [
  {
    question: "What is Penta Kuhl?",
    answer:
      "Penta Kuhl is a temperature-controlled logistics solution offered by Penta Freight, designed to safely transport and store sensitive pharmaceutical and biological products across various thermal conditions.",
  },
  {
    question: "How does Penta Kuhl ensure cargo safety?",
    answer:
      "We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo.",
  },
  {
    question: "What types of cargo can Penta Kuhl handle?",
    answer:
      "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight.",
  },
  {
    question: "Is there customer support available for Penta Kuhl users?",
    answer:
      "Yes, our dedicated support team is available 24/7 to assist with any queries, shipment updates, or escalations related to your Penta Kuhl service.",
  },
  {
    question: "What temperature ranges does Penta Kuhl support?",
    answer:
      "Penta Kuhl supports a wide range of thermal profiles — from refrigerated (2°C–8°C) and ambient (15°C–25°C) to deep-freeze (-20°C) and ultra-cold (-80°C) — covering every major pharmaceutical requirement.",
  },
  {
    question: "Does Penta Kuhl offer global shipping?",
    answer:
      "Yes, Penta Kuhl operates across a global network with offices in India, USA, and partner hubs in Europe, Asia-Pacific, and the Middle East to ensure seamless international cold-chain logistics.",
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
              Explore our frequently asked questions to gain clarity about Penta
              Kuhl's services and features.
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