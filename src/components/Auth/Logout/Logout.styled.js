import styled from "styled-components";

export const LogoutButton = styled.button`
  background-color: #e76f51;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;