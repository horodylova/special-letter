import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Header,
  Image,
  ContentWrapper,
  Text,
  DeleteButton,
} from "./ReadLetter.styled";
import sampleImage from "../../assets/article_image.jpg";
import { deleteLetter } from "../../services/lettersService";


const ReadLetterModal = ({ onClose, letter, onLetterDelete }) => {
  const handleDelete = async () => {
    try {
      const isDeleted = await deleteLetter(letter.rows[0].id);
      if (isDeleted) {
        onClose();
        if (onLetterDelete) {
          onLetterDelete();
        }
      }
    } catch (error) {
      console.error("Error deleting letter:", error);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Header>Your Special Letter</Header>
        <ContentWrapper>
          <Image src={sampleImage} alt="Decorative" />
          <Text>{letter.rows[0].letter_text}</Text>
        </ContentWrapper>
        <DeleteButton onClick={handleDelete}>
          Delete Letter
        </DeleteButton>
      </ModalContainer>
    </Overlay>
  );
};

export default ReadLetterModal;