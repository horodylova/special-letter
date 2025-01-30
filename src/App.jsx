import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/HomePage/Home";
import CreateNewUser from "./components/Auth/CreateNewUser/CreateNewUser";
import Login from "./components/Auth/Login/Login";
import LettersPage from "./components/LettersPage/LettersPage";
import { Header, Nav, NavLink } from "./components/App/App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { removeToken, getToken } from "./utils/setGetAndRemoveToken";
import { AppContext } from "../src/contexts/AppContext";


function App() {
   const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

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
            {!isAuthenticated &&  <NavLink to="/login">Sign In</NavLink> }
            {!isAuthenticated && <NavLink to="/register">Register</NavLink>}
            {isAuthenticated && <NavLink onClick={handleLogout} to="/">Logout</NavLink>}
          </Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {!isAuthenticated && <Route path="/register" element={<CreateNewUser />} /> }
          {!isAuthenticated && <Route path="/login" element={<Login />} /> }
          {isAuthenticated && <Route path="/letters" element={<LettersPage />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



