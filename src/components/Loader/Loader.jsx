import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`;

const LoaderWrapper = styled.div`
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Spinner = styled.svg`
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;

const SpinnerCircle = styled.circle`
  fill: none;
  stroke: #e76f51;
  stroke-width: 4;
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`;

const LoadingText = styled.p`
  margin-top: 15px;
  color: #e76f51;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.9;
  letter-spacing: 0.5px;
`;

const Loader = ({ text = "Loading..." }) => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <Spinner viewBox="0 0 50 50">
          <SpinnerCircle cx="25" cy="25" r="20" />
        </Spinner>
      </LoaderWrapper>
      <LoadingText>{text}</LoadingText>
    </LoaderContainer>
  );
};

export default Loader;