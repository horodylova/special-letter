import React, { useState } from 'react';
import {
    Overlay,
    ModalContainer,
    CloseButton,
    Input,
    SubmitButton,
    Form
  } from "./Modal.styled";

const Modal = ({onClose}) =>   {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
        setEmail("")
        onClose();
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