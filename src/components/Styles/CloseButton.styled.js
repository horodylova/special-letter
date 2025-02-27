import styled from "styled-components";


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f0e6d9;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: #a67c52;
    border-radius: 1px;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
  
  &:hover {
    background-color: #e8d5b5;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
    
    &::before, &::after {
      background-color: #8b5e3c;
    }
  }
  
  &:active {
    transform: scale(0.95);
  }
`;