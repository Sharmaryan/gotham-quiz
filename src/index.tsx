import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider, ThemeProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QuizProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
