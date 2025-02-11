export const organizeLettersByYear = (letters) => {
    const grouped = letters.reduce((acc, letter) => {
      const openDate = new Date(letter.opened_at);
      const year = openDate.getFullYear();
      
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(letter);
      return acc;
    }, {});
    return Object.entries(grouped)
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, letters]) => ({
      year,
      letters: letters.sort((a, b) => new Date(b.opened_at) - new Date(a.opened_at))
    }));
};