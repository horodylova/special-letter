import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  ContentWrapper,
  ButtonContainer,
  Button
} from './LettersPage.styled';

import LettersList from './components/LettersList';
import Modal from '../CreateLetter/CreateLetter';
import ReadLetterModal from '../ReadLetter/ReadLetter';

import { AppContext } from '../../contexts/AppContext';
import { removeToken } from '../../utils/setGetAndRemoveToken';
import { checkAuthToken } from '../../services/authService';
import {
  getLetters,
  createLetter,
  getLetterById,
} from '../../services/lettersService';

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
    navigate('/login');
  };

  const verifyAuthentication = async () => {
    const isTokenValid = await checkAuthToken();
    if (!isTokenValid) {
      handleAuthError();
      return false;
    }
    return true;
  };

  const loadLetters = async () => {
    try {
      setLoading(true);
      
       const isTokenValid = await verifyAuthentication();
      if (!isTokenValid) return;

      const response = await getLetters();

      const lettersWithDeliveryDate = response.map((letter) => ({
        ...letter,
        deliveryDate: letter.created_at,
      }));

      setLettersList(lettersWithDeliveryDate || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching letters:', err);
      if (err.response?.status === 401) {
        handleAuthError();
        return;
      }
      setError('Failed to load letters. Please try again later.');
      setLettersList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLetters();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleOpenReadLetterModal = async (letter) => {
    try {
      const isTokenValid = await verifyAuthentication();
      if (!isTokenValid) return;

      const fullLetter = await getLetterById(letter.id);
      setSelectedLetter(fullLetter);
    } catch (err) {
      console.error('Error fetching letter details:', err);
    }
  };

  const handleCloseReadLetterModal = () => {
    setSelectedLetter(null);
  };

  const handleOpenModal = async () => {
    const isTokenValid = await verifyAuthentication();
    if (!isTokenValid) return;
    
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLetter = async (newLetter) => {
    try {
      const isTokenValid = await verifyAuthentication();
      if (!isTokenValid) return;

      await createLetter({
        ...newLetter,
        user_id: user.id,
      });
      loadLetters();
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error creating letter:', err);
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        {loading ? (
          <div className="text-center p-4">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : (
          <LettersList
            letters={lettersList}
            onOpenLetter={handleOpenReadLetterModal}
            formatDate={formatDate}
          />
        )}
      </ContentWrapper>

      <ButtonContainer>
        <Button onClick={handleOpenModal}>Create a Letter</Button>
      </ButtonContainer>

      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          onSubmit={handleAddLetter}
        />
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