import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Router from './router';

import './index.scss';
import ProviderWrapper from 'provider';

const Root = () => {
  return (
    <ProviderWrapper store={store}>
      <Router />
    </ProviderWrapper>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);