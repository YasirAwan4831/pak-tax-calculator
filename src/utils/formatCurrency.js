export function formatPKR(amount) {
  if (amount == null || isNaN(amount)) return "Rs. 0";
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function parseCurrencyInput(value) {
  if (!value && value !== 0) return 0;
  const cleaned = String(value).replace(/[^0-9.]/g, "");
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}
