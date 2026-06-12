import { formatPKR } from "../../utils/formatCurrency";

export default function TaxSlabTable({ slabs, income }) {
  const formatRange = (min, max) => {
    if (max === Infinity) return `${formatPKR(min)}+`;
    return `${formatPKR(min)} – ${formatPKR(max)}`;
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Income Slab</th>
            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Rate</th>
            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Description</th>
            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Active</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {slabs.map((slab, i) => {
            const isActive = income > slab.min && income <= (slab.max === Infinity ? Infinity : slab.max);
            const inRange = income > slab.min;
            return (
              <tr
                key={i}
                className={inRange ? "bg-primary-50/50 dark:bg-primary-900/10" : "bg-white dark:bg-gray-950"}
              >
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {formatRange(slab.min, slab.max)}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{(slab.rate * 100).toFixed(0)}%</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {slab.description || `Fixed: ${formatPKR(slab.fixedTax)} + ${(slab.rate * 100).toFixed(0)}%`}
                </td>
                <td className="px-4 py-3">
                  {isActive && (
                    <span className="inline-flex rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-400">
                      Current
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
