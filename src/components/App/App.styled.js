import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #f9f6f1;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f4a261;
    color: #333;
  }

  &.active {
    background-color: #e76f51;
    color: white;
  }
`;
