import React from 'react'
import {
    HomeContainer,
    Title,
    Description,
    Button,
} from "./Home.styled"

const Home = ({ onButtonClick }) => {
    return (
        <HomeContainer>
            <Title>Get your special letter delivered to you</Title>
            <Description>
                Hello! We’re excited to bring you personalized, motivational letters right to your inbox.  
                With just one click, you’ll start receiving positive and uplifting messages from us.  
                No need to worry about missing out on our emails – we’ve got it all covered! 
                Simply leave us your information, and we’ll send you your first special letter.
            </Description>
            <Button onClick={onButtonClick}>Subscribe for Special Letters</Button>
        </HomeContainer>
    )
}

export default Home;
