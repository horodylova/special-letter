import React from 'react';
import {
  ScrollableContainer,
  EmptyMessage
} from '../LettersPage.styled';
import YearSection from './YearSection';
import { organizeLettersByYear } from '../../../utils/organizeLettersByYear';

const LettersList = ({ letters, onOpenLetter, formatDate }) => {
  if (!letters || letters.length === 0) {
    return <EmptyMessage>Write your first letter to the future.</EmptyMessage>;
  }

  const organizedLetters = organizeLettersByYear(letters);

  return (
    <ScrollableContainer>
      {organizedLetters.map(({ year, letters }) => (
        <YearSection
          key={year}
          year={year}
          letters={letters}
          onOpenLetter={onOpenLetter}
          formatDate={formatDate}
        />
      ))}
    </ScrollableContainer>
  );
};

export default LettersList;