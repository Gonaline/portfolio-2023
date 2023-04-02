import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/globalStyle';
import { CombineComponents } from './shared/combineComponents';
import { PagesCtxProvider } from './context/pagesCtx';
import { Project1CtxProvider } from './context/project1Ctx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CombineComponents components={[PagesCtxProvider, Project1CtxProvider]}>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombineComponents>
  </React.StrictMode>
);

reportWebVitals();
