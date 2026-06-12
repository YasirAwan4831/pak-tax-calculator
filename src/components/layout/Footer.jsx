import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Pak Tax Calculator</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Free Pakistan income tax calculator based on FBR tax slabs for 2025-26 and 2026-27.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/tax-guides" className="text-gray-600 hover:text-primary-600 dark:text-gray-400">Tax Guides</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-400">About</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400">Disclaimer</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 dark:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Disclaimer</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              For informational purposes only. Consult a tax professional for official advice.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} Pak Tax Calculator. Built by Muhammad Yasir.
        </div>
      </div>
    </footer>
  );
}
