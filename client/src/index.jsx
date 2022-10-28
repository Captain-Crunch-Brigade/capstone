import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import GlobalCSS from './global.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <GlobalCSS />
    <App />
  </BrowserRouter>,
);
