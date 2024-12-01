import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Header,
  Image,
  ContentWrapper,
  Text,
} from "./ReadLetterModal.styled";
import sampleImage from "../../assets/article_image.jpg";

const ReadLetterModal = ({ onClose, letter }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Header>You wrote this letter on {letter.date}</Header>
        <ContentWrapper>
          <Image src={sampleImage} alt="Decorative" />
          <Text>{letter.text}</Text>
        </ContentWrapper>
      </ModalContainer>
    </Overlay>
  );
};

export default ReadLetterModal;
