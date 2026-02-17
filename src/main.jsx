import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { SkillProvider } from './contexts/SkillContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillProvider>
      <App />
    </SkillProvider>
  </StrictMode>
);