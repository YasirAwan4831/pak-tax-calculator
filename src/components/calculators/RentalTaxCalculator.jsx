import { useMemo, useState } from "react";
import { rentalSlabs2026 } from "../../data/taxSlabs2026";
import { rentalSlabs2027 } from "../../data/taxSlabs2027";
import { calculateRentalTax } from "../../utils/rentalTaxCalculator";
import { parseCurrencyInput } from "../../utils/formatCurrency";
import ResultCard from "../shared/ResultCard";
import TaxSlabTable from "../shared/TaxSlabTable";
import CopyShareButtons from "../shared/CopyShareButtons";

export default function RentalTaxCalculator({ taxYear }) {
  const [inputMode, setInputMode] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const slabs = taxYear === "2027" ? rentalSlabs2027 : rentalSlabs2026;
  const annualRental = useMemo(() => {
    const val = parseCurrencyInput(amount);
    return inputMode === "monthly" ? val * 12 : val;
  }, [amount, inputMode]);
  const result = useMemo(() => calculateRentalTax(annualRental, slabs), [annualRental, slabs]);

  const handleChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    const parsed = parseCurrencyInput(val);
    if (val && parsed <= 0) setError("Please enter a valid rental amount");
    else setError("");
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-2">
            {["monthly", "annual"].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setInputMode(mode)}
                className={`rounded-lg px-4 py-2 text-sm font-medium capitalize ${
                  inputMode === mode
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {inputMode === "monthly" ? "Monthly Rental Income (PKR)" : "Annual Rental Income (PKR)"}
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={handleChange}
              placeholder="e.g. 80000"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard title="Annual Tax" value={result.annualTax || 0} highlight />
          <ResultCard title="Monthly Tax" value={result.monthlyTax || 0} />
          <ResultCard title="Net Income" value={result.netIncome || 0} />
          <ResultCard title="Effective Rate" value={0} subtitle={`${result.effectiveRate || 0}%`} />
        </div>
      </div>
      {annualRental > 0 && (
        <>
          <CopyShareButtons text={`Rental Tax: Rs. ${result.annualTax?.toLocaleString("en-PK")}`} />
          <TaxSlabTable slabs={slabs} income={annualRental} />
        </>
      )}
    </div>
  );
}
