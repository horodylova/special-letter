import { API_URL } from '../configs/api';

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Registration failed' };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: 'Registration failed' };
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Login failed' };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: 'Login failed' };
  }
};

export const logoutUser = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Logout failed' };
    }

    return await response.json();
  } catch (error) {
    return { error: 'Logout failed' };
  }
};

export const checkAuthToken = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

     const response = await fetch(`${API_URL}/api/letters`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};