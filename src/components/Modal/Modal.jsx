import React, { useState } from 'react';
import {
    Overlay,
    ModalContainer,
    CloseButton,
    Input,
    SubmitButton,
    Form
  } from "./Modal.styled";

const Modal = ({onClose, onSubmit}) =>   {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email);
        setEmail("");
        onSubmit();
    }

    const [email, setEmail] = useState("")
    
    return (
        <Overlay>
        <ModalContainer>
          <CloseButton onClick={onClose}>×</CloseButton>
          <h2>Leave your email</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubmitButton type="submit"></SubmitButton>
          </Form>
        </ModalContainer>
      </Overlay>
    )

}
export default Modal;