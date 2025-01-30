import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Message,
} from "./ApprovedCreatedLetter.styled";

const SecondModal = ({ onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Message>
          Your letter has been successfully written and saved! It’s now securely stored and will be delivered on the date you’ve chosen. Thank you for sharing your thoughts and trusting us to keep them safe. Until then, your letter remains sealed.
        </Message>
      </ModalContainer>
    </Overlay>
  );
};

export default SecondModal;

