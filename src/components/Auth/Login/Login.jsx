import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContext';
import { loginUser } from '../../../services/authService';
import { setToken } from '../../../utils/setGetAndRemoveToken';
import {
  LoginContainer,
  LoginForm,
  Title,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ErrorMessage
} from './Login.styled';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, setError, loading, setLoading, error } = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { user, token } = await loginUser(formData.username, formData.password);
      
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      
      setFormData({ username: '', password: '' });
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;