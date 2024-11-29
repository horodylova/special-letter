import React, { useState } from "react";
import sendToKestra from "../../api/sendToKestra"
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Input,
  SubmitButton,
  Form,
  Label,
  Select
} from "./Modal.styled";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    senderEmail: "",
    letterName: "",
    messenger: "",
    executionId: "12345", 
  });

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
      const response = await sendToKestra(formData);
      console.log("Response from Kestra:", response);

       setFormData({
        email: "",
        name: "",
        senderEmail: "",
        letterName: "",
        messenger: "",
        executionId: "12345", 
      });

      onSubmit();
    } catch (error) {
      console.log("Failed to send data. Please try again.");
    }
  };


  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Leave your email</h2>
        <Form onSubmit={handleSubmit}>
       
          <Label>
            Your Name:
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            
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
            Sender's Email:
            <Input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              placeholder="sender@example.com"
              required
            />
          </Label>

          <Label>
            Special Letter Name:
            <Input
              type="text"
              name="letterName"
              value={formData.letterName}
              onChange={handleChange}
              placeholder="Letter From Tim Berners-Lee"
              
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
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
