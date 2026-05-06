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
    </main>
  );
}

export default PentaKuhlPage;
