import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContext';
import { registerUser } from '../../../services/authService';
import { setToken } from '../../../utils/setGetAndRemoveToken';
import {
  RegisterContainer,
  RegisterForm,
  Title,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ErrorMessage
} from './CreateNewUser.styled';

const CreateNewUser = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, setError, loading, setLoading, error } = useContext(AppContext);

   useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

   const [isSubmitting, setIsSubmitting] = useState(false);

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
      const { user, token } = await registerUser(formData.username, formData.password);
      
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      
      setFormData({ username: '', password: '' });
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Create New Account</Title>
        
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength={3}
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
            minLength={6}
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </SubmitButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default CreateNewUser;