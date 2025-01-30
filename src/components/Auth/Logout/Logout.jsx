import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContext';
import { logoutUser } from '../../../api/authService';
import { getToken, removeToken } from '../../../utils/setGetAndRemoveToken';
import { LogoutButton } from './Logout.styled';

const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, setError } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      const token = getToken();
      await logoutUser(token);
      
     
      removeToken();
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
      
      navigate('/login');
    } catch (error) {
      setError(error.message);
      
      removeToken();
      setUser(null);
      setIsAuthenticated(false);
      navigate('/login');
    }
  };

  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  );
};

export default Logout;