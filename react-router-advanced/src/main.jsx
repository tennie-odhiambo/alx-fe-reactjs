import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { AuthProvider } from './components/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </AuthProvider>
)
