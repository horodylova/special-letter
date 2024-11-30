import React, { Component } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Message,
} from "./SecondModal.styled";

const SecondModal = ({ onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Message>
          Thank you for subscribing! Your subscription is now active, and you’ll soon receive your first motivational letter. Keep an eye on your inbox! We’re delighted to have you with us and hope our letters will be valuable to you.
        </Message>
      </ModalContainer>
    </Overlay>
  );
};

export default SecondModal;
