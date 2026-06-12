import { useMemo, useState } from "react";
import { businessSlabs2026 } from "../../data/taxSlabs2026";
import { businessSlabs2027 } from "../../data/taxSlabs2027";
import { calculateBusinessTax } from "../../utils/businessTaxCalculator";
import { parseCurrencyInput } from "../../utils/formatCurrency";
import ResultCard from "../shared/ResultCard";
import TaxSlabTable from "../shared/TaxSlabTable";
import CopyShareButtons from "../shared/CopyShareButtons";

export default function BusinessTaxCalculator({ taxYear }) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const slabs = taxYear === "2027" ? businessSlabs2027 : businessSlabs2026;
  const annualIncome = useMemo(() => parseCurrencyInput(amount), [amount]);
  const result = useMemo(() => calculateBusinessTax(annualIncome, slabs), [annualIncome, slabs]);

  const handleChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    const parsed = parseCurrencyInput(val);
    if (val && parsed <= 0) setError("Please enter a valid income amount");
    else setError("");
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Annual Business Income (PKR)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={handleChange}
            placeholder="e.g. 2500000"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard title="Annual Tax" value={result.annualTax || 0} highlight />
          <ResultCard title="Net Income" value={result.netIncome || 0} />
          <ResultCard title="Effective Rate" value={0} subtitle={`${result.effectiveRate || 0}%`} />
        </div>
      </div>
      {annualIncome > 0 && (
        <>
          <CopyShareButtons text={`Business Tax: Rs. ${result.annualTax?.toLocaleString("en-PK")}`} />
          <TaxSlabTable slabs={slabs} income={annualIncome} />
        </>
      )}
    </div>
  );
}
