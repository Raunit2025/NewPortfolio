import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './App.css';
import { SkillProvider } from './contexts/SkillContext.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillProvider>
      <App />
    </SkillProvider>
  </StrictMode>
);