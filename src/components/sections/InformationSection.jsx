import { BookOpen, FileText, Scale } from "lucide-react";

const items = [
  {
    icon: Scale,
    title: "Progressive Tax Slabs",
    description:
      "Pakistan uses a progressive tax system where higher income is taxed at higher rates. Our calculator applies the correct slab based on your total annual income.",
  },
  {
    icon: FileText,
    title: "Finance Act 2025",
    description:
      "Tax slabs for 2025-26 are based on the Finance Act 2025. The 2026-27 slabs reflect proposed changes in the Finance Bill 2026.",
  },
  {
    icon: BookOpen,
    title: "Multiple Income Types",
    description:
      "Whether you earn salary, run a business, receive rental income, sell property, or earn from agriculture — we have dedicated calculators for each.",
  },
];

export default function InformationSection() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Understanding Pakistan Income Tax</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Key information about how income tax works in Pakistan
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
