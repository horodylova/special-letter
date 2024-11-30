import React, { useState } from "react";
import sendToKestra from "../../api/sendToKestra";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Input,
  SubmitButton,
  Form,
  Label,
  Select,
} from "./Modal.styled";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    messenger: "",
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
      await sendToKestra(formData);
      setStatusMessage("Data successfully sent!");
      setFormData({
        email: "",
        name: ""
      });
      onSubmit();
    } catch (error) {
      setStatusMessage("Failed to send data. Please try again.");
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Provide Your Name and Email</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Your Name:
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Svitlana Horodylova"
              required
            />
          </Label>
          <Label>
            Your Email:
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your-email@example.com"
              required
            />
          </Label>
          <Label>
            Preferred Messenger:
            <Select
              name="messenger"
              value={formData.messenger}
              onChange={handleChange}
              required
            >
              <option value="">Select Messenger</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Discord">Discord</option>
              <option value="Slack">Slack</option>
            </Select>
          </Label>
          <SubmitButton type="submit"></SubmitButton>
        </Form>
        {statusMessage && <p>{statusMessage}</p>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;


