import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Header,
  Image,
  ContentWrapper,
  Text,
  DeleteButton,
} from "./ReadLetter.styled";
import sampleImage from "../../assets/article_image.jpg";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

import { deleteLetter } from "../../services/lettersService"; 
import formatLetterText from "../../utils/formatLetterText";

const ReadLetterModal = ({ onClose, letter, onLetterDelete }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleOpenConfirmDelete = () => {
    setShowConfirmDelete(true);
  };

  const handleCloseConfirmDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Header>Your Special Letter</Header>
        <ContentWrapper>
          <Image src={sampleImage} alt="Decorative" />
          <Text>
            {formatLetterText(letter.rows[0].letter_text)}
          </Text>
        </ContentWrapper>
        <DeleteButton onClick={handleOpenConfirmDelete}>
          Delete Letter
        </DeleteButton>

        {showConfirmDelete && (
          <ConfirmDelete
            onClose={handleCloseConfirmDelete}
            onConfirm={async () => {
              try {
                const isDeleted = await deleteLetter(letter.rows[0].id);
                if (isDeleted) {
                  onClose();
                  if (onLetterDelete) {
                    onLetterDelete();
                  }
                }
              } catch (error) {
                console.error("Error deleting letter:", error);
              }
            }}
          />
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default ReadLetterModal;