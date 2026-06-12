import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Building2, Leaf, LineChart, Wallet } from "lucide-react";
import SalaryTaxCalculator from "./SalaryTaxCalculator";
import BusinessTaxCalculator from "./BusinessTaxCalculator";
import RentalTaxCalculator from "./RentalTaxCalculator";
import CapitalGainCalculator from "./CapitalGainCalculator";
import AgricultureTaxCalculator from "./AgricultureTaxCalculator";
import TaxYearSelector from "../shared/TaxYearSelector";

const tabs = [
  { id: "salary", label: "Salary", icon: Wallet },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "rental", label: "Rental", icon: Building2 },
  { id: "capital", label: "Capital Gain", icon: LineChart },
  { id: "agriculture", label: "Agriculture", icon: Leaf },
];

export default function TaxTabs() {
  const [activeTab, setActiveTab] = useState("salary");
  const [taxYear, setTaxYear] = useState("2027");

  const renderCalculator = () => {
    switch (activeTab) {
      case "salary":
        return <SalaryTaxCalculator taxYear={taxYear} />;
      case "business":
        return <BusinessTaxCalculator taxYear={taxYear} />;
      case "rental":
        return <RentalTaxCalculator taxYear={taxYear} />;
      case "capital":
        return <CapitalGainCalculator taxYear={taxYear} />;
      case "agriculture":
        return <AgricultureTaxCalculator taxYear={taxYear} />;
      default:
        return null;
    }
  };

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tax Calculators</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Calculate your Pakistan income tax instantly using official FBR slabs
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <TaxYearSelector value={taxYear} onChange={setTaxYear} />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveTab(id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === id
                ? "bg-primary-600 text-white shadow-md dark:bg-primary-500"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-700 dark:hover:bg-gray-800"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${taxYear}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          {renderCalculator()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
