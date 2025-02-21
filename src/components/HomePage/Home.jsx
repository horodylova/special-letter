import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  HomeContainer,
  ContentWrapper,
  Header,
  Description,
  Button,
  ButtonsContainer
} from "./Home.styled";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <HomeContainer>
      <ContentWrapper>
        <Header>Write a Letter to Your Future Self</Header>
        <Description>
          Imagine opening a letter that has been waiting for you for years. Who will you be in the
          future? What are your goals, your dreams, your thoughts? Where do you live? Who are the
          people around you? Write down your advice, your wishes, and everything else you want to
          say to your future self.
        </Description>
        <ButtonsContainer>
          {isAuthenticated ? (
            <Link to="/letters">
              <Button>Letters</Button>
            </Link>
          ) : (
            <>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </>
          )}
        </ButtonsContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;



