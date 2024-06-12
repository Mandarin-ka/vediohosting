export const getMargin = (m: number | number[]) => {
  return Array.isArray(m) ? `${m[0]}px ${m[1]}px ${m[2]}px ${m[3]}px` : `${m}px`;
};
