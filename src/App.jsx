import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/HomePage/Home";
import CreateNewUser from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import LettersPage from "./components/LettersPage/LettersPage";
import { 
  Header, 
  Nav, 
  NavLink, 
  Logo, 
  LogoIcon,
  BurgerButton 
} from "./components/Styles/App.styled";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { removeToken, getToken } from "./utils/setGetAndRemoveToken";
import { AppContext } from "../src/contexts/AppContext";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header>
          <Logo to="/">
            <LogoIcon>✉️</LogoIcon>
            Special Letter
          </Logo>
          
          <BurgerButton 
            onClick={toggleMenu} 
            $isOpen={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </BurgerButton>

          <Nav $isOpen={isMenuOpen}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            {isAuthenticated && (
              <NavLink to="/letters" onClick={closeMenu}>Letters</NavLink>
            )}
            {!isAuthenticated && (
              <>
                <NavLink to="/login" onClick={closeMenu}>Sign In</NavLink>
                <NavLink to="/register" onClick={closeMenu}>Register</NavLink>
              </>
            )}
            {isAuthenticated && (
              <NavLink onClick={() => { handleLogout(); closeMenu(); }} to="/">
                Logout
              </NavLink>
            )}
          </Nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          {!isAuthenticated && <Route path="/register" element={<CreateNewUser />} />}
          {!isAuthenticated && <Route path="/login" element={<Login />} />}
          {isAuthenticated && <Route path="/letters" element={<LettersPage />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



