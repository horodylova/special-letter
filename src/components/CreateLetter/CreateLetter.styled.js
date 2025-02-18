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
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #e76f51;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;
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

