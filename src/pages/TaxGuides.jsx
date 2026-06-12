import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    title: "Salary Tax Guide",
    description: "Understanding progressive tax slabs for salaried individuals in Pakistan.",
    topics: ["Tax-free threshold", "Slab rates", "Monthly vs annual calculation"],
  },
  {
    title: "Business Income Tax",
    description: "How business and professional income is taxed under FBR rules.",
    topics: ["Self-employed rates", "Fixed tax components", "Net income calculation"],
  },
  {
    title: "Rental Income Tax",
    description: "Tax obligations for property owners earning rental income.",
    topics: ["Exemption limits", "Progressive rental slabs", "Monthly rental conversion"],
  },
  {
    title: "Capital Gains Tax",
    description: "Tax on gains from property and securities sales.",
    topics: ["Holding period rates", "Immovable property", "Securities taxation"],
  },
  {
    title: "Agriculture Tax",
    description: "Income tax on agricultural earnings in Pakistan.",
    topics: ["Provincial considerations", "Income slabs", "Exemption thresholds"],
  },
];

export default function TaxGuides() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tax Guides</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Comprehensive guides to help you understand Pakistan income tax
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.title}
            className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{guide.title}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{guide.description}</p>
            <ul className="mt-4 space-y-1">
              {guide.topics.map((topic) => (
                <li key={topic} className="text-sm text-gray-500 dark:text-gray-400">• {topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-500"
        >
          Try the calculators
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
