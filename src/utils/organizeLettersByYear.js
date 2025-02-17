export const organizeLettersByYear = (letters) => {
   const grouped = letters.reduce((acc, letter) => {
    const creationDate = new Date(letter.created_at);
     const year = creationDate.getFullYear();
    if (year === 1970) {
       const currentYear = new Date().getFullYear();
      if (!acc[currentYear]) {
        acc[currentYear] = [];
      }
      acc[currentYear].push({
        ...letter,
        created_at: new Date().toISOString()  
      });
    } else {
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(letter);
    }
    return acc;
  }, {});

 
  return Object.entries(grouped)
    .sort(([yearA], [yearB]) => yearA - yearB)  
    .map(([year, letters]) => ({
      year,
       letters: letters.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    }));
};