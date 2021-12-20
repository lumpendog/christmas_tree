export const getPercent = (value, min, max) => {
  const result = Math.ceil((100 - (value / (max - min)) * 100) * 1000) / 1000;
  return result;
};
