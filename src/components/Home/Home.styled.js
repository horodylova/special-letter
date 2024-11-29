import styled from "styled-components";
import backgroundImage from "../../assets/background_picture.jpeg"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url(${backgroundImage}) no-repeat center center;  
  background-size: cover;
  height: 100vh; 
  overflow: hidden;  
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 10px;
  border-radius: 8px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 600px;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 10px;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #f4a261; 
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e76f51; 
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;