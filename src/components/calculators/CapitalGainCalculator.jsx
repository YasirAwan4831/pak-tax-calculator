import { useMemo, useState } from "react";
import { capitalGainSlabs2026 } from "../../data/taxSlabs2026";
import { capitalGainSlabs2027 } from "../../data/taxSlabs2027";
import { calculateCapitalGainTax } from "../../utils/capitalGainCalculator";
import { parseCurrencyInput } from "../../utils/formatCurrency";
import ResultCard from "../shared/ResultCard";
import CopyShareButtons from "../shared/CopyShareButtons";

export default function CapitalGainCalculator({ taxYear }) {
  const [gainAmount, setGainAmount] = useState("");
  const [holdingYears, setHoldingYears] = useState("1");
  const [assetType, setAssetType] = useState("property");
  const [error, setError] = useState("");

  const slabs = taxYear === "2027" ? capitalGainSlabs2027 : capitalGainSlabs2026;
  const gain = useMemo(() => parseCurrencyInput(gainAmount), [gainAmount]);
  const years = parseInt(holdingYears, 10);

  const result = useMemo(() => {
    if (assetType === "securities") {
      const tax = Math.round(gain * slabs.securities);
      return {
        tax,
        rate: (slabs.securities * 100).toFixed(1),
        effectiveRate: (slabs.securities * 100).toFixed(1),
        netGain: Math.round(gain - tax),
      };
    }
    return calculateCapitalGainTax(gain, years, slabs);
  }, [gain, years, slabs, assetType]);

  const handleChange = (e) => {
    const val = e.target.value;
    setGainAmount(val);
    const parsed = parseCurrencyInput(val);
    if (val && parsed <= 0) setError("Please enter a valid gain amount");
    else setError("");
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Asset Type</label>
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            >
              <option value="property">Immovable Property</option>
              <option value="securities">Securities</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Capital Gain (PKR)</label>
            <input
              type="text"
              inputMode="numeric"
              value={gainAmount}
              onChange={handleChange}
              placeholder="e.g. 5000000"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
          {assetType === "property" && (
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Holding Period (Years)</label>
              <select
                value={holdingYears}
                onChange={(e) => setHoldingYears(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                <option value="1">1 Year or less</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">More than 4 Years</option>
              </select>
            </div>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard title="Tax Payable" value={result.tax || 0} highlight />
          <ResultCard title="Net Gain" value={result.netGain || 0} />
          <ResultCard title="Tax Rate" value={0} subtitle={`${result.rate || 0}%`} />
        </div>
      </div>
      {gain > 0 && (
        <CopyShareButtons text={`Capital Gain Tax: Rs. ${result.tax?.toLocaleString("en-PK")} (${result.rate}%)`} />
      )}
    </div>
  );
}
