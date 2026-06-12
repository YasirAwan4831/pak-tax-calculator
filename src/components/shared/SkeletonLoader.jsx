export default function SkeletonLoader({ className = "" }) {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800 ${className}`} />
  );
}
