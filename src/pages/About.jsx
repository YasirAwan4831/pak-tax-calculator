export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Pak Tax Calculator</h1>
      <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
        <p>
          Pak Tax Calculator is a free, open-source platform designed to help Pakistani taxpayers
          estimate their income tax liability based on official FBR tax slabs.
        </p>
        <p>
          Our calculators cover salary, business, rental, capital gains, and agriculture income —
          supporting both the 2025-26 (Finance Act 2025) and 2026-27 (Finance Bill 2026) tax years.
        </p>
        <p>
          Built with React 19, Vite, and Tailwind CSS, the platform is fast, responsive, and
          works entirely in your browser with no data sent to any server.
        </p>
      </div>
    </div>
  );
}
