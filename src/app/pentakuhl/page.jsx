
import Banner from "@/Components/Banner";
import FAQSection from "@/Components/pentakuhlComponents/FaqSection";
import GuideSection from "@/Components/pentakuhlComponents/GuideSection";
import PentakuhlAboutSection from "@/Components/pentakuhlComponents/PentakuhlAboutSection";
import PentaKuhlHero from "@/Components/pentakuhlComponents/PentaKuhlHero";
import ProductSolutionsSection from "@/Components/pentakuhlComponents/ProductSolutionsSection";
import ReadMoreSection from "@/Components/pentakuhlComponents/ReadMoreSection";

function PentaKuhlPage() {
  return (
    <main className="bg-white">
      <PentaKuhlHero />
      <PentakuhlAboutSection />
      <ReadMoreSection />
      <ProductSolutionsSection />
      <GuideSection />
      <FAQSection />
      <Banner
        height="h-[400px] md:h-[500px]"
        imageUrl="/banner1.jpeg"
        overlayOpacity="0.5"
        heading="Welcome to PentaKuhl"
        description="Get in touch to ensure safe and temperature-stable transit for your sensitive products."
        buttonHref="/contact"
        buttonLabel="Contact Us Today"
      />
    </main>
  );
}

export default PentaKuhlPage;
