export const organizeLettersByYear = (letters) => {
  if (!letters || !Array.isArray(letters) || letters.length === 0) {
    return [];
  }

  const lettersByYear = new Map();
  const currentDate = new Date();

  letters.forEach(letter => {
     const openDate = new Date(letter.opened_at);
    
     if (!openDate || openDate.getFullYear() === 1970 || isNaN(openDate.getTime())) {
       const year = currentDate.getFullYear();
      
      if (!lettersByYear.has(year)) {
        lettersByYear.set(year, []);
      }
      
       lettersByYear.get(year).push({
        ...letter,
        opened_at: currentDate.toISOString()
      });
    } else {
      const year = openDate.getFullYear();
      
      if (!lettersByYear.has(year)) {
        lettersByYear.set(year, []);
      }
      
      lettersByYear.get(year).push(letter);
    }
  });

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