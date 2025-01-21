import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, ContentWrapper, Header, Description, Button } from "./Home.styled";

const Home = () => {
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
        <Link to="/letters">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </Link>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;



