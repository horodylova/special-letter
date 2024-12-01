import React, { useState } from "react";
import {
  PageContainer,
  CardContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDate,
  EmptyMessage,
  Button,
} from "./LettersPage.styled";
import Modal from "../Modal/Modal";
import cardImage from "../../assets/letter_card.jpeg";

const LettersPage = () => {
  const [letters, setLetters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <CardTitle>{letter.title}</CardTitle>
                <CardDate>Do not open until: {letter.date}</CardDate>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      )}
      <Button onClick={handleOpenModal}>Create a Letter</Button>
      {isModalOpen && <Modal onClose={handleCloseModal} onSubmit={handleAddLetter} />}
    </PageContainer>
  );
};

export default LettersPage;


