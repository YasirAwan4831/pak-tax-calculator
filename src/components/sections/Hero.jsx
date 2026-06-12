import { motion } from "framer-motion";
import { ArrowRight, Calculator, Shield, Zap } from "lucide-react";

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-emerald-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-100 backdrop-blur">
            Federal Budget 2025-26 & 2026-27
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pakistan Income Tax
            <span className="block text-primary-200">Calculator</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            Calculate salary, business, rental, capital gain, and agriculture tax instantly
            using official FBR tax slabs. Free, accurate, and always up to date.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={scrollToCalculator}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition hover:bg-primary-50"
            >
              <Calculator className="h-5 w-5" />
              Start Calculating
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Instant Results", desc: "Real-time tax calculations" },
              { icon: Shield, title: "FBR Compliant", desc: "Official tax slab rates" },
              { icon: Calculator, title: "5 Calculators", desc: "All income types covered" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <Icon className="mx-auto h-8 w-8 text-primary-200" />
                <h3 className="mt-3 font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-primary-100/80">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
