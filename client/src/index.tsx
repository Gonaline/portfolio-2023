import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CombineComponents } from './shared/combineComponents';
import { GlobalCtxProvider } from './context/globalCtx';
import { RockPaperScissorsCtxProvider } from './context/rockPaperScissorsCtx';
import { StickersShopCtxProvider } from './context/stickersShopCtx';
import { StickersShopProductCtxProvider } from './context/stickersShopProductCtx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CombineComponents
      components={[
        GlobalCtxProvider,
        RockPaperScissorsCtxProvider,
        StickersShopCtxProvider,
        StickersShopProductCtxProvider,
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
