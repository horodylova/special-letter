import React, { useState, useContext, useEffect } from 'react';
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
  const { setIsAuthenticated, setUser, setError, setLoading, error } = useContext(AppContext);

   useEffect(() => {
    setLoading(false);
  }, [setLoading]);

   const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await loginUser(formData.username, formData.password);
      
      if (response.error) {
        setError(response.error);
        return;
      }

      if (response.user && response.token) {
        setToken(response.token);
        setUser(response.user);
        setIsAuthenticated(true);
        setFormData({ username: '', password: '' });
        navigate('/');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Login failed. Please try again or register if you don\'t have an account.');
    } finally {
      setIsSubmitting(false);
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

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;