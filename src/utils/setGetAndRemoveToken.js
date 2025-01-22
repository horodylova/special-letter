function setToken(token) {
    localStorage.setItem("token", token);
  }
  
  function removeToken() {
    localStorage.removeItem("token");
  }
  
  function getToken() {
    return localStorage.getItem("token");
  }
  
  export { setToken, removeToken, getToken };
  