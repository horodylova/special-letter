import React, {useState} from 'react';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  Button
} from '../LettersPage.styled';
import cardImage from "../../../assets/letter_card.jpeg";
import decryptText from '../../../utils/decryptText';

const LetterCard = ({ letter, onOpenLetter, formatDate }) => {
  const openDate = new Date(letter.opened_at);
  const today = new Date();
  const [isDecrypted, setIsDecrypted] = useState(false);

  const handleOpenLetter = () => {
     const decryptedLetter = {
      ...letter,
      decrypted_text: decryptText(letter.letter_text)
    };
    
    onOpenLetter(decryptedLetter);
  };

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
            <Button onClick={handleOpenLetter}>
              Time to open the letter
            </Button>
            {/* <Button onClick={() => onOpenLetter(letter)}>
              Time to open the letter
            </Button> */}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LetterCard;