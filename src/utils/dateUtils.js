export const isToday = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  
   if (!date || isNaN(targetDate.getTime())) {
    return true;
  }

  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
};

export const isFutureDate = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  
   if (!date || isNaN(targetDate.getTime())) {
    return false;
  }

  return targetDate > today;
};

export const isPastDate = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  
   if (!date || isNaN(targetDate.getTime())) {
    return false;
  }

  return targetDate < today;
};

export const formatLetterDate = (date) => {
  const targetDate = new Date(date);
  const today = new Date();

   if (!date || targetDate.getFullYear() === 1970 || isNaN(targetDate.getTime())) {
    return "Today";
  }

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