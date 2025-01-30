import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Header,
  Image,
  ContentWrapper,
  Text,
} from "./ReadLetter.styled";
import sampleImage from "../../assets/article_image.jpg";

const ReadLetterModal = ({ onClose, letter }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Header>Your Special Letter</Header>
        <ContentWrapper>
          <Image src={sampleImage} alt="Decorative" />
          <Text>{letter.text}</Text>
        </ContentWrapper>
      </ModalContainer>
    </Overlay>
  );
};

export default ReadLetterModal;
