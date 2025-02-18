import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 70%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  display: block;
`;

export const Image = styled.img`
  width: 40%;
  margin: 0 20px 20px 0;
  float: left;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #e76f51;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

