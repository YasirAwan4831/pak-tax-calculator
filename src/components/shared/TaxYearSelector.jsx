export default function TaxYearSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="tax-year" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Tax Year
      </label>
      <select
        id="tax-year"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      >
        <option value="2026">2025-26 (Finance Act 2025)</option>
        <option value="2027">2026-27 (Finance Bill 2026)</option>
      </select>
    </div>
  );
}
