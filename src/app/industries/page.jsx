import Banner from "@/Components/Banner";
import FAQSection from "@/Components/industriesComponents/FaqSection";
import IndustriesSection from "@/Components/industriesComponents/IndustriesSection";

function IndustriesPage() {
  return (
    <main className="bg-white">
      <IndustriesSection />
      <FAQSection />
      <Banner 
        height="h-[400px] md:h-[500px]"
        imageUrl="/banner2.jpeg"
        overlayOpacity="0.5"
        heading="Tailored Logistics for Every Industry"
        description="Delivering tailored supply chain solutions to meet the unique needs of industries worldwide."
        buttonHref="/contact"
        buttonLabel="Contact Us Today"
      />
    </main>
  );
}

export default IndustriesPage;
