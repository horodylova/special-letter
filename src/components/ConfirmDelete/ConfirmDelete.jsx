import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Message,
  Button,
  ButtonsContainer
} from "./ConfirmDelete.styled";
 
const ConfirmDelete = ({ onClose, onConfirm }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Message>
          We just want to make sure. Do you really want to delete this letter?
        </Message>
        <ButtonsContainer>
          <Button onClick={onClose}>Leave it</Button>
          <Button onClick={onConfirm}>Delete</Button>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ConfirmDelete;
