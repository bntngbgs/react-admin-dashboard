import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SidebarContextProvider } from './context/SidebarContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
