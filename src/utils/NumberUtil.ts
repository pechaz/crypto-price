export const formatNumber = (val: number) => {
  return val.toLocaleString(undefined, { minimumFractionDigits: 2 });
};
