import styled from "styled-components";
import envelopeIcon from "../../../src/assets/letter.jpeg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #f9f6f1;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  
  h2 {
    margin-bottom: 20px;  
  }
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  
  .datepicker-input {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    font-family: inherit;
  }
  
  .react-datepicker {
    font-family: inherit;
    border: 1px solid #e8d5b5;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
  
  .react-datepicker__header {
    background-color: #f0e6d9;
    border-bottom: 1px solid #e8d5b5;
    padding-top: 12px; 
  }
  
  .react-datepicker__current-month {
    color: #8b5e3c;
    font-weight: bold;
    margin-bottom: 8px;  
  }
  
  .react-datepicker__day-name {
    color: #a67c52;
  }
  
  .react-datepicker__day--selected {
    background-color: #a67c52;
    color: white;
    
    &:hover {
      background-color: #8b5e3c;
    }
  }
  
  .react-datepicker__day:hover {
    background-color: #f0e6d9;
  }
  
  .react-datepicker__day--disabled {
    color: #ccc;
  }
  
  .react-datepicker__navigation {
    top: 12px; /* Adjusted to match header padding */
  }
  
  .react-datepicker__triangle {
    border-bottom-color: #f0e6d9 !important;
  }
  
   .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    background-color: #f9f6f1;
    border: 1px solid #e8d5b5;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    overflow: hidden; /* Hide overflow */
    padding: 4px 0;
  }
  
  .react-datepicker__month-option,
  .react-datepicker__year-option {
    padding: 8px 12px;
    transition: background-color 0.2s;
    color: #8b5e3c;
    
    &:hover {
      background-color: #f0e6d9;
    }
    
    &--selected {
      background-color: #a67c52;
      color: white;
      
      &:hover {
        background-color: #8b5e3c;
      }
    }
  }
  
  .react-datepicker__month-select,
  .react-datepicker__year-select {
    background-color: #f9f6f1;
    border: 1px solid #e8d5b5;
    border-radius: 4px;
    color: #8b5e3c;
    padding: 6px 10px;
    font-family: inherit;
    cursor: pointer;
    appearance: none; /* Remove default arrow */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath fill='%23a67c52' d='M0 0h12L6 6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    padding-right: 24px; /* Make room for the custom arrow */
    
    &:focus {
      outline: none;
      border-color: #a67c52;
      box-shadow: 0 0 0 2px rgba(166, 124, 82, 0.2);
    }
    
    option {
      background-color: #f9f6f1;
      color: #8b5e3c;
      padding: 8px;
    }
  }
  
  .react-datepicker__year-dropdown-container,
  .react-datepicker__month-dropdown-container {
    display: inline-block;
    margin: 0 5px;
  }
  
   .react-datepicker__month-dropdown-container--select,
  .react-datepicker__year-dropdown-container--select {
    min-width: 80px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;
  resize: none;
  height: 120px;
  white-space: pre-wrap;
  font-family: inherit;
  line-height: 1.5;
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url(${envelopeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  margin: 20px auto 0;
  
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
  
  &:active {
    transform: scale(1);
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;