export const isToday = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
};

export const isFutureDate = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  return targetDate > today;
};

export const isPastDate = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  return targetDate < today;
};

export const formatLetterDate = (date) => {
  const targetDate = new Date(date);
  const today = new Date();

  if (isToday(date)) {
    return "Today";
  }

  if (isFutureDate(date)) {
    return `Will open on ${targetDate.toLocaleDateString()}`;
  }

  if (isPastDate(date)) {
    return `Opened on ${targetDate.toLocaleDateString()}`;
  }
};