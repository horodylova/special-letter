import { API_URL } from '../configs/api';

export const getLetters = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/letters`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch letters');
    }

    const data = await response.json();
    return data.letters;
  } catch (error) {
    throw error;
  }
};

export const createLetter = async (letterData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/letters`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: letterData.user_id,
        created_at: new Date().toISOString(),
        opened_at: null,
        letter_text: letterData.text
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create letter');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getLetterById = async (letterId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/letters/${letterId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch letter');
    }

    const data = await response.json();
    return data.letter;
  } catch (error) {
    throw error;
  }
};

export const deleteLetter = async (letterId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/letters/${letterId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete letter');
    }

    return response.status === 204;
  } catch (error) {
    throw error;
  }
};