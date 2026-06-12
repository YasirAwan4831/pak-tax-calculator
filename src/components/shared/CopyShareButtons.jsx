import { Copy, Share2 } from "lucide-react";
import toast from "react-hot-toast";

export default function CopyShareButtons({ text, title = "Tax Calculation Result" }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text });
        toast.success("Shared successfully!");
      } catch {
        /* user cancelled */
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <Copy className="h-4 w-4" />
        Copy
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>
    </div>
  );
}
