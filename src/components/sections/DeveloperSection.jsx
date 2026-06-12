import { Code2, ExternalLink, Heart } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
          <Code2 className="h-8 w-8 text-primary-600 dark:text-primary-500" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">Built with Care</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Pak Tax Calculator is developed by Muhammad Yasir to help Pakistanis understand and plan
          their income tax obligations. Made with{" "}
          <Heart className="inline h-4 w-4 text-red-500" /> for the community.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <ExternalLink className="h-5 w-5" />
          View on GitHub
        </a>
      </div>
    </section>
  );
}
