import styled from "styled-components";

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

export const Message = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 25px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #ccc;
  
  &:first-child {
    background-color: #f9f6f1;
    color: #333;
    
    &:hover {
      background-color: #eee;
    }
  }
  
  &:last-child {
    background-color: #e76f51;
    color: white;
    border-color: #e76f51;
    
    &:hover {
      background-color: #e85d3d;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;