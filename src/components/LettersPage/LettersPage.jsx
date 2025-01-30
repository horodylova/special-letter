import React, { useState, useEffect } from "react";
import {
  PageContainer,
  CardContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  EmptyMessage,
  Button,
} from "./LettersPage.styled";
import Modal from "../CreateLetter/CreateLetter";
import ReadLetterModal from "../ReadLetter/ReadLetter";
import cardImage from "../../assets/letter_card.jpeg";
import { isToday } from "../../utils/dateUtils";

const LettersPage = () => {
  const [letters, setLetters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  useEffect(() => {
    const storedLetters = localStorage.getItem("letters");
    if (storedLetters) {
      setLetters(JSON.parse(storedLetters));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("letters", JSON.stringify(letters));
  }, [letters]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLetter = (newLetter) => {
    setLetters((prevLetters) => [...prevLetters, newLetter]);
    setIsModalOpen(false);
  };

  const handleOpenReadLetterModal = (letter) => {
    setSelectedLetter(letter);
  };

  const handleCloseReadLetterModal = () => {
    setSelectedLetter(null);
  };

  return (
    <PageContainer>
      {letters.length === 0 ? (
        <EmptyMessage>Write your first letter to the future.</EmptyMessage>
      ) : (
        <CardContainer>
          {letters.map((letter, index) => (
            <Card key={index}>
              <CardImage src={cardImage} alt="Sealed Letter" />
              <CardContent>
                <CardTitle>Open on {letter.deliveryDate}</CardTitle>
                {isToday(letter.deliveryDate) && (
                  <Button onClick={() => handleOpenReadLetterModal(letter)}>
                    Time to open this letter
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      )}
      <Button onClick={handleOpenModal}>Create a Letter</Button>
      {isModalOpen && <Modal onClose={handleCloseModal} onSubmit={handleAddLetter} />}
      {selectedLetter && (
        <ReadLetterModal
          onClose={handleCloseReadLetterModal}
          letter={selectedLetter}
        />
      )}
    </PageContainer>
  );
};

export default LettersPage;






