import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CombineComponents } from './shared/combineComponents';
import { GlobalCtxProvider } from './context/globalCtx';
import { Project1CtxProvider } from './context/project1Ctx';
import { Project3CtxProvider } from './context/project3Ctx';
import { Project3ProductCtxProvider } from './context/project3CtxProduct';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CombineComponents
      components={[
        GlobalCtxProvider,
        Project1CtxProvider,
        Project3CtxProvider,
        Project3ProductCtxProvider,
      ]}
    >
      <Reset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombineComponents>
  </React.StrictMode>
);

reportWebVitals();
