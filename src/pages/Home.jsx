import Hero from "../components/sections/Hero";
import TaxTabs from "../components/calculators/TaxTabs";
import InformationSection from "../components/sections/InformationSection";
import TaxComparisonCards from "../components/sections/TaxComparisonCards";
import FAQs from "../components/sections/FAQs";
import DeveloperSection from "../components/sections/DeveloperSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TaxTabs />
      <InformationSection />
      <TaxComparisonCards />
      <FAQs />
      <DeveloperSection />
    </>
  );
}
