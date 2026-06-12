// Federal Budget 2026-27 — Pakistan Income Tax Slabs
// Based on Finance Bill 2026 proposals

export const salarySlabs2027 = [
  { min: 0, max: 600000, rate: 0, fixedTax: 0, description: "Exempt" },
  { min: 600001, max: 1200000, rate: 0.05, fixedTax: 0, description: "5% of amount exceeding Rs. 600,000" },
  { min: 1200001, max: 2400000, rate: 0.15, fixedTax: 30000, description: "Rs. 30,000 + 15% of amount exceeding Rs. 1,200,000" },
  { min: 2400001, max: 3600000, rate: 0.25, fixedTax: 210000, description: "Rs. 210,000 + 25% of amount exceeding Rs. 2,400,000" },
  { min: 3600001, max: 6000000, rate: 0.30, fixedTax: 510000, description: "Rs. 510,000 + 30% of amount exceeding Rs. 3,600,000" },
  { min: 6000001, max: Infinity, rate: 0.35, fixedTax: 1230000, description: "Rs. 1,230,000 + 35% of amount exceeding Rs. 6,000,000" },
];

export const businessSlabs2027 = [
  { min: 0, max: 600000, rate: 0, fixedTax: 0 },
  { min: 600001, max: 1200000, rate: 0.15, fixedTax: 0 },
  { min: 1200001, max: 1600000, rate: 0.20, fixedTax: 90000 },
  { min: 1600001, max: 3200000, rate: 0.30, fixedTax: 170000 },
  { min: 3200001, max: 5600000, rate: 0.40, fixedTax: 650000 },
  { min: 5600001, max: Infinity, rate: 0.45, fixedTax: 1610000 },
];

export const rentalSlabs2027 = [
  { min: 0, max: 300000, rate: 0, fixedTax: 0 },
  { min: 300001, max: 600000, rate: 0.05, fixedTax: 0 },
  { min: 600001, max: 2000000, rate: 0.10, fixedTax: 15000 },
  { min: 2000001, max: Infinity, rate: 0.25, fixedTax: 155000 },
];

export const capitalGainSlabs2027 = {
  immovableProperty: [
    { holdingYears: 1, rate: 0.15 },
    { holdingYears: 2, rate: 0.10 },
    { holdingYears: 3, rate: 0.075 },
    { holdingYears: 4, rate: 0.05 },
    { holdingYears: null, rate: 0 },
  ],
  securities: 0.15,
};

export const agricultureSlabs2027 = [
  { min: 0, max: 400000, rate: 0, fixedTax: 0 },
  { min: 400001, max: 800000, rate: 0.05, fixedTax: 0 },
  { min: 800001, max: 1200000, rate: 0.10, fixedTax: 20000 },
  { min: 1200001, max: Infinity, rate: 0.15, fixedTax: 60000 },
];
