import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LettersPage from "./components/Letters/LettersPage";
import { Header, Nav, NavLink } from "./components/App/App.styled";

function App() {
  return (
    <Router>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/letters">Letters</NavLink>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letters" element={<LettersPage />} />
      </Routes>
    </Router>
  );
}

export default App;



