import { salarySlabs2026 } from "../../data/taxSlabs2026";
import { salarySlabs2027 } from "../../data/taxSlabs2027";
import { formatPKR } from "../../utils/formatCurrency";

export default function TaxComparisonCards() {
  const sampleIncome = 3000000;

  const calcTax = (slabs, income) => {
    let tax = 0;
    for (const slab of slabs) {
      if (income > slab.min) {
        tax = slab.fixedTax + (income - slab.min) * slab.rate;
      }
    }
    return Math.round(tax);
  };

  const tax2026 = calcTax(salarySlabs2026, sampleIncome);
  const tax2027 = calcTax(salarySlabs2027, sampleIncome);
  const diff = tax2026 - tax2027;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tax Year Comparison</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sample comparison for {formatPKR(sampleIncome)} annual salary
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2025-26 Tax</p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{formatPKR(tax2026)}</p>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 dark:border-primary-800 dark:bg-primary-900/20">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">2026-27 Tax</p>
            <p className="mt-2 text-3xl font-bold text-primary-700 dark:text-primary-500">{formatPKR(tax2027)}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Difference</p>
            <p className={`mt-2 text-3xl font-bold ${diff >= 0 ? "text-green-600" : "text-red-600"}`}>
              {diff >= 0 ? "Save " : "Pay "}{formatPKR(Math.abs(diff))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
