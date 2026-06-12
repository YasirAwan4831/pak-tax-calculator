import { useMemo, useState } from "react";
import { salarySlabs2026 } from "../../data/taxSlabs2026";
import { salarySlabs2027 } from "../../data/taxSlabs2027";
import { calculateSalaryTax } from "../../utils/salaryTaxCalculator";
import { parseCurrencyInput } from "../../utils/formatCurrency";
import ResultCard from "../shared/ResultCard";
import TaxSlabTable from "../shared/TaxSlabTable";
import CopyShareButtons from "../shared/CopyShareButtons";

export default function SalaryTaxCalculator({ taxYear }) {
  const [inputMode, setInputMode] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const slabs = taxYear === "2027" ? salarySlabs2027 : salarySlabs2026;

  const annualIncome = useMemo(() => {
    const val = parseCurrencyInput(amount);
    return inputMode === "monthly" ? val * 12 : val;
  }, [amount, inputMode]);

  const result = useMemo(() => calculateSalaryTax(annualIncome, slabs), [annualIncome, slabs]);

  const handleChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    const parsed = parseCurrencyInput(val);
    if (val && parsed <= 0) {
      setError("Please enter a valid income amount");
    } else {
      setError("");
    }
  };

  const shareText = `Salary Tax Result (${taxYear === "2027" ? "2026-27" : "2025-26"})\nAnnual Tax: Rs. ${result.annualTax?.toLocaleString("en-PK")}\nNet Monthly: Rs. ${result.netMonthlyIncome?.toLocaleString("en-PK")}`;

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
              {inputMode === "monthly" ? "Monthly Salary (PKR)" : "Annual Salary (PKR)"}
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={handleChange}
              placeholder="e.g. 150000"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard title="Annual Tax" value={result.annualTax || 0} highlight />
          <ResultCard title="Monthly Tax" value={result.monthlyTax || 0} />
          <ResultCard title="Net Annual Income" value={result.netAnnualIncome || 0} />
          <ResultCard title="Effective Rate" value={result.effectiveRate || 0} subtitle={`${result.effectiveRate || 0}%`} />
        </div>
      </div>

      {annualIncome > 0 && (
        <>
          <CopyShareButtons text={shareText} title="Salary Tax Result" />
          <TaxSlabTable slabs={slabs} income={annualIncome} />
        </>
      )}
    </div>
  );
}
