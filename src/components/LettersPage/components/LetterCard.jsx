import React from 'react';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  Button
} from '../LettersPage.styled';
import cardImage from "../../../assets/letter_card.jpeg";
const LetterCard = ({ letter, onOpenLetter, formatDate }) => {
  const openDate = new Date(letter.opened_at);
  const today = new Date();

  return (
    <Card>
      <CardImage src={cardImage} alt="Sealed Letter" />
      <CardContent>
        {openDate > today ? (
          <CardTitle>
            {`The letter can be opened on ${formatDate(letter.opened_at)}`}
          </CardTitle>
        ) : (
          <>
            <CardTitle>
              {`Letter created ${formatDate(letter.created_at)}`}
            </CardTitle>
            <Button onClick={() => onOpenLetter(letter)}>
              Time to open the letter
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LetterCard;