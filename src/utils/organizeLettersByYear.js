export const organizeLettersByYear = (letters) => {
  if (!letters || !Array.isArray(letters) || letters.length === 0) {
    return [];
  }

  // Создаем Map для группировки писем по году открытия
  const lettersByYear = new Map();

  letters.forEach(letter => {
    const openDate = new Date(letter.opened_at);
    const year = openDate.getFullYear();
    
    if (!lettersByYear.has(year)) {
      lettersByYear.set(year, []);
    }
    lettersByYear.get(year).push(letter);
  });

  // Преобразуем Map в массив и сортируем года
  const sortedYears = Array.from(lettersByYear.entries())
    .sort(([yearA], [yearB]) => yearA - yearB)
    .map(([year, yearLetters]) => ({
      year: String(year),
      letters: yearLetters.sort((a, b) => 
        new Date(a.opened_at) - new Date(b.opened_at)
      )
    }));

  return sortedYears;
};
