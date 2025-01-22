import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lettersList, setLettersList] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  return (
    <AppContext.Provider value={{ user, setUser, setLoading, error, loading, setError, isAuthenticated, setIsAuthenticated, lettersList, setLettersList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };