import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/globalStyle';
import { CtxProvider } from './context/project1Ctx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CtxProvider>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>
);

reportWebVitals();
