import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  EmptyMessage,
  Button,
  ScrollableContainer,
  YearFolder,
  YearTitle,
  CardContainer,
  ContentWrapper, 
  ButtonContainer
} from "./LettersPage.styled";
import Modal from "../CreateLetter/CreateLetter";
import ReadLetterModal from "../ReadLetter/ReadLetter";
import cardImage from "../../assets/letter_card.jpeg";
import { AppContext } from "../../contexts/AppContext";
import { removeToken } from "../../utils/setGetAndRemoveToken";
import {
  getLetters,
  createLetter,
  getLetterById,
} from "../../services/lettersService";
import { organizeLettersByYear } from "../../utils/organizeLettersByYear";

const LettersPage = () => {
  const navigate = useNavigate();
  const {
    user,
    loading,
    setLoading,
    error,
    setError,
    lettersList,
    setLettersList,
    setIsAuthenticated
  } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleAuthError = () => {
    removeToken();
    setIsAuthenticated(false);
    navigate("/login");
  };

  const loadLetters = async () => {
    try {
      setLoading(true);
      const response = await getLetters();

      const lettersWithDeliveryDate = response.map((letter) => ({
        ...letter,
        deliveryDate: letter.created_at,
      }));

      setLettersList(lettersWithDeliveryDate || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching letters:", err);
      if (err.message.includes("Invalid token") || err.response?.status === 401) {
        handleAuthError();
        return;
      }
      setError("Failed to load letters. Please try again later.");
      setLettersList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLetters();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLetter = async (newLetter) => {
    try {
      await createLetter({
        ...newLetter,
        user_id: user.id,
      });
      loadLetters();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error creating letter:", err);
      if (err.response?.status === 401) {
        handleAuthError();
      }
    }
  };

  const handleOpenReadLetterModal = async (letter) => {
    try {
      const fullLetter = await getLetterById(letter.id);
      setSelectedLetter(fullLetter);
    } catch (err) {
      console.error("Error fetching letter details:", err);
      if (err.response?.status === 401) {
        handleAuthError();
      }
    }
  };

  const handleCloseReadLetterModal = () => {
    setSelectedLetter(null);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const renderLetters = () => {
    if (!lettersList || lettersList.length === 0) {
      return <EmptyMessage>Write your first letter to the future.</EmptyMessage>;
    }

    const organizedLetters = organizeLettersByYear(lettersList);

    return (
      <ScrollableContainer>
        {organizedLetters.map(({ year, letters }) => (
          <YearFolder key={year}>
            <YearTitle>{year}</YearTitle>
            <CardContainer>
              {letters.map((letter) => {
                const openDate = new Date(letter.opened_at);
                const today = new Date();

                return (
                  <Card key={letter.id}>
                    <CardImage src={cardImage} alt="Sealed Letter" />
                    <CardContent>
                      {openDate > today ? (
                        <CardTitle>
                          {`The letter can be opened on ${formatDate(letter.opened_at)}`}
                        </CardTitle>
                      ) : (
                        <>
                          <CardTitle>
                            {`Letter created ${formatDate(letter.created_at)}`}
                          </CardTitle>
                          <Button onClick={() => handleOpenReadLetterModal(letter)}>
                            Time to open the letter
                          </Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </CardContainer>
          </YearFolder>
        ))}
      </ScrollableContainer>
    );
  };

  return (
    <PageContainer>
      <ContentWrapper>
        {loading ? (
          <div className="text-center p-4">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : (
          renderLetters()
        )}
      </ContentWrapper>

      <ButtonContainer>
        <Button onClick={handleOpenModal}>Create a Letter</Button>
      </ButtonContainer>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} onSubmit={handleAddLetter} />
      )}

      {selectedLetter && (
        <ReadLetterModal
          onClose={handleCloseReadLetterModal}
          letter={selectedLetter}
          onLetterDelete={loadLetters}
        />
      )}
    </PageContainer>
  );
};

export default LettersPage;
