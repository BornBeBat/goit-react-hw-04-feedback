export const countPositiveFeedbackPercentage = (
  positive,
  total
) => {
  if (total < 1) return;
  return Math.trunc((positive / total) * 100) + '%';
};
