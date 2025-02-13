import React, { useState } from "react";
import {   
  Overlay,   
  ModalContainer,   
  CloseButton,   
  Input,   
  SubmitButton,   
  Form,   
  Label,   
  TextArea, 
} from "./CreateLetter.styled";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    text: "",
    deliveryDate: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      setStatusMessage("Your letter has been saved and sent!");
      setFormData({
        text: "",
        deliveryDate: "",
      });
      onClose();  
    } catch (error) {
      setStatusMessage("Failed to send your letter. Please try again.");
      console.error(error);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Write Your Letter</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Your Letter:
            <TextArea
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </Label>
          <Label>
            Delivery Date:
            <Input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]} 
              required
            />
          </Label>
          <SubmitButton type="submit"></SubmitButton>
        </Form>
        {statusMessage && <p>{statusMessage}</p>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;



