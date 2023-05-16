
export const formatNumber = (v: any) => {
  // This function casts -0s to 0
  const n = Number(v)
  return n === 0 ? 0 : n
}

export const toPrecision = (n: number, precision: number) => {
const precisionAmount = 10 ** precision
  return Math.round(n * 100 * precisionAmount) / precisionAmount
}