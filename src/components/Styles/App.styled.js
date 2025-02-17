import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #e76f51;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f9f6f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const LogoIcon = styled.span`
  font-size: 1.8rem;
  
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 1023px) {
    position: absolute;
    top: 100%;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    background-color: #e76f51;
    padding: 20px;
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: 30px;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  color: #f9f6f1;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f4a261;
    color: #333;
  }

  &.active {
    background-color: #f4a261;
    color: white;
  }

  @media (max-width: 1023px) {
    width: 100%;
    text-align: center;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #f9f6f1;
    transition: all 0.3s;

    &:first-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
    }

    &:last-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;
