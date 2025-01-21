import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import Login from "./components/Login/Login";
import LettersPage from "./components/Letters/LettersPage";
import { Header, Nav, NavLink } from "./components/App/App.styled";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/letters">Letters</NavLink>
            <NavLink to="/login">Sign In</NavLink>
            <NavLink to="/Register">Register</NavLink>
          </Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CreateNewUser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/letters" element={<LettersPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


