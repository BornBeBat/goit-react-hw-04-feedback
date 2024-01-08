export const countTotalFeedback = obj =>
  Object.values(obj).reduce((acc, cur) => acc + cur, 0);
