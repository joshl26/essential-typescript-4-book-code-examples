export function sum1(...vals: number[]): number {
  return vals.reduce((total, val) => (total += val));
}
