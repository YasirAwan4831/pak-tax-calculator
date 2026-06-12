import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-primary-600 p-3 text-white shadow-lg transition hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
