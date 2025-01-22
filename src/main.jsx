import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppProvider} from './contexts/AppContext.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <AppProvider>
     <App />
     </AppProvider>

);