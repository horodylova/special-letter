import React, { Component } from 'react'
import {
    HomeContainer,
    Title,
    Description,
    Button,
  } from "./Home.styled"

const Home = ({onButtonClick}) => {
  
    return (
        <HomeContainer>
        <Title>Your special letter is on its way</Title>
        <Description>
          Hello! I’m your dedicated letter courier.  
          I understand how important it is for you to receive your letter as quickly as possible.  
          Let me take care of checking your inbox for you.  
          Simply leave me your instructions, and I’ll handle the rest.  
          I’ll check your email for you every few minutes and send you a notification in your messenger as soon as the long-awaited letter lands in your inbox.
        </Description>
        <Button onClick={onButtonClick}>Notify Me Instantly</Button>
      </HomeContainer>
    )
  
}
export default Home;