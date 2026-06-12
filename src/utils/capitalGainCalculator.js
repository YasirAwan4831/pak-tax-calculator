export function calculateCapitalGainTax(gainAmount, holdingYears, slabs) {
  if (!gainAmount || gainAmount <= 0) return { tax: 0, effectiveRate: 0 };

  let rate = 0;
  for (const slab of slabs.immovableProperty) {
    if (slab.holdingYears === null || holdingYears <= slab.holdingYears) {
      rate = slab.rate;
      break;
    }
  }

  const tax = gainAmount * rate;
  return {
    tax: Math.round(tax),
    rate: (rate * 100).toFixed(1),
    effectiveRate: (rate * 100).toFixed(1),
    netGain: Math.round(gainAmount - tax),
  };
}
