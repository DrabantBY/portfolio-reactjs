import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
