import React, { useState } from "react";
// import sendToKestra from "../../api/sendToKestra";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Input,
  SubmitButton,
  Form,
  Label,
  TextArea,
} from "./Modal.styled";

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
      // await sendToKestra(formData);
      onSubmit(formData);
      setStatusMessage("Your letter has been saved and sent!");
      setFormData({
        text: "",
        deliveryDate: "",
      });
    } catch (error) {
      setStatusMessage("Failed to send your letter. Please try again.");
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



