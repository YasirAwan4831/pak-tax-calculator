export function calculateBusinessTax(annualIncome, slabs) {
  if (!annualIncome || annualIncome <= 0) return { tax: 0, effectiveRate: 0 };

  let tax = 0;
  for (const slab of slabs) {
    if (annualIncome > slab.min) {
      tax = slab.fixedTax + (annualIncome - slab.min) * slab.rate;
    }
  }

  return {
    annualTax: Math.round(tax),
    effectiveRate: parseFloat(((tax / annualIncome) * 100).toFixed(2)),
    netIncome: Math.round(annualIncome - tax),
  };
}
