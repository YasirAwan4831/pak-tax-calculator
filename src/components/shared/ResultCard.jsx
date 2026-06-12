import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function ResultCard({ title, value, subtitle, highlight = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-900/20"
          : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
      }`}
    >
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? "text-primary-700 dark:text-primary-500" : "text-gray-900 dark:text-white"}`}>
        <AnimatedCounter value={value} />
      </p>
      {subtitle && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>}
    </motion.div>
  );
}
