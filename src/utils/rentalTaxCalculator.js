export function calculateRentalTax(annualRental, slabs) {
  if (!annualRental || annualRental <= 0) return { tax: 0, effectiveRate: 0 };

  let tax = 0;
  for (const slab of slabs) {
    if (annualRental > slab.min) {
      tax = slab.fixedTax + (annualRental - slab.min) * slab.rate;
    }
  }

  return {
    annualTax: Math.round(tax),
    monthlyTax: Math.round(tax / 12),
    effectiveRate: parseFloat(((tax / annualRental) * 100).toFixed(2)),
    netIncome: Math.round(annualRental - tax),
  };
}
