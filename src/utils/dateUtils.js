export const isToday = (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    return (
      today.getFullYear() === targetDate.getFullYear() &&
      today.getMonth() === targetDate.getMonth() &&
      today.getDate() === targetDate.getDate()
    );
  };
  