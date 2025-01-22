import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import Login from "./components/Login/Login";
import LettersPage from "./components/Letters/LettersPage";
import { Header, Nav, NavLink } from "./components/App/App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { removeToken, getToken } from "./utils/setGetAndRemoveToken";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);  
  }, []);

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/letters">Letters</NavLink>
            <NavLink to="/login">Sign In</NavLink>
            {!isAuthenticated && <NavLink to="/register">Register</NavLink>}
            {isAuthenticated && <NavLink onClick={handleLogout} to="/">Logout</NavLink>}
          </Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CreateNewUser />} />
          <Route path="/login" element={<Login />} />
          {isAuthenticated && <Route path="/letters" element={<LettersPage />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



