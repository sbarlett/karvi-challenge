export function formatNumber(num?: number) {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
}
