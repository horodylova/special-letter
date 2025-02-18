import React from 'react';
import {
  YearFolder,
  YearTitle,
  CardContainer
} from '../LettersPage.styled';
import LetterCard from './LetterCard';

const YearSection = ({ year, letters, onOpenLetter, formatDate }) => {
  return (
    <YearFolder>
      <YearTitle>{year}</YearTitle>
      <CardContainer>
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            letter={letter}
            onOpenLetter={onOpenLetter}
            formatDate={formatDate}
          />
        ))}
      </CardContainer>
    </YearFolder>
  );
};

export default YearSection;