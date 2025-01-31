import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { HomeContainer, ContentWrapper, Header, Description, Button } from "./Home.styled";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

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
        {isAuthenticated &&  <Button>Letters</Button> }
        </Link>
        <Link to="/register">
        {!isAuthenticated && <Button>Sign Up</Button> }
        </Link>
        <Link to="/login">
        {!isAuthenticated && <Button>Sign In</Button> }
        </Link>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;



