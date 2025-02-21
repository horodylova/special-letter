import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;

  a {
    text-decoration: none;
  }

  /* Если внутри контейнера только одна ссылка, центрируем её */
  a:only-child {
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background-color: #e76f51;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 120px;

  &:hover {
    background-color: #d35400;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;