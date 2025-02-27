import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Overlay,
  ModalContainer,
  SubmitButton,
  Form,
  Label,
  TextArea,
  DatePickerWrapper
} from "./CreateLetter.styled";

import { CloseButton } from "../Styles/CloseButton.styled";

const Modal = ({ onClose, userId, onSubmit }) => {
  const [formData, setFormData] = useState({
    text: "",
    deliveryDate: null,
  });
  const [statusMessage, setStatusMessage] = useState("");
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      deliveryDate: date
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    const formattedDate = formData.deliveryDate
      ? formData.deliveryDate.toISOString().split('T')[0]
      : "";
    
    await onSubmit({
      user_id: userId,
      text: formData.text,
      deliveryDate: formattedDate,
    });
      
    setFormData({
      text: "",
      deliveryDate: null,
    });
      
    onClose();
  };
   
  const today = new Date();
  
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose} />
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
            <DatePickerWrapper>
              <DatePicker
                selected={formData.deliveryDate}
                onChange={handleDateChange}
                minDate={today}
                placeholderText="Select delivery date"
                dateFormat="MMMM d, yyyy"
                required
                className="datepicker-input"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                yearDropdownItemNumber={10}
              />
            </DatePickerWrapper>
          </Label>
          <SubmitButton type="submit" />
        </Form>
        {statusMessage && <p>{statusMessage}</p>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;



