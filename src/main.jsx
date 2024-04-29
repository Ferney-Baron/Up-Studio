import React from 'react';
import ReactDOM from 'react-dom/client';
import { UpStudioApp } from './UpStudioApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UpStudioApp />
    </BrowserRouter>
  </React.StrictMode>,
)
