import React, { Component } from 'react'
import {Overlay, ModalContainer, CloseButton, Message } from './SecondModal.styled'

const SecondModal = ({onClose}) =>   {
    
    return (
        <Overlay>
        <ModalContainer>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Message>
            We've started keeping an eye on your inbox and will notify you in your messenger as soon as the long-awaited letter arrives!
          </Message>
        </ModalContainer>
      </Overlay>
    )
  
}

export default SecondModal;