export function calculateSalaryTax(annualIncome, slabs) {
  if (!annualIncome || annualIncome <= 0) return { tax: 0, effectiveRate: 0 };

  let tax = 0;
  for (const slab of slabs) {
    if (annualIncome > slab.min) {
      tax = slab.fixedTax + (annualIncome - slab.min) * slab.rate;
    }
  }

  const effectiveRate = annualIncome > 0 ? ((tax / annualIncome) * 100).toFixed(2) : 0;

  return {
    annualTax: Math.round(tax),
    monthlyTax: Math.round(tax / 12),
    effectiveRate: parseFloat(effectiveRate),
    netAnnualIncome: Math.round(annualIncome - tax),
    netMonthlyIncome: Math.round((annualIncome - tax) / 12),
  };
}
